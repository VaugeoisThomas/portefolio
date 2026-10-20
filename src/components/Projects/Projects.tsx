import info from '../../assets/info.svg';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import { projects } from './Projects.data';

/** Présente une sélection de mes projets. */
function Projects() {
    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="projects" className="projects" aria-labelledby="projects-title">
            <header className="projects-header">
                <div className="projects-heading">
                    <p className="section-label projects-label">01 / Projets sélectionnés</p>
                    <h2 id="projects-title" className='projects-title'>Apprendre. Construire. Affiner.</h2>
                </div>
                <p className='projects-description'>
                    De l'intégration HTML et Sass aux applications avec interface, serveur et base de données,
                    ces projets de formation et personnels illustrent mon parcours dans le développement web.
                </p>
            </header>
            <div className='projects-list'>
                {featuredProjects.map(project => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
            <div className='projects-others'>
                {otherProjects.map(project => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
            <div className="projects-note">
                <img src={info} alt="" />
                <p>Ces réalisations sont des projets de formation ou personnels, et non des commandes clients.</p>
            </div>
        </section>
    )
}

export default Projects