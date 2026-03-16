// steps/wishlist.step.js
async function addToWishlist(page,) {
  console.log('  📍 Étape: Ajout aux favoris');
  
  // Revenir à la recherche
  
  
  await page.waitForTimeout(2000);
  
  // Chercher autre produit
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('link', { name: 'Sport' }).click();
  await page.locator('#sub-menu-wrapper').getByText('MEN', { exact: true }).click();
  await page.getByRole('link', { name: 'Sport' }).click();
  await page.getByRole('link', { name: 'Trousers & Joggers' }).click();
  await page.getByRole('link', { name: 'Loose Fit Water-repellent cargo trousers Loose Fit Water-repellent cargo' }).click();

  // Ajouter aux favoris
  await page.getByRole('button', { name: 'ADD TO FAVOURITES' }).click();
  
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'My Wishlist' }).click();
  await page.waitForTimeout(2000);

  console.log('  ✅ Produit ajouté aux favoris');
}

module.exports = { addToWishlist };