const { When } = require('@cucumber/cucumber');
const { signUp } = require('../steps/signup.steps.js');

When("je remplis le formulaire d'inscription", async function() {
  console.log('🔄 Step: Inscription');
  await signUp(this.page);
  console.log('✅ Step inscription terminé');
});