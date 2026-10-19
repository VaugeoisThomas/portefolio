import statusDot from '../../assets/status-dot.svg';
import IntroVisual from '../IntroVisual/IntroVisual';
import './Intro.css';

/** Affiche la présentation et les liens principaux de l'accueil. */
function Intro() {
    return (
        <section id="home" className='intro' aria-labelledby='home-title'>
            <div className="intro-content">
                <p className='intro-availability'>
                    <img src={statusDot} alt='' />
                    Disponible pour un CDD ou un CDI
                </p>
                <h1 id="home-title" className='intro-title'>
                    Du code clair.
                    <br />
                    Des idées qui
                    <br />
                    <span>prennent vie.</span>
                </h1>
                <p className='intro-subtitle'>Thomas Vaugeois - Développeur web junior</p>
                <p className='intro-description'>
                    Je développe des interfaces web avec React et TypeScript, en portant attention à leur utilisation sur
                    mobile et à la clarté du code.
                </p>
                <p className='intro-description'>
                    Je recherche un CDD ou un CDI pour contribuer aux projets d'une équipe et continuer à
                    progresser.
                </p>
                <div className="intro-actions">
                    <a href="#projects" className='intro-action-primary'>Découvrir mes projets</a>
                    <a href="#contact">Me contacter</a>
                </div>
            </div>
            <IntroVisual />
        </section>
    )
}

export default Intro;