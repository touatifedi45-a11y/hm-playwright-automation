const { BasePage } = require('./base.page');

class CartPage extends BasePage {
  async openCart() {
    const cartTriggers = [
      this.page.getByRole('link', { name: /Cart|Bag|Panier/i }),
      this.page.getByRole('button', { name: /Cart|Bag|Panier/i }),
      this.page.locator('a[href*="cart"], a[href*="bag"]'),
    ];
    for (const trigger of cartTriggers) {
      if (await trigger.count()) {
        await trigger.first().click();
        await this.page.waitForLoadState('networkidle');
        return;
      }
    }
    throw new Error('Cart link not found');
  }

  async containsProduct(productName, sizeLabel) {
    const item = this.page.getByRole('link', { name: new RegExp(productName, 'i') }).first();
    const sizeText = this.page.getByText(new RegExp(`Size\\s*${sizeLabel}|Taille\\s*${sizeLabel}`, 'i')).first();
    return (await item.count()) > 0 && (await sizeText.count()) > 0;
  }
}

module.exports = { CartPage };
