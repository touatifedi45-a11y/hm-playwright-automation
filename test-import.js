// test-import.js
try {
    const step = require('./steps/country.step.js');
    console.log('✅ SUCCÈS! Module importé:', step);
    
    // Vérifie que la fonction existe
    if (step.selectCountry) {
        console.log('✅ La fonction selectCountry existe');
    } else {
        console.log('❌ La fonction selectCountry manque');
    }
} catch (error) {
    console.log('❌ ERREUR:', error.message);
    console.log('Dossier courant:', __dirname);
}