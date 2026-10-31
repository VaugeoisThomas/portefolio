# Portfolio de Thomas Vaugeois

Portfolio personnel de **Thomas Vaugeois, développeur web junior**, en recherche d’un **CDD ou d’un CDI**.

Le site présente mes projets, mon approche du développement web, mes compétences, mon parcours et mes coordonnées. Il est développé progressivement avec React, TypeScript et Vite, à partir de maquettes Figma mobile et desktop adaptées à mes informations.

**État actuel : site publié sur Vercel, avec reprise des sections par rapport aux maquettes terminée.** L’accueil, les sections Projets, À propos, Compétences, Parcours et Contact, ainsi que le pied de page sont intégrés. Le rendu et les liens du site publié ont été vérifiés manuellement sur ordinateur et téléphone. Le site continue d’évoluer.

**[Consulter le portfolio](https://portefolio-rust-theta.vercel.app/)**

## Fonctionnement

- Site statique sur une seule page, avec navigation vers les sections.
- Mise en page mobile first et menu hamburger sur petit écran.
- Thèmes clair et sombre selon les préférences du système.
- Trois projets sélectionnés : Groupomania à la une, puis Morpion et AuroraIA.
- Cartes générées à partir de données TypeScript ; images et liens de code source facultatifs.
- Une carte principale horizontale sur grand écran, suivie de deux cartes côte à côte ; les trois cartes sont empilées sur mobile.
- Aperçus avec barre de navigateur décorative et numérotation des projets. Les captures restent entières ; les cartes secondaires utilisent un ratio desktop de `4 / 3` pour privilégier leur lisibilité.
- CV téléchargeable au format PDF depuis le bouton « Télécharger mon CV (PDF) » de l’accueil.
- Illustration décorative avec une barre d’éditeur unique, du code coloré, des orbites et une carte de résultat.
- Section À propos avec portrait, présentation personnelle et valeurs.
- Compétences réparties en trois groupes : Interface, Serveur et données, et Outils. Chaque carte affiche une icône, une description et des technologies issues de données TypeScript.
- Cartes de compétences disposées sur une colonne sur mobile et trois sur grand écran à partir de `80rem`.
- Note de transparence sur le contexte personnel ou de formation des projets présentés.
- Frise chronologique du parcours, générée à partir de données TypeScript et disposée sur deux colonnes avec sa présentation sur desktop.
- Section Contact avec liens email, GitHub et LinkedIn.
- Pied de page avec identité, copyright à année automatique, lien de retour en haut et mention de réalisation.

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
- [x] Créer une carte réutilisable et un catalogue de projets séparé de leur affichage.
- [x] Retenir trois projets : Groupomania à la une, puis Morpion et AuroraIA.
- [x] Intégrer la capture de Groupomania.
- [x] Ajouter les liens vérifiés vers les dépôts des six projets.
- [x] Ajouter une capture de Morpion et actualiser sa présentation et ses apprentissages.
- [x] Présenter AuroraIA avec une capture de son interface et préciser son état de développement ; conserver son dépôt privé.
- [x] Harmoniser les cartes projets : titres, espacements, numérotation, barre de navigateur et icônes GitHub adaptées aux deux thèmes.
- [x] Ajouter une note de transparence aux projets avec une icône d’information.
- [x] Construire la section **À propos** avec un portrait, un texte personnel et les valeurs de persévérance, d’esprit d’équipe et d’envie d’apprendre.
- [x] Construire la section **Compétences** avec trois groupes, leurs icônes et descriptions, et une disposition responsive.
- [x] Séparer les données des compétences du JSX et générer les groupes et technologies avec `map`.
- [x] Mutualiser les styles des repères Projets, À propos et Compétences dans la classe globale `section-label`.
- [x] Construire la section **Parcours** avec une frise des projets personnels et des formations, selon les informations confirmées.
- [x] Construire la section **Contact** avec les coordonnées et liens confirmés.
- [x] Ajouter le pied de page responsive.
- [x] Adapter le pied de page à la maquette et supprimer l’espace superflu après Contact.
- [x] Personnaliser le titre, la description du document et la favicon.
- [x] Ajouter les métadonnées Open Graph, l’image d’aperçu de partage et l’URL canonique.
- [x] Publier la première version sur Vercel et vérifier son fonctionnement sur téléphone.
- [x] Effectuer une comparaison visuelle finale avec les maquettes sur mobile et desktop.
- [x] Calculer le contraste de 13 principales paires de couleurs et vérifier la navigation au clavier, les textes alternatifs et les liens dans les deux thèmes.
- [x] Préciser le nom accessible des liens « Code source » avec le titre du projet, par exemple « Code source de Morpion », en conservant le texte visible.
- [x] Tester la carte de partage avec un outil d’inspection après déploiement.
- [x] Centraliser les espacements, tailles de texte, polices, arrondis et dimensions communes dans des variables CSS.
- [x] Regrouper les styles partagés des sections et titres dans une feuille CSS commune.
- [x] Extraire les liens d’action et les paragraphes descriptifs dans les composants réutilisables `ActionLink` et `Description`.
- [x] Préciser la pratique de chaque technologie avec des pastilles colorées, des symboles distincts, une légende commune et des niveaux accessibles aux lecteurs d’écran.
- [x] Reprendre l’accueil, À propos, les compétences, le parcours, Contact, le pied de page et les cartes projets par branches dédiées, avec validation du rendu.
- [x] Vérifier le site publié sur ordinateur et téléphone : alignements, absence de débordement, navigation, liens de contact et téléchargement du CV.

### À faire

- [ ] Mettre des démos de projets en ligne lorsqu’elles sont prêtes, puis ajouter leurs liens « Voir le projet » aux cartes concernées.
- [ ] Actualiser les descriptions, captures et technologies au fil de l’évolution des projets, notamment AuroraIA.
- [ ] Maintenir le PDF du CV et les informations professionnelles à jour.

Les trois projets sélectionnés disposent déjà d’une capture. Aucun lien de démo n’est affiché tant qu’une application n’est pas disponible publiquement. Les captures des projets archivés pourront être ajoutées s’ils rejoignent la sélection.

### Choix conservés par rapport aux maquettes

- Contenus adaptés au parcours et aux projets réels de Thomas Vaugeois.
- Menu hamburger sur mobile et niveaux de pratique accompagnés d’une légende dans les compétences.
- Aperçus secondaires desktop au ratio `4 / 3`, plutôt qu’au ratio Figma `628 / 346`, pour garder les captures lisibles sans recadrer le jeu du Morpion.
- Liens limités aux destinations disponibles : code source pour Groupomania et Morpion ; aucun lien public vers le dépôt privé d’AuroraIA.

Les validations sont des contrôles manuels et des vérifications de lint/build, pas une certification d’accessibilité. Pour contrôler les thèmes du site, désactiver le mode sombre forcé du navigateur : il peut recolorer la page indépendamment de `prefers-color-scheme`.

Pour actualiser cette liste directement sur GitHub, remplacer `[ ]` par `[x]` lorsqu’une tâche est terminée.

## Projets présentés

| Projet | Contexte | Présentation |
| --- | --- | --- |
| Groupomania | Fin de formation — interface et serveur développés | Mis en avant, avec capture et lien vers le dépôt |
| Morpion | Projet personnel accompagné par l’IA | Carte avec capture d’une partie contre l’ordinateur et lien vers le dépôt |
| AuroraIA | Assistant personnel Python/Flask en développement | Capture de l’interface web ; dépôt privé, sans lien public vers le code |

Les autres projets restent conservés dans le catalogue de données. AuroraIA utilise actuellement des réponses prédéfinies, sans modèle d’IA intégré.

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
| `src/styles/shared.css` | Règles partagées des sections et titres |
| `src/App.css` | Conteneur général de la page |
| `src/components/Header/` | Navigation et menu mobile |
| `src/components/Intro/` | Présentation, bouton de téléchargement du CV et repères personnels |
| `src/components/IntroVisual/` | Illustration et données du code décoratif |
| `src/components/Projects/Projects.data.ts` | Catalogue et sélection des projets affichés |
| `src/components/Projects/` | En-tête et répartition des projets |
| `src/components/ProjectCard/` | Carte réutilisable et ses styles |
| `src/components/ActionLink/` | Liens d’action, variantes et icônes facultatives |
| `src/components/Description/` | Paragraphes descriptifs et styles communs |
| `src/components/About/` | Portrait, présentation personnelle et valeurs |
| `src/components/Skills/Skills.data.ts` | Groupes de compétences, technologies, niveaux de pratique, descriptions et icônes |
| `src/components/Skills/` | Affichage des compétences et styles responsive |
| `src/components/SkillBadge/` | Pastilles de niveau et définition commune des libellés et symboles de la légende |
| `src/components/Background/Background.data.ts` | Périodes, titres, contextes et descriptions des étapes du parcours |
| `src/components/Background/` | Présentation du parcours, encadré professionnel et frise responsive |
| `src/components/Contact/` | Coordonnées, bouton email et liens vers les réseaux professionnels |
| `src/components/Footer/` | Identité, copyright, retour en haut et mention de réalisation |
| `index.html` | Langue, titre, description, favicon, URL canonique et métadonnées Open Graph |
| `public/favicon.svg` | Favicon personnalisée du portfolio |
| `public/social-preview.png` | Image utilisée dans les aperçus de partage |
| `src/assets/` | Portrait, captures et fichiers SVG |
| `public/cv-thomas-vaugeois.pdf` | CV proposé au téléchargement |

Chaque composant possède son dossier avec son fichier `.tsx` et son fichier `.css`. Les données sont séparées du JSX lorsque cela améliore la lisibilité.

Les variables de `src/index.css` définissent les polices, couleurs, tailles de texte, espacements et dimensions communes. `src/styles/shared.css`, importé par cette feuille globale, regroupe les styles identiques. Les CSS des composants conservent les variantes et les dispositions spécifiques. Les styles globaux sont chargés avant les composants dans `src/main.tsx` pour permettre les surcharges locales, notamment le grand titre de Contact. Les seuils des media queries restent explicites, car les variables CSS ne peuvent pas être utilisées dans leurs conditions.

Pour actualiser le CV téléchargeable, remplacer `public/cv-thomas-vaugeois.pdf` en conservant son nom. Ce PDF est une copie indépendante : une modification du dépôt du CV ne met pas automatiquement à jour le fichier du portfolio.

## Références

- [Portfolio publié sur Vercel](https://portefolio-rust-theta.vercel.app/)
- [Dépôt du portfolio](https://github.com/VaugeoisThomas/portefolio)
- [Maquettes Figma mobile et desktop](https://www.figma.com/design/uHWjOhrsb0qkhPolijW9f8/Sans-titre)
- [CV en ligne](https://vaugeoisthomas.github.io/CurriculumVitae/) — version HTML maintenue dans son dépôt dédié ; le portfolio propose une copie PDF au téléchargement.

Les maquettes contiennent des informations d’exemple : l’identité, les projets et le parcours affichés sur le portfolio doivent correspondre aux informations confirmées de Thomas Vaugeois.
