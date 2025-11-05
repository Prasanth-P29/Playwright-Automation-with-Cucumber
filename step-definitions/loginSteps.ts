import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

let loginPage: LoginPage;

Given("the user is on the login page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigateTo();
});

When("the user enters {string} and {string}", async function (username: string, password: string) {
  await loginPage.login(username, password);
});

Then("the user should be logged in successfully", async function () {
  await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
