import SkillBadge from '../SkillBadge/SkillBadge'
import { skillLevelOrder, skillLevels } from '../SkillBadge/SkillBadge.data'
import Description from '../Description/Description'
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
                <Description>Des technologies pratiquées en formation et dans mes projets, avec des repères sur mon autonomie actuelle.</Description>
            </header>
            <div className="skills-list">
                {skillGroups.map(skill => (
                    <article className="skills-group" key={skill.id}>
                        <div className="skills-group-heading">
                            <span className="skills-group-icon">
                                <img src={skill.icon} alt="" />
                            </span>
                            <h3>{skill.title}</h3>
                        </div>
                        <Description className='skills-group-description'>{skill.description}</Description>
                        <ul>
                            {skill.technologies.map(technologie => (
                                <li key={technologie.name}>
                                    <SkillBadge
                                        name={technologie.name}
                                        level={technologie.level}
                                    />
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
            <div className="skills-legend">
                <p className="skills-legend-title" id="skills-legend-title">Repères de pratique</p>
                <ul className="skills-legend-list" aria-labelledby="skills-legend-title">
                    {skillLevelOrder.map(level => (
                        <li key={level}>
                            <span className={`skill-level-marker skill-level-marker--${level}`} aria-hidden="true">
                                {skillLevels[level].symbol}
                            </span>
                            {skillLevels[level].label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Skills
