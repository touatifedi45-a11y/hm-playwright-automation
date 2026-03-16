const testData = require('../data/test-data.js');
async function selectCountry(page) {
  console.log('Sélection du pays...');
  await page.goto(testData.urls.home);
  await page.getByRole('link', { name: testData.country }).click();
  await page.waitForTimeout(10000);
}

module.exports = { selectCountry };