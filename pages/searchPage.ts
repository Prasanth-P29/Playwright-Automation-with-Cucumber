import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  private productTitles = ".inventory_item_name";

  async isProductVisible(productName: string): Promise<boolean> {
    const results = await this.page.$$eval(this.productTitles, (elements) =>
      elements.map((el) => el.textContent?.trim().toLowerCase())
    );

    console.log("🧾 Products found on page:", results);

    return results.includes(productName.toLowerCase());
  }
}
