import './Skills.css'
import { skillGroups } from './Skills.data'

/** Affiche les compétences de Thomas Vaugeois dans le domaine du développement web */
function Skills() {
    return (
        <section id="skills" className='skills' aria-labelledby='skills-title'>
            <header className='skills-header'>
                <div className="skills-heading">
                    <p className='section-label skills-label'>03 / Compétences</p>
                    <h2 id="skills-title" className='skills-title'>Une boîte à outils en mouvement.</h2>
                </div>
                <p className="skills-description">Les bases que j'utilise au quotidien, afin de m'améliorer, et de nouveaux éléments pour continuer à m'améliorer</p>
            </header>
            <div className="skills-list">
                {skillGroups.map(skill => (
                    <article className="skills-group" key={skill.id}>
                        <div className="skills-group-heading">
                            <img src={skill.icon} alt="" />
                            <h3>{skill.title}</h3>
                        </div>
                        <p className='skills-group-description'>{skill.description}</p>
                        <ul>
                            {skill.technologies.map(technologie => (
                                <li key={technologie}>{technologie}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Skills