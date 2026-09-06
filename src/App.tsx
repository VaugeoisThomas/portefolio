import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { navLinks } from './data/portfolio'
import { useScrollToTop } from './hooks/useScrollToTop'

export default function App() {
  const { isVisible, scrollToTop } = useScrollToTop()

  return (
    <main className="portfolio">
      <Header links={navLinks} />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {isVisible && (
        <button className="scroll-top" type="button" aria-label="Retour en haut de la page" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </main>
  )
}
