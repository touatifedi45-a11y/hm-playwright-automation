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
  console.log('🚀 Lancement du navigateur en mode VISIBLE');
  global.__BROWSER__ = await chromium.launch({
    headless: false,
    slowMo: 800,
    args: [
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled', // Cache que c'est un robot
      '--disable-features=IsolateOrigins,site-per-process',
      '--disable-web-security'
    ],
  });
  console.log('✅ Navigateur lancé');
});

Before(async function () {
  console.log('📄 Création d\'une nouvelle page avec headers');
  
  // 👇 AJOUT: User-Agent et headers pour imiter un vrai navigateur
  this.browser = global.__BROWSER__;
  this.context = await this.browser.newContext({
    baseURL: this.baseUrl,
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    extraHTTPHeaders: {
      'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Referer': 'https://www.google.com/',
      'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'cross-site',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1'
    }
  });
  
  this.page = await this.context.newPage();
  
  // 👇 AJOUT: Injecter un script pour masquer l'automatisation
  await this.page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
    Object.defineProperty(navigator, 'languages', { get: () => ['fr-FR', 'fr', 'en'] });
  });
  
  console.log('✅ Page créée avec protection anti-détection');
});

After(async function () {
  if (this.context) {
    await this.context.close();
    console.log('📄 Page fermée');
  }
});

AfterAll(async function () {
  if (global.__BROWSER__) {
    await global.__BROWSER__.close();
    console.log('✅ Navigateur fermé');
  }
});

setWorldConstructor(HmWorld);