import { useEffect, useMemo, useState } from 'react'

const projectCards = [
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
  {
    tag: 'API',
    title: 'Backend de gestion',
    description:
      'Un projet orienté back-end pour comprendre la logique serveur, les routes, les requêtes et les échanges entre interface et base de données.',
    tech: ['Node.js', 'API REST', 'Base de données'],
    primaryLink: 'https://github.com/VaugeoisThomas',
    primaryLabel: 'Voir le projet',
    secondaryLink: 'https://github.com/VaugeoisThomas',
    secondaryLabel: 'Code',
  },
]

const skills = [
  { title: 'HTML', description: 'Structure sémantique et maquettes web claires.' },
  { title: 'CSS', description: 'Palette, mise en page, responsive design et hiérarchie visuelle.' },
  { title: 'JavaScript', description: 'Interactions, logique front, dynamisme des interfaces.' },
  { title: 'Git / GitHub', description: 'Suivi des versions et organisation du travail.' },
  { title: 'Backend', description: 'API, logique métier, données, architecture applicative.' },
  { title: 'Gestion de projet', description: 'Organisation, autonomie, apprentissage continu et objectifs clairs.' },
]

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = useMemo(
    () => [
      { href: '#about', label: 'À propos' },
      { href: '#skills', label: 'Compétences' },
      { href: '#projects', label: 'Projets' },
      { href: '#contact', label: 'Contact' },
    ],
    [],
  )

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="portfolio">
      <header className="topbar">
        <div className="brand">TV</div>
        <nav className="nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Développeur web junior</p>
          <h1>
            Thomas Vaugeois
            <span>Je souhaite faire mes premiers pas dans une entreprise de développement web.</span>
          </h1>

          <p className="subtitle">
            Je conçois des interfaces claires avec HTML et CSS, et je souhaite renforcer mes compétences
            côté backend pour évoluer dans un environnement professionnel et contribuer à des projets web
            concrets.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn--secondary">
              Me contacter
            </a>
            <a href="/cv-thomas-vaugeois.pdf" className="btn btn--tertiary" download>
              Télécharger mon CV
            </a>
          </div>

          <ul className="hero__meta" aria-label="Compétences principales">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Backend</li>
          </ul>
        </div>

        <div className="hero__card" aria-label="Présentation du profil">
          <div className="profile-wrap">
            <div className="profile-badge">TV</div>
            <div className="profile-dot" />
          </div>
          <p className="card-label">Profil</p>
          <h2>Frontend solide, backend en devenir</h2>

          <div className="stats">
            <div>
              <strong>HTML / CSS</strong>
              <span>Base solide</span>
            </div>
            <div>
              <strong>JavaScript</strong>
              <span>En apprentissage</span>
            </div>
            <div>
              <strong>Backend</strong>
              <span>Spécialisation</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">À propos</p>
          <h2>Je crée des interfaces lisibles et j’ai envie d’apprendre le développement backend.</h2>
        </div>

        <div className="about-grid">
          <p>
            Je suis passionné par le développement web et je cherche à construire des compétences solides
            autour de la création d’applications modernes. J’ai une bonne base en HTML et CSS, et je
            souhaite maintenant approfondir le côté backend pour mieux comprendre la logique métier, les
            API et la gestion des données.
          </p>

          <div className="about-panel">
            <div>
              <span>Statut</span>
              <strong>Développeur web junior</strong>
            </div>
            <div>
              <span>Objectif</span>
              <strong>Premiers pas en entreprise</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Backend &amp; API</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p className="eyebrow">Compétences</p>
          <h2>Les outils et technologies que j’utilise pour construire mes projets.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.title} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">Projets</p>
          <h2>Des projets qui montrent mon niveau et ma progression.</h2>
        </div>

        <div className="projects-grid">
          {projectCards.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-card__actions">
                <a href={project.primaryLink} className="project-link" target={project.primaryLink.startsWith('http') ? '_blank' : undefined} rel={project.primaryLink.startsWith('http') ? 'noreferrer' : undefined}>
                  {project.primaryLabel}
                </a>
                <a href={project.secondaryLink} className="project-link project-link--ghost" target="_blank" rel="noreferrer">
                  {project.secondaryLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Je suis ouvert aux opportunités et aux missions qui permettent d’apprendre et de progresser.</h2>

        <div className="contact-card">
          <a href="mailto:vaugeois.thomas@gmail.com">vaugeois.thomas@gmail.com</a>
          <div className="contact-links">
            <a href="https://github.com/VaugeoisThomas" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button className="scroll-top" type="button" aria-label="Retour en haut de la page" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </main>
  )
}
