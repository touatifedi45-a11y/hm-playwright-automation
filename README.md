## 🎯 Objectif
Projet d'automatisation de tests pour le site HM.com avec Playwright, TypeScript et Cucumber

## 🛠️ Choix techniques
- **Playwright** : Automatisation browser moderne et fiable
- **TypeScript** : Typage statique pour un code plus robuste
- **Cucumber (BDD)** : Scénarios lisibles par les non-techniques
- **Page Object Model** : Architecture maintenable

## ✅ Scénarios automatisés
1. Choix du Pays
2. Inscription (Sign Up)
3. Déconnexion (Log Out)
4. Recherche produit: Chemise Relaxed Fit en coton
5. Ajout du produit taille M au panier
6. Ajout d'un produit aux favoris

## 🚀 Installation et exécution

### Prérequis
- Node.js (v16 ou +)
- Git 

### Installation
\`\`\`bash
git clone https://github.com/touatifedi45-a11y/hm-playwright-automation.git
cd hm-playwright-automation
npm install
npx playwright install
\`\`\`

### Exécuter les tests
\`\`\`bash
# Tous les tests
npm test

# Mode UI
npx playwright test --ui

# Avec rapport HTML
npx playwright test --reporter=html
\`\`\`

## 📁 Structure du projet
\`\`\`
hm-playwright-automation/
├── .github/                 # Configuration GitHub
├── .vscode/                 # Configuration VS Code
├── allure-results/          # Résultats des tests Allure
├── node_modules/            # Dépendances
├── pages/                   # Page Objects
├── step-definitions/        # Steps Cucumber
├── test-results/            # Résultats des tests
├── tests/                   # Tests supplémentaires
├── .gitignore              # Fichiers ignorés par git
├── package.json            # Dépendances et scripts
├── package-lock.json       # Version précise des dépendances
└── README.md               # Documentation
\`\`\`

## ⏱️ Délai
**Repository** : [https://github.com/touatifedi45-a11y/hm-playwright-automation]
---
**Auteur** : Fedi Touati
