const { test, expect } = require("@playwright/test");
//npx playwright test tests/example.spec.js --headed --browser=firefox
//npx playwright test tests/example.spec.js --headed --browser=all
// npx playwright test --config=playwright.config.js --project=Chrome

test.describe("Smoke Tests", () => {
  // npx playwright test --grep @smoke
  // npx playwright test --grep-invert @smoke / pour executer tous les test sauf le @smoke test
  test("First Test", async ({ page }) => {
    await page.goto("https://playwright.dev");
    // await page.pause();
    const title = page.locator(".navbar__title.text--truncate");
    await expect(title).toHaveText("Playwright");
  });

  test("Simple click test", async ({ page, browserName }) => {
    // npx playwright test tests/example.spec.js --headed --browser=firefox
    // test.skip(browserName === "firefox", "Working on the firefox fix");
    await page.goto("/checkboxes");
    await page.pause();
    // await page.click("a[href='/add_remove_elements/']");
    // const locator1 = page.locator("text = Add/Remove Elementss");
    // await locator1.screenshot({ path: "screenshot2.png" });
    // await page.click("button[onclick='addElement()']");
  });

  test("Duplicate test 1", async ({ page }) => {
    await page.goto("/");
    // await page.pause();
    const element = page.locator("a[href='/add_remove_elements/']");
    await element.click();
    const addElement = page.locator("button[onclick='addElement()']");
    await addElement.click();
  });

  // npx playwright test --grep @regression
  test("Duplicate test 2", async ({ page }) => {
    await page.goto("/");
    // await page.pause();
    const element = page.locator("a[href='/add_remove_elements/']");
    const addElement = page.locator("button[onclick='addElement()']");
    await element.click();
    await addElement.click();
  });
});
