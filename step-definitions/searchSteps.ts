import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { SearchPage } from "../pages/searchPage";

let searchPage: SearchPage;

Given("the user is on the products page", async function () {
  searchPage = new SearchPage(this.page);
  await searchPage.navigateTo("https://www.saucedemo.com/inventory.html");
});

When("the user searches for {string}", async function (productName: string) {
  await searchPage.searchProduct(productName);
});

Then("the product {string} should be displayed in results", async function (productName: string) {
  const isVisible = await searchPage.isProductVisible(productName);
  expect(isVisible).toBeTruthy();
});
