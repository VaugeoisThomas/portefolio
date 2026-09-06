import { projectCards } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        label="Projets"
        title="Des projets qui montrent mon niveau et ma progression."
      />
      <div className="projects-grid">
        {projectCards.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  )
}
