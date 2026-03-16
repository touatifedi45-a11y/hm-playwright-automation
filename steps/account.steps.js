// steps/signup.step.js
const testData = require('../data/test-data.js');
async function signUp(page) {
  console.log('  📍 Étape: Inscription');
  
  // Gérer les cookies
  try {
    const cookiesButton = page.getByRole('button', { name: /accept|allow|got it/i });
    if (await cookiesButton.isVisible({ timeout: 3000 })) {
      await cookiesButton.click();
      console.log('    - Popup cookies fermée');
    }
  } catch (error) {
    console.log('    - Pas de popup cookies');
  }
  
  // Ouvrir le menu compte
  await page.getByRole('link', { name: 'Profile' }).click();
  console.log('    - Menu compte ouvert');
  await page.waitForTimeout(3000);


  // Remplir le formulaire
  await page.getByRole('textbox', { name: 'Email address*' }).fill(testData.user.email);
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Password*' }).fill(testData.user.password);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(5000);

  
  await page.waitForTimeout(3000);
  console.log('  ✅ Inscription réussie');
}

module.exports = { signUp };