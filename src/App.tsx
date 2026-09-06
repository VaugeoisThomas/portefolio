import { useEffect, useState } from 'react'
import { ContactSection } from './components/ContactSection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { SkillCard } from './components/SkillCard'
import { navLinks, projectCards, skills } from './data/portfolio'

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="portfolio">
      <Header links={navLinks} />
      <Hero />

      <section id="about" className="section">
        <SectionHeading
          label="À propos"
          title="Je crée des interfaces lisibles et j’ai envie d’apprendre le développement backend."
        />

        <div className="about-grid">
          <p>
            Je suis passionné par le développement web et je cherche à construire des compétences solides
            autour de la création d’applications modernes. J’ai une bonne base en HTML et CSS, et je
            souhaite maintenant approfondir le côté backend pour mieux comprendre la logique métier, les
            API et la gestion des données.
          </p>

          <div className="about-panel">
            <div><span>Statut</span><strong>Développeur web junior</strong></div>
            <div><span>Objectif</span><strong>Premiers pas en entreprise</strong></div>
            <div><span>Focus</span><strong>Backend &amp; API</strong></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <SectionHeading
          label="Compétences"
          title="Les outils et technologies que j’utilise pour construire mes projets."
        />
        <div className="skills-grid">
          {skills.map((skill) => <SkillCard key={skill.title} skill={skill} />)}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHeading
          label="Projets"
          title="Des projets qui montrent mon niveau et ma progression."
        />
        <div className="projects-grid">
          {projectCards.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <ContactSection />

      {showScrollTop && (
        <button className="scroll-top" type="button" aria-label="Retour en haut de la page" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}
    </main>
  )
}
