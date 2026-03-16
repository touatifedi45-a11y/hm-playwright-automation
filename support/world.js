const { chromium } = require('playwright');
const {
  setWorldConstructor,
  setDefaultTimeout,
  BeforeAll,
  AfterAll,
  Before,
  After,
} = require('@cucumber/cucumber');

const DEFAULT_TIMEOUT = 60_000;

class HmWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.state = {};
    this.baseUrl = process.env.BASE_URL || 'https://www2.hm.com';
  }
}

setDefaultTimeout(DEFAULT_TIMEOUT);

BeforeAll(async function () {
  global.__BROWSER__ = await chromium.launch({
    headless: process.env.HEADLESS !== 'false',
    args: ['--disable-dev-shm-usage'],
  });
});

Before(async function () {
  this.browser = global.__BROWSER__;
  this.context = await this.browser.newContext({
    baseURL: this.baseUrl,
  });
  this.page = await this.context.newPage();
});

After(async function () {
  if (this.context) {
    await this.context.close();
  }
});

AfterAll(async function () {
  if (global.__BROWSER__) {
    await global.__BROWSER__.close();
  }
});

setWorldConstructor(HmWorld);
