import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { SearchPage } from "../pages/searchPage";
import { LoginPage } from "../pages/loginPage";

let searchPage: SearchPage;
let loginPage: LoginPage;

Given("the user is on the products page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateTo();
  await loginPage.login("standard_user", "secret_sauce");

  searchPage = new SearchPage(this.page);
  await this.page.waitForURL("https://www.saucedemo.com/inventory.html");
});

When("the user searches for {string}", async function (productName: string) {
  console.log(`🔎 Simulating search for product: ${productName}`);
});

Then("the product {string} should be displayed in results", async function (productName: string) {
  const isVisible = await searchPage.isProductVisible(productName);
  expect(isVisible).toBeTruthy();
});
