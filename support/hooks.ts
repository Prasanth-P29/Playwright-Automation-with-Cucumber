import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

let browser: Browser;
let context: BrowserContext;
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  await this.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
