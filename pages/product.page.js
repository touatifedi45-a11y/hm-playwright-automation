const { BasePage } = require('./base.page');

class ProductPage extends BasePage {
  async selectSize(sizeLabel = 'M') {
    const sizeButton = this.page.getByRole('button', { name: new RegExp(`^${sizeLabel}$`, 'i') });
    if (await sizeButton.count()) {
      await sizeButton.first().click();
      return;
    }
    const sizeOption = this.page.locator(`[data-value="${sizeLabel}"]`);
    if (await sizeOption.count()) {
      await sizeOption.first().click();
      return;
    }
    throw new Error(`Size ${sizeLabel} not available`);
  }

  async addToBag() {
    const addButton = this.page.getByRole('button', { name: /Add to cart|Add to bag|Ajouter au panier/i });
    if (!(await addButton.count())) throw new Error('Add to cart button not found');
    await Promise.all([
      this.page.waitForLoadState('networkidle').catch(() => {}),
      addButton.first().click(),
    ]);
  }

  async addToFavorites() {
    const favButtons = [
      this.page.getByRole('button', { name: /Add to favourites|Add to favorites|Ajouter aux favoris/i }),
      this.page.locator('[data-testid*="favourite"], [data-testid*="favorite"]'),
      this.page.locator('button[aria-pressed]'),
    ];
    for (const btn of favButtons) {
      if (await btn.count()) {
        await btn.first().click();
        return;
      }
    }
    throw new Error('Favorites button not found');
  }
}

module.exports = { ProductPage };
