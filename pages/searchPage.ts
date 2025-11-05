import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  // 🔧  Fixed spacing issue in the selector
  private searchBox = "input[data-test='product-search']"; 
  private searchResults = ".inventory_item_name";

  async searchProduct(productName: string) {
    await this.page.fill(this.searchBox, productName);
    await this.page.keyboard.press("Enter");
  }

  async isProductVisible(productName: string): Promise<boolean> {
    const results = await this.page.$$eval(this.searchResults, (elements) =>
      elements.map((el) => el.textContent?.trim() || "")
    );
    return results.includes(productName);
  }
}
