class BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }

  async acceptCookiesIfPresent() {
    const selectors = [
      'button:has-text("Accept all cookies")',
      'button:has-text("Allow all")',
      'button:has-text("Tout accepter")',
      'button:has-text("J\'accepte")',
      '[data-testid="cookie-accept-all"]',
    ];

    for (const selector of selectors) {
      const button = this.page.locator(selector).first();
      if (await button.isVisible({ timeout: 2_000 }).catch(() => false)) {
        await button.click();
        break;
      }
    }
  }
}

module.exports = { BasePage };
