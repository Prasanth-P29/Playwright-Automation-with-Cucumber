import { BeforeAll, AfterAll, Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";
import fs from "fs";

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

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    if (!fs.existsSync("./reports/screenshots")) {
      fs.mkdirSync("./reports/screenshots", { recursive: true });
    }
    const screenshot = await this.page.screenshot({
      path: `./reports/screenshots/${Date.now()}.png`,
      fullPage: true,
    });
    this.attach(screenshot, "image/png");
  }
});
