import { skills } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { SkillCard } from './SkillCard'

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        label="Compétences"
        title="Les outils et technologies que j’utilise pour construire mes projets."
      />
      <div className="skills-grid">
        {skills.map((skill) => <SkillCard key={skill.title} skill={skill} />)}
      </div>
    </section>
  )
}
