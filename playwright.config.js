const { PlaywrightTestConfig } = require("@playwright/test");
// baseURL: "https://the-internet.herokuapp.com/",
// baseURL: "https://demoqa.com/text-box",

const config = {
  retries: 0,
  timeout: 30 * 1000,
  reporter: "./reporter.js",
  use: {
    baseURL: "https://www.interiale.fr/",
    headless: true,
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
