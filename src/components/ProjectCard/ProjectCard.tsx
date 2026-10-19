import type { Project } from '../Projects/Projects.data';
import './ProjectCard.css';

type ProjectCardProps = {
    project: Project
}

/** Affiche la présentation d'un projet */
function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className='project-card'>
            {project.img && (
                <img src={project.img.src} alt={project.img.alt} className='project-card-image' />
            )}
            <div className="project-card-content">
                <p className='project-card-category'>{project.category}</p>
                <h3 className='project-card-title'>{project.title}</h3>
                <p className='project-card-description'>{project.description}</p>
                <ul className="project-card-technologies">
                    {project.technologies.map(technology => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
                <p className='project-card-learning'>{project.learning}</p>
                {project.sourceUrl && (
                    <a href={project.sourceUrl} className='project-card-source'>Code source</a>
                )}
            </div>
        </article>
    )
}

export default ProjectCard