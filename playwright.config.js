const { PlaywrightTestConfig } = require("@playwright/test");

const config = {
  retries: 0,
  timeout: 30 * 1000,
  use: {
    headless: false,
    viewPort: { width: 1280, height: 720 },
    video: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "Chrome",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "Webkit",
      use: { browserName: "webkit" },
    },
  ],
};

module.exports = config;
