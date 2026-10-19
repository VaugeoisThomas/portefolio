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
  },
];
