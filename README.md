# Portfolio de Thomas Vaugeois

Portfolio personnel de **Thomas Vaugeois, développeur web junior**, en recherche d’un **CDD ou d’un CDI**.

Le site présente mes projets, mon approche du développement web, mes compétences, mon parcours et mes coordonnées. Il est développé progressivement avec React, TypeScript et Vite, à partir de maquettes Figma mobile et desktop adaptées à mes informations.

**État actuel : première version publiée sur Vercel.** L’accueil, les sections Projets, À propos, Compétences, Parcours et Contact, ainsi que le pied de page sont intégrés. Le site continue d’évoluer.

**[Consulter le portfolio](https://portefolio-rust-theta.vercel.app/)**

## Fonctionnement

- Site statique sur une seule page, avec navigation vers les sections.
- Mise en page mobile first et menu hamburger sur petit écran.
- Thèmes clair et sombre selon les préférences du système.
- Six projets : deux mis en avant et quatre sous une forme plus compacte.
- Cartes générées à partir de données TypeScript ; images et liens de code source facultatifs.
- CV téléchargeable au format PDF depuis le bouton « Télécharger mon CV (PDF) » de l’accueil.
- Illustration décorative inspirée de VS Code, avec onglets statiques et code coloré.
- Section À propos avec portrait, présentation personnelle et valeurs.
- Compétences réparties en trois groupes : Interface, Serveur et données, et Outils. Chaque carte affiche une icône, une description et des technologies issues de données TypeScript.
- Cartes de compétences disposées sur une colonne sur mobile et trois sur grand écran à partir de `80rem`.
- Note de transparence sur le contexte personnel ou de formation des projets présentés.
- Frise chronologique du parcours, générée à partir de données TypeScript et disposée sur deux colonnes avec sa présentation sur desktop.
- Section Contact avec liens email, GitHub et LinkedIn, et pied de page avec les réseaux professionnels.

Le portfolio ne nécessite ni serveur applicatif, ni base de données, ni service payant. Le contact utilise des liens email, LinkedIn et GitHub, sans formulaire côté serveur.

## Avancement

### Réalisé

- [x] Initialiser React, TypeScript et Vite.
- [x] Remplacer les styles de démonstration par les fondations du portfolio.
- [x] Définir les palettes claire et sombre.
- [x] Charger Inter et IBM Plex Mono localement avec Fontsource.
- [x] Intégrer l’en-tête, la navigation responsive et les styles de focus clavier.
- [x] Adapter l’accueil aux maquettes, avec maintien du hamburger mobile.
- [x] Ajouter le lien vers le CV et les repères personnels, dont la localisation à Vidauban.
- [x] Mettre à jour le CV dans son dépôt dédié.
- [x] Remplacer le lien de consultation du CV par le téléchargement d’un PDF hébergé avec le portfolio.
- [x] Construire le visuel d’accueil avec éditeur, orbites, icônes et carte de résultat.
- [x] Créer une carte réutilisable et un catalogue de six projets.
- [x] Distinguer les projets mis en avant des projets secondaires.
- [x] Intégrer la capture de Groupomania.
- [x] Ajouter une note de transparence aux projets avec une icône d’information.
- [x] Construire la section **À propos** avec un portrait, un texte personnel et les valeurs de persévérance, d’esprit d’équipe et d’envie d’apprendre.
- [x] Construire la section **Compétences** avec trois groupes, leurs icônes et descriptions, et une disposition responsive.
- [x] Séparer les données des compétences du JSX et générer les groupes et technologies avec `map`.
- [x] Mutualiser les styles des repères Projets, À propos et Compétences dans la classe globale `section-label`.
- [x] Construire la section **Parcours** avec une frise des projets personnels et des formations, selon les informations confirmées.
- [x] Construire la section **Contact** avec les coordonnées et liens confirmés.
- [x] Ajouter le pied de page responsive.
- [x] Personnaliser le titre, la description du document et la favicon.
- [x] Publier la première version sur Vercel et vérifier son fonctionnement sur téléphone.

### À faire

- [ ] Préciser, si nécessaire, le niveau d’autonomie associé aux compétences présentées.
- [ ] Mutualiser les dimensions CSS récurrentes avec des variables adaptées à leur rôle, en conservant le rendu visuel.
- [ ] Compléter les liens vers les dépôts après vérification de leurs adresses.
- [ ] Ajouter les captures manquantes lorsqu’elles sont disponibles, notamment celle de Morpion.
- [ ] Effectuer une comparaison visuelle finale avec les maquettes sur mobile et desktop.
- [ ] Vérifier les contrastes, la navigation au clavier, les textes alternatifs et les liens dans les deux thèmes.
- [ ] Ajouter les métadonnées et l’image d’aperçu de partage, ainsi que l’URL canonique.

Pour actualiser cette liste directement sur GitHub, remplacer `[ ]` par `[x]` lorsqu’une tâche est terminée.

## Projets présentés

| Projet | Contexte | Présentation |
| --- | --- | --- |
| Groupomania | Fin de formation — interface et serveur développés | Mis en avant, avec capture et lien vers le dépôt |
| Morpion | Projet personnel accompagné par l’IA | Mis en avant |
| Ohmyfood | Formation — intégration HTML et Sass | Carte compacte |
| Orinoco | Formation — communication entre site et serveur | Carte compacte |
| SoPekocko | Formation — routes d’API ; interface Angular fournie | Carte compacte |
| La Chouette Agence | Formation — améliorations du référencement naturel | Carte compacte |

Les descriptions précisent les contributions et les apprentissages. Pour Morpion, l’accompagnement par l’IA et la réalisation directe de certaines parties techniques par celle-ci sont explicitement mentionnés.

## Technologies du portfolio

- React et TypeScript pour les composants et les données.
- Vite pour le développement local et la compilation.
- CSS classique pour la mise en page, les thèmes et les adaptations responsive.
- ESLint pour les vérifications de code.
- Fontsource pour les polices hébergées avec le site.

## Lancer le projet en local

Prérequis : Node.js compatible avec la version de Vite du projet et npm.

```bash
git clone https://github.com/VaugeoisThomas/portefolio.git
cd portefolio
npm ci
npm run dev
```

Ouvrir ensuite l’adresse affichée par Vite dans le terminal.

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Démarrer le serveur de développement |
| `npm run build` | Vérifier TypeScript et générer le site dans `dist/` |
| `npm run lint` | Exécuter les vérifications ESLint |
| `npm run preview` | Prévisualiser localement une compilation existante |

Le dossier `dist/` est généré et n’est pas suivi par Git. La commande `preview` nécessite d’abord un `build` ; elle ne publie pas le site.

## Où modifier le contenu ?

| Fichier ou dossier | Contenu |
| --- | --- |
| `src/App.tsx` | Assemblage et ordre des sections |
| `src/index.css` | Thèmes, styles globaux et repères communs `section-label` |
| `src/App.css` | Conteneur général de la page |
| `src/components/Header/` | Navigation et menu mobile |
| `src/components/Intro/` | Présentation, bouton de téléchargement du CV et repères personnels |
| `src/components/IntroVisual/` | Illustration et données du code décoratif |
| `src/components/Projects/Projects.data.ts` | Catalogue des projets |
| `src/components/Projects/` | En-tête et répartition des projets |
| `src/components/ProjectCard/` | Carte réutilisable et ses styles |
| `src/components/About/` | Portrait, présentation personnelle et valeurs |
| `src/components/Skills/Skills.data.ts` | Groupes de compétences, descriptions, technologies et icônes |
| `src/components/Skills/` | Affichage des compétences et styles responsive |
| `src/components/Background/Background.data.ts` | Périodes, titres, contextes et descriptions des étapes du parcours |
| `src/components/Background/` | Présentation du parcours, encadré professionnel et frise responsive |
| `src/components/Contact/` | Coordonnées, bouton email et liens vers les réseaux professionnels |
| `src/components/Footer/` | Pied de page et liens GitHub et LinkedIn |
| `index.html` | Langue, titre, description et lien vers la favicon |
| `public/favicon.svg` | Favicon personnalisée du portfolio |
| `src/assets/` | Portrait, captures et fichiers SVG |
| `public/cv-thomas-vaugeois.pdf` | CV proposé au téléchargement |

Chaque composant possède son dossier avec son fichier `.tsx` et son fichier `.css`. Les données sont séparées du JSX lorsque cela améliore la lisibilité.

Pour actualiser le CV téléchargeable, remplacer `public/cv-thomas-vaugeois.pdf` en conservant son nom. Ce PDF est une copie indépendante : une modification du dépôt du CV ne met pas automatiquement à jour le fichier du portfolio.

## Références

- [Portfolio publié sur Vercel](https://portefolio-rust-theta.vercel.app/)
- [Dépôt du portfolio](https://github.com/VaugeoisThomas/portefolio)
- [Maquettes Figma mobile et desktop](https://www.figma.com/design/uHWjOhrsb0qkhPolijW9f8/Sans-titre)
- [CV en ligne](https://vaugeoisthomas.github.io/CurriculumVitae/) — version HTML maintenue dans son dépôt dédié ; le portfolio propose une copie PDF au téléchargement.

Les maquettes contiennent des informations d’exemple : l’identité, les projets et le parcours affichés sur le portfolio doivent correspondre aux informations confirmées de Thomas Vaugeois.
