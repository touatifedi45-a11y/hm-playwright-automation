async function selectCountry(page) {
  console.log('Sélection du pays...');
  await page.goto('https://www2.hm.com/');
  await page.getByRole('link', { name: 'Egypt' }).click();
  await page.waitForTimeout(10000);
}

module.exports = { selectCountry };