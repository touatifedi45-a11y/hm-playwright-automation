const { BasePage } = require('./base.page');

class HomePage extends BasePage {
  accountTriggers() {
    return [
      this.page.getByRole('link', { name: /Sign in|Log in|Connexion|Se connecter|S'identifier/i }),
      this.page.getByRole('button', { name: /Account|Mon compte/i }),
      this.page.locator('a[href*="signin"], a[href*="login"]'),
      this.page.locator('[data-testid*="account"], [data-testid*="signin"]'),
    ];
  }

  async openAccountMenu() {
    for (const locator of this.accountTriggers()) {
      if (await locator.count()) {
        await locator.first().click();
        return;
      }
    }
    throw new Error('Account / sign-in trigger not found');
  }

  async openFavorites() {
    const targets = [
      this.page.getByRole('link', { name: /Favorites|Favourites|Favoris/i }),
      this.page.locator('a[href*="favourites"], a[href*="favorites"]'),
      this.page.locator('[data-testid*="favourites"]'),
    ];
    for (const locator of targets) {
      if (await locator.count()) {
        await locator.first().click();
        return;
      }
    }
    throw new Error('Favorites link not found');
  }
}

module.exports = { HomePage };
