// steps/cart.step.js
const { expect } = require('@playwright/test');

async function addToCart(page,) {
  console.log('  📍 Étape: Ajout au panier');
  
  // Cliquer sur premier produit
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.waitForTimeout(5000);
  await page.locator('#sub-menu-wrapper').getByText('MEN', { exact: true }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Clothing' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Shirts', exact: true }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Regular Fit Oxford shirt' }).nth(1).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Regular Fit Oxford shirt' }).first().click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'ADD TO BASKET' }).click();
  await page.waitForTimeout(5000);
  console.log('    - Premier produit sélectionné');
  
  await page.waitForTimeout(5000);
  
  // Sélectionner taille
  await page.locator('#swatch-item-size').getByText('M', { exact: true }).click();
  
  await page.waitForTimeout(5000);
  
  // Ajouter au panier
  await page.getByRole('button', { name: 'ADD TO BASKET' }).click();
  await page.waitForTimeout(5000);
  console.log('    - Bouton ajout au panier cliqué');
  
  // Vérifier
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.waitForTimeout(5000);
  console.log('  ✅ Produit ajouté au panier');
}

module.exports = { addToCart };