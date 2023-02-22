const { test, expect } = require("@playwright/test");
//npx playwright test tests/example.spec.js --headed
test("First Test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.pause();
});
