const { test, expect } = require("@playwright/test");
//npx playwright test tests/example.spec.js --headed --browser=firefox
//npx playwright test tests/example.spec.js --headed --browser=all
test("First Test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page.pause();
});
