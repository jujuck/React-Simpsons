# React-Simpsons
Map, Props, State, Filtering, listeners et data in json

## Follow this repo to create a simple projet with the basis of React
Git clone
npm install
Supprime maintenant l'ensemble des composants et initialise `App.jsx` avec seulement un titre. Pense à enlever les imports
Suit le projet step by step dans le readme et trouve la correction par commit en fonction des branches

## Part one Simspon Display
- 1/ Création du composant Simpson Liste et mise en place dans le `App.jsx`
- 2/ Import du jeux de data dans le composant
- 3/ Mise en place du template à partir de l'élément *[0]* du jeux de données
- 4/ Création du composant Simpson Card et transfert du template
- 5/ Import du composant Simpson Card dans simpson liste, mise en place avec sa props
- 6/ Boucle sur le jeux de données pour afficher les 10 premiers simpson

## Part Two Listeners
- 1/ Ajout d'un bouton sur chaque Simpson card affichant une alerte avec le `name`
- 2/ Création d'un composant `Footer.jsx` et import dans `App.jsx`
- 3/ Mise en place d'un formualaire avec un *label* et son *input* et d'un *bouton* de submit
- 4/ Ecoute du click sur le bouton *susbmit* et affichage d'une alerte
- 5/ Mise en place d'un state et connexion à l'input (value et onChange)
- 6/ Modification de l'alerte en submit en affichant le message de l'*user*

## Part Three FilterOSfSimpson
- 1/ Ajout d'un input dans le composant SimpsonList avec son label
- 2/ Connexion de l'input à un state *search*
- 3/ Ajout d'une fonction de filtre sur le `name` ou l'`ìd`


## Part Four ComposantUse
- 1/ Mise en place d'un jeu de *fake data* `articles.js` avec pour chaque objet un titre et un text
- 2/ Création d'un composant `Articles.jsx` et mise en place 3 fois dans `App.jsx`
- 3/ Mise en place du template à partir de l'index [0] dans `Article.jsx` et import de la Donnée
- 4/ Dans `App.jsx`, passer l'index de l'article en props et le consommer dans `Articles.jsx` pour afficher les différents articles
- 5/ Jouer avec les data et les props pour varier les affichages

