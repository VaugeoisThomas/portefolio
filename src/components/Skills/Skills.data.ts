import code from "../../assets/code-xml.svg";
import serv from "../../assets/Interface.svg";
import outils from "../../assets/Outil.svg";

export type SkillGroup = {
  id: string;
  title: string;
  technologies: string[];
  icon: string;
  description: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "interface",
    title: "Interface",
    technologies: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
    ],
    icon: code,
    description:
      "Construire des interfaces claires et adaptables aux différents écrans, en soignant la structure, les styles et les interactions.",
  },
  {
    id: "server",
    title: "Serveur et données",
    technologies: ["Node.js", "Express", "MySQL", "Sequelize", "MongoDB"],
    icon: serv,
    description:
      "Développer des API, gérer les échanges avec une base de données et comprendre le fonctionnement d’une application côté serveur.",
  },
  {
    id: "tools",
    title: "Outils",
    technologies: ["Git", "GitHub", "VS Code", "Figma"],
    icon: outils,
    description:
      "Versionner mon code, organiser mon travail et m’appuyer sur des maquettes pour passer de l’idée à sa réalisation.",
  },
];
