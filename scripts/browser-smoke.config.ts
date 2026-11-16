import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';
import { browserUse } from './browser-runtime.cjs';

// Exercise the real project/browser/globalSetup wiring without app or DB state.
export default defineConfig({
  testDir: path.resolve('scripts'),
  testMatch: 'browser-runtime.spec.ts',
  webServer: undefined,
  globalSetup: path.resolve('scripts/browser-runtime.cjs'),
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], ...browserUse } }],
  retries: 0,
  reporter: 'list',
});
