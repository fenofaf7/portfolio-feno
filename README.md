# Feno --- Portfolio

Portfolio personnel de **FENOSOA Voahary Andriamalala**, étudiant en
informatique et développeur Full-Stack junior.

Ce portfolio présente mon parcours, mes compétences techniques, les
projets que j'ai réalisés ainsi que les projets que je souhaite
développer.

## Aperçu

Le site est conçu comme un portfolio professionnel, responsive et
bilingue (français / anglais). Il propose notamment :

-   Une présentation personnelle et un aperçu de mon profil.
-   Une section dédiée à mes compétences techniques.
-   Une galerie de projets avec des pages de détails et des captures
    d'écran.
-   Une section présentant mes projets à venir.
-   Une section contact avec des liens vers mes profils professionnels.
-   Un changement de langue français / anglais.
-   Un thème clair / sombre.
-   Un CV téléchargeable.

## Technologies utilisées

### Frontend

-   React
-   TypeScript
-   Vite
-   Tailwind CSS
-   React Router
-   i18next et react-i18next
-   Lucide React

### Outils

-   Git et GitHub
-   Visual Studio Code
-   npm

## Projets présentés

Le portfolio met notamment en avant les projets suivants :

-   **Gestion des coupures d'électricité** --- application de suivi et
    de gestion des coupures, avec visualisation cartographique et
    fonctionnalités de prédiction.
-   **Gestion textile** --- application de gestion des commandes et du
    processus de production.
-   **Gestion de parking** --- application de gestion des places, des
    réservations et du suivi financier.
-   **Gestion des étudiants** --- application de gestion des étudiants
    et des informations académiques.

Les détails, fonctionnalités et captures d'écran sont présentés sur les
pages dédiées de chaque projet.

## Projets à venir

Une section distincte présente trois projets envisagés :

-   Une application de gestion de pharmacie avec Django.
-   Des interfaces Angular connectées aux API REST des applications
    Textile et Parking développées avec Spring Boot.
-   Une plateforme SaaS de gestion piscicole avec Laravel.

Ces projets sont présentés comme des projets à venir et ne doivent pas
être considérés comme des réalisations terminées.

## Installation et lancement en local

### Prérequis

-   Node.js
-   npm

### 1. Cloner le dépôt

``` bash
git clone <https://github.com/fenofaf7/portfolio-feno>
```

### 2. Accéder au dossier du projet

``` bash
cd portfolio
```

### 3. Installer les dépendances

``` bash
npm install
```

### 4. Lancer le serveur de développement

``` bash
npm run dev
```

Vite affiche dans le terminal l'adresse locale à ouvrir dans le
navigateur.

## Vérification et build de production

Pour vérifier le projet et générer les fichiers de production :

``` bash
npm run build
```

Les fichiers compilés sont générés dans le dossier `dist/`.

Pour prévisualiser localement le build :

``` bash
npm run preview
```

## Structure du projet

Organisation générale des principaux éléments :

``` text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   └── cv-fenokely-fr.pdf
├── src/
│   ├── components/
│   ├── contexts/
│   ├── data/
│   ├── i18n/
│   ├── locales/
│   │   ├── en/
│   │   └── fr/
│   ├── pages/
│   ├── sections/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

Cette arborescence représente l'organisation générale du portfolio ;
certains fichiers ou dossiers peuvent évoluer au fil du développement.

## Auteur

**FENOSOA Voahary Andriamalala**\
Développeur Full-Stack junior --- étudiant en informatique à ESMIA
Innovation.

-   GitHub : [@fenofaf7](https://github.com/fenofaf7)
-   LinkedIn : [Feno
    Andriamalala](https://linkedin.com/in/feno-andriamalala-962181372)
-   Email : <fenovhandriamalala@gmail.com>

## Licence

Ce dépôt présente mon portfolio personnel. Sauf indication contraire,
son contenu et ses éléments visuels sont destinés à présenter mon
parcours et mes réalisations.
