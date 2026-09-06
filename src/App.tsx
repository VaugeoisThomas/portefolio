import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { navLinks } from './data/portfolio'
import { useScrollToTop } from './hooks/useScrollToTop'

export default function App() {
  const { isVisible, scrollToTop } = useScrollToTop()

  return (
    <>
      <Header links={navLinks} />
      <main id="top" className="portfolio">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer links={navLinks} />

      {isVisible && (
        <button className="scroll-top" type="button" aria-label="Retour en haut de la page" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  )
}
