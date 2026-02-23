#!/usr/bin/env python3
"""Scaffold a new persona for the Compendium project.

Usage:
    python scripts/add-persona.py "Naval Ravikant" naval-ravikant startups
    python scripts/add-persona.py "Naval Ravikant" naval-ravikant startups --description "..."

Creates the persona directory and prints instructions for updating content.ts.

Exit code 0 on success, 1 on error.
"""

import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PERSONAS_DIR = PROJECT_ROOT / "public" / "content" / "personas"
CONTENT_TS = PROJECT_ROOT / "src" / "lib" / "content.ts"

VALID_CATEGORIES = {
    "productivity", "success", "startups", "fundraising",
    "hiring", "career", "life-advice", "communication",
}

SLUG_PATTERN = re.compile(r"^[a-z][a-z0-9-]*$")


def main():
    args = sys.argv[1:]

    # Parse --description flag
    description = ""
    if "--description" in args:
        idx = args.index("--description")
        if idx + 1 < len(args):
            description = args[idx + 1]
            args = args[:idx] + args[idx + 2:]
        else:
            print("ERROR: --description requires a value")
            sys.exit(1)

    if len(args) < 3:
        print("Usage: python scripts/add-persona.py <name> <slug> <category> [--description \"...\"]")
        sys.exit(1)

    name, slug, category = args[0], args[1], args[2]

    # Validate slug
    if not SLUG_PATTERN.match(slug):
        print(f"ERROR: invalid slug '{slug}' (must be lowercase letters, numbers, hyphens; start with letter)")
        sys.exit(1)

    # Validate category
    if category not in VALID_CATEGORIES:
        print(f"ERROR: invalid category '{category}'")
        print(f"Valid categories: {', '.join(sorted(VALID_CATEGORIES))}")
        sys.exit(1)

    # Check for existing slug
    persona_dir = PERSONAS_DIR / slug
    if persona_dir.exists():
        print(f"ERROR: persona directory already exists: {persona_dir}")
        sys.exit(1)

    # Check content.ts for existing slug
    if CONTENT_TS.exists():
        content = CONTENT_TS.read_text()
        if f'slug: "{slug}"' in content:
            print(f"ERROR: slug '{slug}' already exists in content.ts")
            sys.exit(1)

    # Create directory
    persona_dir.mkdir(parents=True)
    print(f"Created: {persona_dir.relative_to(PROJECT_ROOT)}/")

    # Print content.ts snippet
    desc = description or f"Description for {name}"
    print(f"""
Next steps:
1. Add an avatar image to: public/content/personas/{slug}/avatar.png
2. Add content files (images/PDFs) to: public/content/personas/{slug}/
3. Add this entry to the personas array in src/lib/content.ts:

  {{
    id: "{slug}",
    name: "{name}",
    slug: "{slug}",
    description: "{desc}",
    avatar: "avatar.png",
    content: [
      {{
        filename: "YOUR_FILE.png",
        title: "Your Title",
        type: "image",
        categories: ["{category}"],
      }},
    ],
  }},""")


if __name__ == "__main__":
    main()
