import arrowUpRight from '../../assets/arrow-up-right.svg'
import Description from '../Description/Description'
import "./Background.css"
import { backgroundSteps } from './Background.data'

/** Affiche le parcours */

function Background() {
    return (
        <section id="background" className="background" aria-labelledby="background-title">
            <div className="background-intro">
                <header className='background-header'>
                    <p className='section-label background-label'>04 / Mon parcours</p>
                    <h2 id="background-title" className='background-title'>Au début du chemin. Déjà en mouvement.</h2>
                    <Description>
                        De l'informatique au développement web, un parcours guidé par la curiosité et l'envie d'apprendre.
                    </Description>
                </header>
                <p className="background-next-step">
                    <img src={arrowUpRight} alt="" />
                    Prochaine étape : rejoindre une équipe en tant que développeur web junior en CDD ou CDI.
                </p>
            </div>
            <ol className='background-timeline'>
                {backgroundSteps.map((step) => (
                    <li key={step.id} className='background-step'>
                        <p className="background-period">{step.period}</p>
                        <h3>{step.title}</h3>
                        <p className="background-context">{step.context}</p>
                        <Description className='background-step-description'>{step.description}</Description>
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Background