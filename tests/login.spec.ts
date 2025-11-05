import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { SearchPage } from "../pages/searchPage";

test("Login and verify product", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  await loginPage.navigateTo();
  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  const isVisible = await searchPage.isProductVisible("Sauce Labs Backpack");
  expect(isVisible).toBeTruthy();
});
