const { BasePage } = require('./base.page');

class FavoritesPage extends BasePage {
  async isFavorited(productName) {
    const item = this.page.getByRole('link', { name: new RegExp(productName, 'i') });
    return (await item.count()) > 0;
  }
}

module.exports = { FavoritesPage };
