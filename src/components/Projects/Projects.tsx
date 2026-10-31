import info from '../../assets/info.svg';
import Description from '../Description/Description';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import { selectedProjects } from './Projects.data';

/** Présente une sélection de mes projets. */
function Projects() {
    const featuredProjects = selectedProjects.filter(project => project.featured);
    const otherProjects = selectedProjects.filter(project => !project.featured);

    return (
        <section id="projects" className="projects" aria-labelledby="projects-title">
            <header className="projects-header">
                <div className="projects-heading">
                    <p className="section-label projects-label">01 / Projets sélectionnés</p>
                    <h2 id="projects-title" className='projects-title'>Apprendre. Construire. Affiner.</h2>
                </div>
                <Description>
                    De l'intégration HTML et Sass aux applications avec interface, serveur et base de données,
                    ces projets de formation et personnels illustrent mon parcours dans le développement web.
                </Description>
            </header>
            <div className='projects-list'>
                {featuredProjects.map((project, index) => (
                    <ProjectCard project={project} key={project.id} number={index + 1} />
                ))}
            </div>
            <div className='projects-others'>
                {otherProjects.map((project, index) => (
                    <ProjectCard project={project} key={project.id} number={featuredProjects.length + index + 1} />
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