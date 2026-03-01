import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_ROOT = path.join(ROOT, "src");

const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  ".next",
  "docs",
  "public",
]);

const NEXTJS_CONVENTION_RE =
  /\/(page|layout|route|loading|error|not-found|global-error|template|manifest|opengraph-image|twitter-image|middleware|proxy)\.(ts|tsx)$/;

const NEXTJS_FRAMEWORK_EXPORTS = new Set([
  "GET",
  "POST",
  "PUT",
  "DELETE",
  "PATCH",
  "HEAD",
  "OPTIONS",
  "generateMetadata",
  "generateStaticParams",
  "metadata",
  "dynamic",
  "revalidate",
  "runtime",
  "dynamicParams",
  "preferredRegion",
  "fetchCache",
]);

const BROAD_API_DIRS = ["src/components/ui"];

const EXPORT_EXCEPTIONS = new Set([]);

const FILE_EXCEPTIONS = new Set([]);

function walkTsFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkTsFiles(full));
      continue;
    }
    if (!/\.(ts|tsx|mts|cts)$/.test(entry.name)) continue;
    if (entry.name.endsWith(".d.ts")) continue;
    results.push(full);
  }

  return results;
}

function extractExports(content) {
  const found = [];
  const seen = new Set();
  let match;

  const add = (name, isDefaultName) => {
    if (seen.has(name)) return;
    seen.add(name);
    found.push({ name, isDefaultName });
  };

  const declRe =
    /export\s+(?:async\s+)?(?:function\*?|const|let|var|class|enum)\s+(\w+)/g;
  while ((match = declRe.exec(content))) add(match[1], false);

  const defaultRe = /export\s+default\s+(?:async\s+)?(?:function\*?|class)\s+(\w+)/g;
  while ((match = defaultRe.exec(content))) add(match[1], true);

  const braceRe = /export\s*\{([^}]+)\}/g;
  while ((match = braceRe.exec(content))) {
    const items = match[1].split(",");
    for (const item of items) {
      const trimmed = item.trim();
      if (!trimmed) continue;
      const parts = trimmed.split(/\s+as\s+/);
      const name = (parts.length > 1 ? parts[1] : parts[0]).trim();
      if (/^\w+$/.test(name)) add(name, false);
    }
  }

  return found;
}

function extractSpecifiers(content) {
  const specifiers = [];
  let match;

  const fromRe = /\b(?:import|export)\b[\s\S]*?\bfrom\s*['"]([^'"]+)['"]/g;
  while ((match = fromRe.exec(content))) specifiers.push(match[1]);

  const sideEffectRe = /\bimport\s*['"]([^'"]+)['"]/g;
  while ((match = sideEffectRe.exec(content))) specifiers.push(match[1]);

  const dynamicRe = /\bimport\(\s*['"]([^'"]+)['"]\s*\)/g;
  while ((match = dynamicRe.exec(content))) specifiers.push(match[1]);

  return specifiers;
}

function resolveCandidate(basePath, candidates) {
  const ext = path.extname(basePath);
  const tries = [];

  if (ext) {
    tries.push(basePath);
    if ([".js", ".mjs", ".cjs", ".jsx"].includes(ext)) {
      const without = basePath.slice(0, -ext.length);
      tries.push(`${without}.ts`, `${without}.tsx`, `${without}.mts`, `${without}.cts`);
    }
  } else {
    tries.push(
      `${basePath}.ts`,
      `${basePath}.tsx`,
      `${basePath}.mts`,
      `${basePath}.cts`,
      path.join(basePath, "index.ts"),
      path.join(basePath, "index.tsx"),
      path.join(basePath, "index.mts"),
      path.join(basePath, "index.cts"),
    );
  }

  for (const candidate of tries) {
    const resolved = path.resolve(candidate);
    if (candidates.has(resolved)) return resolved;
  }
  return null;
}

function resolveLocalImport(specifier, fromFile, candidates) {
  if (specifier.startsWith("@/")) {
    const base = path.join(ROOT, "src", specifier.slice(2));
    return resolveCandidate(base, candidates);
  }
  if (!specifier.startsWith(".")) return null;
  const base = path.resolve(path.dirname(fromFile), specifier);
  return resolveCandidate(base, candidates);
}

function isInBroadApiDir(relPath) {
  return BROAD_API_DIRS.some((dir) => relPath.startsWith(`${dir}/`));
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

const allFiles = walkTsFiles(ROOT).sort();
const allFileSet = new Set(allFiles.map((file) => path.resolve(file)));
const sourceFiles = allFiles.filter((file) => file.startsWith(SOURCE_ROOT));
const fileContents = new Map(allFiles.map((file) => [file, fs.readFileSync(file, "utf8")]));

const unreferenced = [];
for (const filePath of sourceFiles) {
  const relPath = path.relative(ROOT, filePath);
  const isConvention = NEXTJS_CONVENTION_RE.test(filePath);
  if (isInBroadApiDir(relPath)) continue;

  const content = fileContents.get(filePath) ?? "";
  for (const { name, isDefaultName } of extractExports(content)) {
    if (name.length < 4) continue;
    if (isConvention && isDefaultName) continue;
    if (isConvention && NEXTJS_FRAMEWORK_EXPORTS.has(name)) continue;
    if (EXPORT_EXCEPTIONS.has(`${relPath}::${name}`)) continue;

    const re = new RegExp(`\\b${name}\\b`);
    let referenced = false;
    for (const [otherPath, otherContent] of fileContents) {
      if (otherPath === filePath) continue;
      if (re.test(otherContent)) {
        referenced = true;
        break;
      }
    }
    if (!referenced) unreferenced.push({ file: relPath, name });
  }
}

if (unreferenced.length > 0) {
  const report = unreferenced
    .sort((a, b) => a.file.localeCompare(b.file))
    .map(({ file, name }) => `  ${file}::${name}`)
    .join("\n");
  fail(
    `Found ${unreferenced.length} unreferenced export(s).\n` +
      `Either remove dead code or add to EXPORT_EXCEPTIONS:\n${report}`,
  );
}

const incoming = new Map(sourceFiles.map((file) => [file, 0]));

for (const fromFile of allFiles) {
  const content = fileContents.get(fromFile) ?? "";
  for (const specifier of extractSpecifiers(content)) {
    const resolved = resolveLocalImport(specifier, fromFile, allFileSet);
    if (!resolved) continue;
    if (resolved === fromFile) continue;
    if (!incoming.has(resolved)) continue;
    incoming.set(resolved, (incoming.get(resolved) ?? 0) + 1);
  }
}

const orphaned = [];
for (const [filePath, refs] of incoming) {
  const relPath = path.relative(ROOT, filePath);
  const baseName = path.basename(filePath, path.extname(filePath));

  if (NEXTJS_CONVENTION_RE.test(filePath)) continue;
  if (/\.(config|setup)\.(ts|tsx|mts|js|mjs)$/.test(filePath)) continue;
  if (baseName === "index") continue;
  if (FILE_EXCEPTIONS.has(relPath)) continue;
  if (refs === 0) orphaned.push(relPath);
}

if (orphaned.length > 0) {
  const report = orphaned.sort().map((entry) => `  ${entry}`).join("\n");
  fail(
    `Found ${orphaned.length} orphaned source file(s).\n` +
      `Either remove or add to FILE_EXCEPTIONS:\n${report}`,
  );
}

console.log("Dead code check passed.");
