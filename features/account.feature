Feature: Gestion du compte utilisateur
  Background:
    Given je sélectionne le pays "Egypt"

  Scenario: Inscription d'un nouvel utilisateur
    When je remplis le formulaire d'inscription
    Then je suis connecté