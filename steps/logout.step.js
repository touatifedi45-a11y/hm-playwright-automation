// steps/logout.step.js
async function logout(page) {
  console.log('  📍 Étape: Déconnexion');
  
  await page.getByRole('link', { name: 'Profile', exact: true }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'SIGN OUT' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(5000);
  console.log('  ✅ Déconnexion réussie');
}

module.exports = { logout };