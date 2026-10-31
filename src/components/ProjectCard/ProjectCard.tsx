import github from '../../assets/github.svg';
import Description from '../Description/Description';
import type { Project } from '../Projects/Projects.data';

import './ProjectCard.css';

type ProjectCardProps = {
    project: Project
    number: number
}

/** Affiche la présentation d'un projet */
function ProjectCard({ project, number }: Readonly<ProjectCardProps>) {

    return (
        <article className={project.featured ? 'project-card project-card-featured' : 'project-card project-card-compact'}>
            {project.img && (
                <div className="project-card-media">
                    <div className="project-card-browser" aria-hidden="true">
                        <span className="project-card-browser-dots"></span>
                        <span>{project.title} - aperçu</span>
                    </div>
                    <div className="project-card-preview">
                        <img src={project.img.src} alt={project.img.alt} className='project-card-image' />
                    </div>
                </div>
            )}
            <div className="project-card-content">
                <div className="project-card-heading">
                    <p className='project-card-category'>{project.category}</p>
                    <span className="project-card-number" aria-hidden="true">{String(number).padStart(2, '0')}</span>
                </div>
                <h3 className='project-card-title'>{project.title}</h3>
                <Description>{project.description}</Description>
                {project.technologies.length > 0 && (
                    <ul className="project-card-technologies">
                        {project.technologies.map(technology => (
                            <li key={technology}>{technology}</li>
                        ))}
                    </ul>
                )}
                <p className='project-card-learning'>{project.learning}</p>
                {project.sourceUrl && (
                    <a href={project.sourceUrl} className='project-card-source' aria-label={`Code source de ${project.title}`}>
                        <img src={github} alt="" />
                        Code source
                    </a>
                )}
            </div>
        </article>
    )
}

export default ProjectCard