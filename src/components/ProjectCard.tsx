import type { Project } from '../data/portfolio'
import { isExternalLink } from '../utils/links'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  const primaryIsExternal = isExternalLink(project.primaryLink)

  return (
    <article className="project-card">
      <div className="project-tag">{project.tag}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-card__actions">
        <a
          href={project.primaryLink}
          className="project-link"
          target={primaryIsExternal ? '_blank' : undefined}
          rel={primaryIsExternal ? 'noreferrer' : undefined}
        >
          {project.primaryLabel}
        </a>
        <a href={project.secondaryLink} className="project-link project-link--ghost" target="_blank" rel="noreferrer">
          {project.secondaryLabel}
        </a>
      </div>
    </article>
  )
}
