const { BasePage } = require('./base.page');

class SearchPage extends BasePage {
  async searchFor(query) {
    const searchBox = this.page.getByRole('searchbox').or(this.page.getByPlaceholder(/Rechercher|Search/i));
    if (!(await searchBox.count())) throw new Error('Search box not found');
    await searchBox.first().fill(query);
    await searchBox.first().press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async openProductFromResults(productName) {
    const productLink = this.page.getByRole('link', { name: new RegExp(productName, 'i') });
    await productLink.first().click();
    await this.page.waitForLoadState('networkidle');
  }

  async productIsVisible(productName) {
    const productLink = this.page.getByRole('link', { name: new RegExp(productName, 'i') });
    return (await productLink.count()) > 0;
  }
}

module.exports = { SearchPage };
