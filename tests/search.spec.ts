import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { SearchPage } from "../pages/searchPage";

test("Verify product visibility after login", async ({ page }) => {
  // Create page objects
  const loginPage = new LoginPage(page);
  const searchPage = new SearchPage(page);

  // Step 1️⃣ - Navigate & Login
  await loginPage.navigateTo();
  await loginPage.login("standard_user", "secret_sauce");

  // Step 2️⃣ - Verify user is on inventory page
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // Step 3️⃣ - Search for a product
  const productName = "Sauce Labs Backpack";
  const isVisible = await searchPage.isProductVisible(productName);

  // Step 4️⃣ - Validate product visibility
  expect(isVisible).toBeTruthy();
});
