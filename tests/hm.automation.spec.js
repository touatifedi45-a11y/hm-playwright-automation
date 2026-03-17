// @ts-check
import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false }); // Headed mode
  const context = await browser.newContext();
  const page = await context.newPage();
})();

const { selectCountry } = require('../steps/country.step.js');
const { signUp } = require('../steps/signup.steps.js');
const { logout } = require('../steps/logout.step.js');
const { addToCart } = require('../steps/cart.step.js');
const {addToWishlist} = require('../steps/wishlist.step.js')


test('Parcours complet H&M', async ({ page }) => {
  console.log('=== DÉBUT DU TEST ===');
  
  await selectCountry(page);
  console.log('=== TEST TERMINÉ ===');
  await signUp(page);
  console.log('=== TEST TERMINÉ ===');
  await addToCart(page);
  console.log('=== TEST TERMINÉ ===');
  await addToWishlist(page);
  console.log('=== TEST TERMINÉ ===');
  await logout(page);
});