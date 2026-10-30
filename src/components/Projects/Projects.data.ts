import auroraPrint from "../../assets/aurora-ia.png";
import groupomaniaPrint from "../../assets/PrintScreenFromGroupomania.png";
import morpionPrint from "../../assets/morpion-game.png";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  learning: string;
  sourceUrl?: string;
  img?: {
    src: string;
    alt: string;
  };
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "groupomania",
    title: "Groupomania",
    category: "Projet de fin de formation",
    description:
      "Réseau social avec comptes utilisateurs, publications, commentaires et fonctions d'administration. J'ai développé l'interface et le serveur.",
    technologies: ["Vue.js", "Node.js", "Express", "MySQL", "Sequelize"],
    learning:
      "Organiser et relier l'interface, le serveur et la base de données pour construire une application complète.",
    sourceUrl: "https://github.com/VaugeoisThomas/groupomania",
    img: {
      src: groupomaniaPrint,
      alt: "Page d'accueil de Groupomania avec présentation de la communauté et accès au réseau social.",
    },
    featured: true,
  },
  {
    id: "morpion",
    title: "Morpion",
    category: "Projet personnel",
    description:
      "Jeu de morpion proposant des parties contre l’ordinateur et des salles multijoueurs en temps réel, avec profils et historique des parties. Projet développé avec l’assistance de l’IA, qui a directement réalisé certaines parties techniques.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Vitest"],
    learning:
      "Approfondir progressivement les composants React, le CSS responsive, la logique du jeu, les échanges avec Supabase et les tests, avec un accompagnement pour comprendre et vérifier les changements.",
    sourceUrl: "https://github.com/VaugeoisThomas/morpion",
    img: {
      src: morpionPrint,
      alt: "Partie de Morpion contre l'ordinateur, avec une grille contenant des croix bleues et des ronds roses.",
    },
    featured: false,
  },
  {
    id: "aurora-ia",
    title: "AuroraIA",
    category: "Projet personnel · En développement",
    description:
      "Assistant personnel développé progressivement en Python, avec une interface web reliée à une API Flask. Il répond actuellement à des commandes prédéfinies ; l’intégration d’un modèle d’IA est une évolution prévue.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    learning:
      "Apprendre Python, organiser une application en modules et relier une interface de conversation à une API HTTP.",
    img: {
      src: auroraPrint,
      alt: "Interface bleu nuit d’AuroraIA avec message de bienvenue et formulaire de conversation.",
    },
    featured: false,
  },
  {
    id: "ohmyfood",
    title: "Ohmyfood",
    category: "Projet de formation",
    description:
      "Intégration d'un site en HTML et Sass, sans JavaScript, pour pratiquer Sass, la méthode BEM et l'organisation des styles.",
    technologies: ["HTML", "Sass"],
    learning:
      "Organiser les styles pour les rendre plus lisibles et plus faciles à maintenir.",
    sourceUrl: "https://github.com/VaugeoisThomas/ohmyfood",
    featured: false,
  },
  {
    id: "orinoco",
    title: "Orinoco",
    category: "Projet de formation",
    description:
      "Projet réalisé avec Sass et Node.js. J'ai développé le serveur en suivant les explications de l'exercice pour faire communiquer le site avec celui-ci.",
    technologies: ["Sass", "Node.js"],
    learning:
      "Faire communiquer le site avec le serveur et traiter des requêtes.",
    sourceUrl: "https://github.com/VaugeoisThomas/Orinoco",
    featured: false,
  },
  {
    id: "sopekocko",
    title: "SoPekocko",
    category: "Projet de formation",
    description:
      "Développement des routes côté serveur et de la logique liée aux utilisateurs et aux sauces. L'interface Angular était fournie.",
    technologies: ["Express"],
    learning:
      "Organiser les routes d'une API et traiter les requêtes liées aux utilisateurs et aux données.",
    sourceUrl: "https://github.com/VaugeoisThomas/SoPekocko_p6",
    featured: false,
  },
  {
    id: "la-chouette-agence",
    title: "La Chouette Agence",
    category: "Projet de formation",
    description:
      "Amélioration du référencement naturel : réduction du poids des images, ajustements des titres et ajout de textes alternatifs, avec des outils d'audit pour vérifier les corrections.",
    technologies: [],
    learning:
      "Utiliser des audits pour identifier des améliorations et vérifier les corrections apportées à un site.",
    sourceUrl: "https://github.com/VaugeoisThomas/LaChouetteAgence",
    featured: false,
  },
];

/** Projets retenus pour la page ; les autres restent dans le catalogue. */
export const selectedProjects = projects.filter(project =>
  ["groupomania", "morpion", "aurora-ia"].includes(project.id)
);
