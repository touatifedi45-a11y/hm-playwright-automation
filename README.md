# H&M Playwright + Cucumber BDD

Automated end-to-end scenarios against https://www2.hm.com using Playwright with Cucumber (BDD). Covered flows:
- Choix du pays
- Inscription (Sign Up)
- Déconnexion
- Recherche d’un produit « Chemise Relaxed Fit en coton »
- Ajout de la taille M au panier
- Ajout d’un autre produit aux favoris

## Structure
- `features/` : Scénarios Gherkin (`hm_journey.feature`).
- `steps/` : Step definitions orchestrating the flows.
- `pages/` : Page Objects (navigation, auth, recherche, produit, panier, favoris).
- `support/world.js` : Hooks Cucumber + initialisation Playwright (browser/page par scénario).
- `playwright.config.js` : Config Playwright (utilisé si vous lancez `npx playwright test`, non requis pour Cucumber).
- `cucumber.js` : Configuration CLI Cucumber.

## Prérequis
- Node 18+
- Dépendances déjà listées dans `package.json` (`@playwright/test`, `@cucumber/cucumber`, `typescript`).
- Playwright browsers : si besoin, exécuter `npx playwright install chromium`.

## Lancer les scénarios
```bash
npm install
npm run test:bdd          # headless (par défaut)
npm run test:headed       # pour voir le navigateur
```
Variables utiles :
- `BASE_URL` : override du site (défaut `https://www2.hm.com`)
- `HEADLESS=false` : lance Chromium en mode graphique.

## Choix techniques
- **BDD Cucumber** pour exprimer les besoins métier en Gherkin.
- **Page Objects** isolent les sélecteurs et actions (meilleure maintenance si l’UI change).
- **Hooks Cucumber** créent un contexte Playwright propre par scénario pour éviter les fuites d’état.
- **Sélecteurs résilients** : priorité aux rôles/texte accessibles, avec fallback CSS génériques. Ajustez dans `pages/*.page.js` si l’UI évolue.
- **Données dynamiques** : inscription génère un email aléatoire (`hm_<uuid>@example.com`) pour éviter les collisions de compte.

## Points d’attention / limites
- Le site H&M peut afficher des bannières (cookies, consentements) ou des parcours différents selon le pays ; les méthodes `acceptCookiesIfPresent` et les sélecteurs multilingues couvrent les variantes les plus courantes.
- Si l’inscription impose un CAPTCHA ou une validation email/SMS, le scénario échouera : dans ce cas, adaptez l’étape d’inscription pour utiliser un compte de test existant.
- Les produits peuvent être retirés ou renommés. Mettez à jour les noms dans `features/hm_journey.feature` si nécessaire.

## Prochaines améliorations
- Ajouter des rapports JUnit/HTML (`--format json:report.json`) et les pousser dans CI.
- Mutualiser la gestion des bannières (cookies / marketing) dans un helper dédié.
- Mettre en place des données de test (compte membre, produits garantis disponibles) via des fixtures ou un environnement sandbox.
