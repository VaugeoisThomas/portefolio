import groupomaniaPrint from "../../assets/PrintScreenFromGroupomania.png";

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
      "Jeu conçu pour partager des parties entre amis et pratiquer le développement web. Développement accompagné par l'IA, qui a directement réalisé certaines parties techniques.",
    technologies: ["React", "TypeScript", "Vite"],
    learning:
      "Pratiquer le découpage d'une interface en composants réutilisables, les tests et un parcours Git avec branches et pull requests.",
    featured: true,
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
    featured: false,
  },
];
