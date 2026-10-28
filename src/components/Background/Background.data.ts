type BackgroundStep = {
  id: string;
  period: string;
  title: string;
  context: string;
  description: string;
};

export const backgroundSteps: BackgroundStep[] = [
  {
    id: "personal-projects",
    period: "Depuis 2021",
    title: "Construire et approfondir",
    context: "Projets personnels",
    description:
      "Je poursuis mon apprentissage à travers des projets personnels. Aujourd'hui, je développe mon portfolio avec React et TypeScript, en travaillant les composants, les interfaces adaptables et le suivi du code avec Git.",
  },
  {
    id: "web-training",
    period: "2020 - 2021",
    title: "Se former au développement web",
    context: "Parcours Développeur web - OpenClassrooms",
    description:
      "Une formation suivie pour pratiquer le développement web à travers des projets, de l'intégration d'interfaces à la création d'API. Diplôme non obtenu.",
  },
  {
    id: "computer-networks",
    period: "2012 - 2014",
    title: "Acquérir les bases de l'informatique",
    context: "BTS Informatique et réseaux",
    description:
      "Une formation en informatique et réseaux, avec un projet de pilotage de panneau solaire mobile comprenant une interface web de consultation des paramètres.",
  },
];
