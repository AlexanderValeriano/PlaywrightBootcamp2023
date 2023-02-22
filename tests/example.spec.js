const { test, expect } = require("@playwright/test");

test("First Test", async ({ page }) => {
  await page.goto("https://playwright.dev");
});
