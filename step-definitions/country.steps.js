const { Given } = require('@cucumber/cucumber');
const { selectCountry } = require('../steps/country.step.js');

Given('je sélectionne le pays {string}', async function(pays) {
  await selectCountry(this.page);
});