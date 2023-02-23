const { test, expect } = require("@playwright/test");
//npx playwright test tests/example.spec.js --headed --browser=firefox
//npx playwright test tests/example.spec.js --headed --browser=all
test("First Test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  // await page.pause();
  const title = page.locator(".navbar__title.text--truncate");
  await expect(title).toHaveText("Playwright");
});

test("Simple click test", async ({ page, browserName }) => {
  // npx playwright test tests/example.spec.js --headed --browser=firefox
  test.skip(browserName === "firefox", "Working on the firefox fix");
  await page.goto("https://the-internet.herokuapp.com/");
  // await page.pause();
  const element = page.locator("a[href='/add_remove_elements/']");
  const addElement = page.locator("button[onclick='addElement()']");
  await element.click();
  await addElement.click();
});

test("Duplicate test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  // await page.pause();
  const element = page.locator("a[href='/add_remove_elements/']");
  const addElement = page.locator("button[onclick='addElement()']");
  await element.click();
  await addElement.click();
});
