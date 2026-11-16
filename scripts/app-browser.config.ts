import path from "node:path";
import { defineConfig, devices } from "@playwright/test";
import { browserUse } from "./browser-runtime.cjs";

// An explicit external target is useful for checking a deployed build or proving
// a regression against the previous production server. Normal runs own port 3018.
const externalTarget = process.env.PLAYWRIGHT_APP_BASE_URL;
const baseURL = externalTarget ?? "http://127.0.0.1:3018";

export default defineConfig({
  testDir: path.resolve("tests"),
  testMatch: "influence.spec.ts",
  globalSetup: path.resolve("scripts/browser-runtime.cjs"),
  fullyParallel: true,
  workers: 2,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [{
    name: "chromium",
    use: { ...devices["Desktop Chrome"], ...browserUse },
  }],
  webServer: externalTarget ? undefined : {
    command: "pnpm start --hostname 127.0.0.1 --port 3018",
    url: baseURL,
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
