# language: fr
Fonctionnalité: Parcours utilisateur H&M
  Contexte:
    Étant donné que je suis sur la page d'accueil H&M
    Et que je choisis le pays "France"

  @account
  Scénario: Inscription puis déconnexion
    Quand je crée un compte avec des informations valides
    Alors je suis connecté en tant que nouveau membre
    Quand je me déconnecte
    Alors je suis redirigé vers la page de connexion

  @search @cart
  Scénario: Rechercher et ajouter au panier
    Quand je recherche le produit "Chemise Relaxed Fit en coton"
    Alors le produit "Chemise Relaxed Fit en coton" apparaît dans les résultats
    Quand j'ouvre la fiche produit "Chemise Relaxed Fit en coton"
    Et j'ajoute la taille "M" au panier
    Alors le panier contient "Chemise Relaxed Fit en coton" en taille "M"

  @favorites
  Scénario: Ajouter un produit aux favoris
    Quand j'ajoute le produit "Pull en maille" aux favoris
    Alors le produit "Pull en maille" apparaît dans mes favoris
