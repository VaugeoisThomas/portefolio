import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
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
  )
}
