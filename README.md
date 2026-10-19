# Portfolio de Thomas Vaugeois

Portfolio personnel de **Thomas Vaugeois, développeur web junior**, en recherche d’un **CDD ou d’un CDI**.

Le site présente mes projets, mes apprentissages et, à terme, mes compétences, mon parcours et mes coordonnées. Il est développé progressivement avec React, TypeScript et Vite, à partir de maquettes Figma mobile et desktop adaptées à mes informations.

**État actuel : en cours de développement.** L’accueil et la section Projets sont intégrés. Certaines destinations de la navigation correspondent encore à des sections à construire.

## Fonctionnement

- Site statique sur une seule page, avec navigation vers les sections.
- Mise en page mobile first et menu hamburger sur petit écran.
- Thèmes clair et sombre selon les préférences du système.
- Six projets : deux mis en avant et quatre sous une forme plus compacte.
- Cartes générées à partir de données TypeScript ; images et liens de code source facultatifs.
- CV ouvert dans un nouvel onglet depuis sa page GitHub Pages existante.
- Illustration décorative inspirée de VS Code, avec onglets statiques et code coloré.

Le portfolio ne nécessite ni serveur applicatif, ni base de données, ni service payant. Le futur contact utilisera des liens email, LinkedIn et GitHub, sans formulaire côté serveur.

## Avancement

### Réalisé

- [x] Initialiser React, TypeScript et Vite.
- [x] Remplacer les styles de démonstration par les fondations du portfolio.
- [x] Définir les palettes claire et sombre.
- [x] Charger Inter et IBM Plex Mono localement avec Fontsource.
- [x] Intégrer l’en-tête, la navigation responsive et les styles de focus clavier.
- [x] Adapter l’accueil aux maquettes, avec maintien du hamburger mobile.
- [x] Ajouter le lien vers le CV et les repères personnels, dont la localisation à Vidauban.
- [x] Construire le visuel d’accueil avec éditeur, orbites, icônes et carte de résultat.
- [x] Créer une carte réutilisable et un catalogue de six projets.
- [x] Distinguer les projets mis en avant des projets secondaires.
- [x] Intégrer la capture de Groupomania.

### À faire

- [ ] Construire la section **À propos** avec un texte personnel validé.
- [ ] Construire la section **Compétences**, en distinguant les compétences pratiquées et celles maîtrisées en autonomie.
- [ ] Construire la section **Parcours** avec les dates et expériences confirmées.
- [ ] Construire la section **Contact** avec les coordonnées et liens confirmés.
- [ ] Ajouter le pied de page.
- [ ] Compléter les liens vers les dépôts après vérification de leurs adresses.
- [ ] Ajouter les captures manquantes lorsqu’elles sont disponibles, notamment celle de Morpion.
- [ ] Mettre à jour le CV dans son dépôt dédié.
- [ ] Effectuer une comparaison visuelle finale avec les maquettes sur mobile et desktop.
- [ ] Vérifier les contrastes, la navigation au clavier, les textes alternatifs et les liens dans les deux thèmes.
- [ ] Compléter les métadonnées : titre, description et aperçu de partage.
- [ ] Configurer et vérifier le déploiement sur GitHub Pages.

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
| `src/index.css` | Thèmes et styles globaux |
| `src/App.css` | Conteneur général de la page |
| `src/components/Header/` | Navigation et menu mobile |
| `src/components/Intro/` | Présentation, lien CV et repères personnels |
| `src/components/IntroVisual/` | Illustration et données du code décoratif |
| `src/components/Projects/Projects.data.ts` | Catalogue des projets |
| `src/components/Projects/` | En-tête et répartition des projets |
| `src/components/ProjectCard/` | Carte réutilisable et ses styles |
| `src/assets/` | Captures et fichiers SVG |

Chaque composant possède son dossier avec son fichier `.tsx` et son fichier `.css`. Les données sont séparées du JSX lorsque cela améliore la lisibilité.

## Références

- [Dépôt du portfolio](https://github.com/VaugeoisThomas/portefolio)
- [Maquettes Figma mobile et desktop](https://www.figma.com/design/uHWjOhrsb0qkhPolijW9f8/Sans-titre)
- [CV actuel](https://vaugeoisthomas.github.io/CurriculumVitae/) — document à actualiser, sans le considérer comme la source à jour des informations du portfolio.

Les maquettes contiennent des informations d’exemple : l’identité, les projets et le parcours affichés sur le portfolio doivent correspondre aux informations confirmées de Thomas Vaugeois.
