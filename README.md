# 🧪 H&M Playwright Automation

## 🎯 Objectif
Projet d'automatisation de tests pour le site **H&M.com** avec **Playwright**, **TypeScript** et **Cucumber (BDD)**.

## 🛠️ Choix techniques
- **Playwright** : Automatisation browser moderne, fiable avec auto-wait intégré
- **TypeScript** : Typage statique pour un code plus robuste et maintenable
- **Cucumber (BDD)** : Scénarios lisibles en langage naturel (Gherkin)
- **Architecture modulaire** : Séparation claire entre features, steps et données

## ✅ Scénarios automatisés
1. **Choix du Pays** : Sélection de la France sur la page d'accueil
2. **Inscription (Sign Up)** : Création d'un compte utilisateur
3. **Déconnexion (Log Out)** : Déconnexion du compte
4. **Recherche produit** : Recherche de "Chemise Relaxed Fit en coton"
5. **Ajout au panier** : Sélection taille M et ajout au panier
6. **Ajout aux favoris** : Ajout d'un second produit aux favoris

## 🔧 Défis techniques rencontrés et solutions

### 🚫 Blocage 403 (Anti-bot)
**Problème** : Le site H&M bloquait les requêtes automatisées avec une erreur 403 Access Denied.

**Solution** :
- Ajout d'un **User-Agent réaliste** (Chrome 120 / Windows)
- Injection de **headers HTTP** (Accept-Language, Referer, Sec-*)
- Script d'initialisation pour masquer les signes d'automatisation
- Utilisation de `slowMo` pour un comportement plus humain

### 🔍 Problème de bouton de recherche
**Problème** : Le bouton de recherche n'apparaît pas systématiquement après le clic sur l'icône.

**Solution pragmatique** :
- Saisie du produit dans la barre de recherche
- Clic **direct sur le produit** dans les résultats
- Contournement du bouton défaillant tout en testant le scénario principal

## 🚀 Installation et exécution

### Prérequis
- Node.js (v16 ou +)
- Git

### Installation
```bash
git clone https://github.com/touatifedi45-a11y/hm-playwright-automation.git
cd hm-playwright-automation
npm install
npx playwright install

## 🚀 Exécuter les tests

```bash
# Tous les tests Cucumber
npm test

# Test spécifique
npx cucumber-js features/country.feature

# Avec logs détaillés
npx cucumber-js --format progress-bar --format summary

# Mode UI Playwright (pour les tests Playwright uniquement)
npx playwright test --ui
```

## 📁 Structure du projet

```
hm-playwright-automation/
├── features/                 # Scénarios Gherkin (.feature)
│   ├── country.feature
│   └── account.feature
├── step-definitions/         # Implémentation Cucumber
│   ├── country.steps.js
│   ├── signup.steps.js
├── steps/                    # Fonctions réutilisables
│   ├── country.step.js
│   ├── signup.step.js
│   └── logout.step.js
│   └── cart.step.js
│   └── wishlist.step.js
├── data/                     # Données centralisées
│   └── test-data.js
├── support/                  # Configuration Cucumber
│   ├── world.js
│   └── hooks.js
├── tests/                    # Tests supplémentaires
├── test-results/             # Captures et rapports
├── reports/                  # Rapports HTML
├── .github/                  # CI/CD (optionnel)
├── .vscode/                  # Configuration VS Code
├── allure-results/           # Résultats Allure (optionnel)
├── node_modules/             # Dépendances
├── .gitignore
├── cucumber.js               # Config Cucumber
├── package.json
├── package-lock.json
└── README.md
```

## 🛡️ Anti-détection implémentée
- User-Agent réaliste
- Headers HTTP complets
- Masquage des signes d'automatisation
- Délais variables entre actions

## 📝 Notes
> 💡 **Approche pragmatique** : Face aux contraintes techniques du site, j'ai privilégié des solutions robustes qui garantissent la fiabilité des tests tout en restant fidèles au comportement utilisateur.

> 🎯 **Objectif atteint** : Les 6 scénarios demandés sont automatisés avec succès, avec une architecture propre et maintenable.

## ✨ Améliorations récentes
- ✅ Tests de déconnexion implémentés
- ✅ Gestion de l'erreur 403 contournée
- ✅ Structure complète fonctionnelle
- ✅ Documentation enrichie

---

**🔗 Repository** : [https://github.com/touatifedi45-a11y/hm-playwright-automation](https://github.com/touatifedi45-a11y/hm-playwright-automation)

**👤 Auteur** : Fedi Touati
