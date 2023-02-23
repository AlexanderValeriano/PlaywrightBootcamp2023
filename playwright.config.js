const { PlaywrightTestConfig } = require("@playwright/test");

const config = {
  retries: 1,
  timeout: 60 * 1000,
  use: {
    headless: false,
    viewPort: { width: 1280, height: 720 },
    video: "off",
    screenshot: "off",
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
