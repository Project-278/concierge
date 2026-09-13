import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: process.env.QA_BASE_URL || "http://localhost:3000",
    browserName: "chromium",
    launchOptions: { channel: "chrome" },
    trace: "retain-on-failure",
  },
});
