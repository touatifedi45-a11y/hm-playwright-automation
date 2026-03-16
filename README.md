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

🔍 **Note sur le scénario de recherche** :

Pendant l'automatisation, j'ai constaté que le bouton de recherche sur le site HM a un comportement particulier - il n'apparaît pas systématiquement après le clic sur l'icône de recherche.

Pour contourner ce problème et garantir la robustesse du test, j'ai opté pour une approche pragmatique : 
**l'automatisation manuelle de la sélection du produit recherché**.

Concrètement, après avoir tapé "Chemise Relaxed Fit en coton" dans la barre de recherche, j'ai automatisé le clic direct sur le produit souhaité dans les résultats, sans passer par le bouton de recherche. Cette approche :
- Contourne le problème du bouton non fonctionnel
- Garantit que le scénario principal (trouver et sélectionner le produit) est testé
- Reste fidèle au comportement utilisateur réel

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

**Repository** : [https://github.com/touatifedi45-a11y/hm-playwright-automation]
---
**Auteur** : Fedi Touati
