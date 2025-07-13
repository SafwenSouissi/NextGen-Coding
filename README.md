# Quiz App

## Objectif
Développer une application web responsive de quiz permettant aux utilisateurs :
- de choisir parmi plusieurs quiz,
- de répondre à des questions à choix multiple,
- de consulter leur historique de résultats.

## Fonctionnalités
1. **Page d’Accueil** – Liste des Quiz
   - Affiche tous les quiz disponibles (ex. : "HTML Basics", "CSS Selectors", "JavaScript Logic").
   - Chaque quiz s’affiche sous forme de bouton ou carte.
   - Cliquer sur un quiz lance le test correspondant.

2. **Vue Quiz** – Une Question à la Fois
   - Affiche la question, les choix, la progression, et permet de répondre.
   - Affiche le score à la fin, possibilité de recommencer ou retourner à l’accueil.

3. **Historique** – Page "My History"
   - Affiche l’historique des tentatives pour chaque quiz (nom, date, score).
   - Données stockées dans localStorage.

## Structure du projet
```
quiz-app/
  assets/
    css/
      style.css
    js/
      data.js
      main.js
      quiz.js
      history.js
  pages/
    index.html
    quiz.html
    history.html
  utils/
    storage.js
  README.md
```

## Exigences Techniques
- HTML/CSS/JavaScript uniquement (pas de frameworks)
- Données des quiz dans des objets JS
- Utilisation de localStorage pour l’historique

## Utilisation
1. Ouvrir `pages/index.html` dans un navigateur web.
2. Sélectionner un quiz pour commencer.
3. Consulter l’historique via la page "My History".

## Bonus possibles
- Transitions CSS
- Affichage des bonnes/mauvaises réponses
- Mode sombre
- Timer par question ou quiz

