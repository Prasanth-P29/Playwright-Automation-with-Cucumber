import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  private usernameField = "#user-name";
  private passwordField = "#password";
  private loginButton = "#login-button";

  async navigateTo() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }
}
