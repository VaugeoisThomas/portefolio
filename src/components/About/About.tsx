import code from '../../assets/code-xml.svg'
import plus from '../../assets/plus.svg'
import portrait from '../../assets/thomas-vaugeois-portrait.jpg'
import './About.css'

/** Présente Thomas Vaugeois et son approche du développement web. */
function About() {
    return (
        <section id="about" className="about" aria-labelledby="about-title">
            <div className="about-inner page-container">
                <div className="about-portrait">
                    <div className="about-photo-frame">
                        <img src={portrait} alt="Portrait de Thomas Vaugeois" className='about-photo' />
                        <p className='about-photo-label'>
                            <img src={code} alt="" />
                            Développeur, toujours en apprentissage.
                        </p>
                    </div>
                    <div className="about-caption">
                        <p>Thomas Vaugeois</p>
                        <p className='about-location'>Vidauban, France</p>
                    </div>
                </div>
                <div className="about-content">
                    <header className='about-header'>
                        <div className="about-heading">
                            <p className="about-label">02 / À propos</p>
                            <h2 id="about-title" className='about-title'>Un esprit curieux, les mains dans le code.</h2>
                        </div>
                    </header>
                    <p className='about-description'>
                        Curieux de nature, je souhaitais comprendre comment fonctionnaient les sites web que j'utilisais.
                        Ma formation et mes projets m'ont ensuite permis de passer de cette envie de comprendre à la création de mes
                        propres applications.
                    </p>
                    <p className='about-description'>
                        Aujourd'hui, je suis à la recherche d'un CDI ou d'un CDD pour contribuer aux projets d'une équipe
                        et continuer à progresser, aussi bien sur les interfaces que sur le fonctionnement côté serveur.
                    </p>
                    <ul className='about-values'>
                        <li><img src={plus} alt="" />Persévérance</li>
                        <li><img src={plus} alt="" />Esprit d'équipe</li>
                        <li><img src={plus} alt="" />Envie d'apprendre</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About