export type Project = {
  tag: string
  title: string
  description: string
  tech: string[]
  primaryLink: string
  primaryLabel: string
  secondaryLink: string
  secondaryLabel: string
}

export type Skill = {
  title: string
  description: string
}

export const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export const projectCards: Project[] = [
  {
    tag: 'Portfolio',
    title: 'Portfolio personnel',
    description:
      'Un site vitrine conçu pour présenter mon profil, mes compétences et mes objectifs professionnels de manière claire et moderne.',
    tech: ['HTML', 'CSS', 'React'],
    primaryLink: '#top',
    primaryLabel: 'Voir le site',
    secondaryLink: 'https://github.com/VaugeoisThomas',
    secondaryLabel: 'GitHub',
  },
  {
    tag: 'Application web',
    title: 'TaskFlow',
    description:
      'Une application de gestion de tâches conçue pour pratiquer la logique JavaScript, la manipulation du DOM et la persistance locale. Elle permet d’ajouter, compléter, filtrer et supprimer des tâches tout en gardant une interface claire et simple.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    primaryLink: '/projects/todo-app/index.html',
    primaryLabel: 'Voir la démo',
    secondaryLink: 'https://github.com/VaugeoisThomas',
    secondaryLabel: 'GitHub',
  },
  {
    tag: 'Application web',
    title: 'DevQuiz',
    description:
      'Une application de quiz web avec parcours par niveau, système d’authentification simplifié, progression utilisateur et feedback personnalisé selon les réponses. Le projet illustre ma capacité à concevoir une expérience interactive complète, avec un front-end soigné et une logique de jeu cohérente.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    primaryLink: '/projects/quiz-app/index.html',
    primaryLabel: 'Voir la démo',
    secondaryLink: 'https://github.com/VaugeoisThomas',
    secondaryLabel: 'GitHub',
  },
]

export const skills: Skill[] = [
  { title: 'HTML', description: 'Structure sémantique et maquettes web claires.' },
  { title: 'CSS', description: 'Palette, mise en page, responsive design et hiérarchie visuelle.' },
  { title: 'JavaScript', description: 'Interactions, logique front, dynamisme des interfaces.' },
  { title: 'Git / GitHub', description: 'Suivi des versions et organisation du travail.' },
  { title: 'Backend', description: 'API, logique métier, données, architecture applicative.' },
  { title: 'Gestion de projet', description: 'Organisation, autonomie, apprentissage continu et objectifs clairs.' },
]
