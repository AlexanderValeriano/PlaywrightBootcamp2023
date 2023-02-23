const { test, expect } = require("@playwright/test");

test.describe.parallel("Smoke Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test.afterEach(async ({ page }) => {
    console.log("This test is finished");
  });
  test("Testing Selectors", async ({ page }) => {
    await page
      .locator(
        "//a[@class='btn py-5 px-4 text-grey-dark'][normalize-space()='Intérieur']"
      )
      .click();
    await expect(
      page.locator("//div[contains(text(),'intérieur')]")
    ).toHaveText("intérieur");
  });
});
