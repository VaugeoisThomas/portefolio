import code from "../../assets/code-xml.svg";
import serv from "../../assets/Interface.svg";
import outils from "../../assets/Outil.svg";
import type { SkillLevel } from "../SkillBadge/SkillBadge.data";

type Technology = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  id: string;
  title: string;
  technologies: Technology[];
  icon: string;
  description: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "interface",
    title: "Interface",
    technologies: [
      {
        name: "HTML",
        level: "autonomous",
      },
      { name: "CSS", level: "autonomous", },
      {
        name: "Sass",
        level: "autonomous",
      },
      {
        name: "JavaScript",
        level: "autonomous",
      },
      { name: "TypeScript", level: "guided", },
      { name: "React", level: "guided", },
      { name: "Vue.js", level: "review", },
    ],

    icon: code,
    description:
      "Construire des interfaces claires et adaptables aux différents écrans, en soignant la structure, les styles et les interactions.",
  },
  {
    id: "server",
    title: "Serveur et données",
    technologies: [
      {
        name: "Node.js",
        level: "guided",
      },
      {
        name: "Express",
        level: "guided",
      },
      {
        name: "MySQL",
        level: "guided",
      },
      {
        name: "Sequelize",
        level: "review",
      },
      {
        name: "MongoDB",
        level: "review",
      },
    ],
    icon: serv,
    description:
      "Développer des API, gérer les échanges avec une base de données et comprendre le fonctionnement d’une application côté serveur.",
  },
  {
    id: "tools",
    title: "Outils",
    technologies: [
      { name: "Git", level: "guided", },
      { name: "GitHub", level: "guided", },
      { name: "VS Code", level: "autonomous", },
      { name: "Figma", level: "review", },
    ],
    icon: outils,
    description:
      "Versionner mon code, organiser mon travail et m’appuyer sur des maquettes pour passer de l’idée à sa réalisation.",
  },
];
