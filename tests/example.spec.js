const { test, expect } = require("@playwright/test");

test.describe.parallel("Smoke Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test.afterEach(async ({ page }) => {
    console.log("This test is finished");
  });
  //     .locator("//a[@href='https://mamutuelle.interiale.fr']")
  test("Testing Selectors", async ({ page }) => {
    await expect
      .soft(
        page.locator("//header/div[1]/div[1]/div[1]/div[2]/div[1]/div[6]/a[1]")
      )
      .toHaveText("Espace adhérent");

    await page
      .locator(
        "//a[@class='btn py-5 px-4 text-grey-dark'][normalize-space()='Intérieur']"
      )
      .click();
    await expect(
      page.locator("//div[contains(text(),'intérieur')]"),
      "Custom expect message"
    ).toHaveText("intérieur");
  });
});
