const { test, expect } = require("@playwright/test");
//npx playwright test tests/example.spec.js --headed --browser=firefox
//npx playwright test tests/example.spec.js --headed --browser=all
// test("First Test", async ({ page }) => {
//   await page.goto("https://playwright.dev");
//   // await page.pause();
//   const title = page.locator(".navbar__title.text--truncate");
//   await expect(title).toHaveText("Playwright");
// });

test("Simple click test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  // await page.pause();
  await page.locator("a[href='/add_remove_elements/']").click();
  await page.locator("button[onclick='addElement()']").click();
});
