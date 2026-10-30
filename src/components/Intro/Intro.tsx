import arrowDown from '../../assets/arrow-down.svg';
import arrowUpRight from '../../assets/arrow-up-right.svg';
import mapPin from '../../assets/map-pin.svg';
import statusDot from '../../assets/status-dot.svg';
import ActionLink from '../ActionLink/ActionLink';
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
                    <ActionLink
                        href="#projects"
                        variant="primary"
                        icon={arrowDown}
                    >
                        Découvrir mes projets
                    </ActionLink>
                    <ActionLink
                        href={`${import.meta.env.BASE_URL}cv-thomas-vaugeois.pdf`}
                        download
                        icon={arrowUpRight}
                    >
                        Télécharger mon CV (PDF)
                    </ActionLink>
                </div>
            </div>
            <IntroVisual />
            <div className="intro-details">
                <p className='intro-details-location'>
                    <img src={mapPin} alt='' />
                    Vidauban, France
                </p>
                <p className="intro-details-speciality">Développement web</p>
                <p className="intro-details-year">Portfolio / 2026</p>
            </div>
        </section >
    )
}

export default Intro;