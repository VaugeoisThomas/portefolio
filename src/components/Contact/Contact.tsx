import arrowUpRight from '../../assets/arrow-up-right.svg';
import github from '../../assets/github.svg';
import linkedIn from '../../assets/linkedin.svg';
import ActionLink from '../ActionLink/ActionLink';
import './Contact.css';

/** Affiche le moyen de contact */

function Contact() {
    return (
        <section id="contact" className='contact' aria-labelledby='contact-title'>
            <div className="contact-inner page-container">
                <div className="contact-top">
                    <header className='contact-header'>
                        <p className='section-label contact-label'>05 / Et maintenant ?</p>
                        <h2 id="contact-title" className='contact-title'>Et si on construisait la suite ensemble ?</h2>
                    </header>
                    <div className="contact-message">
                        <p className="contact-description">
                            Je recherche un CDD ou un CDI en développement web.
                            Vous souhaitez échanger sur mon parcours ou une opportunité au sein de votre équipe ?
                            Contactez-moi.
                        </p>
                        <div className="contact-links">
                            <ActionLink
                                href="mailto:vaugeois.thomas@gmail.com"
                                variant="light"
                                icon={arrowUpRight}
                            >
                                Écrivez-moi
                            </ActionLink>
                        </div>
                    </div>
                </div>
                <div className="contact-bottom">
                    <a
                        href="mailto:vaugeois.thomas@gmail.com" className='contact-email'
                    >
                        vaugeois.thomas@gmail.com
                        <img src={arrowUpRight} alt="" />
                    </a>
                    <nav className="contact-socials" aria-label='Réseaux professionnels'>
                        <a href="https://github.com/VaugeoisThomas" target='_blank' rel="noopener noreferrer">
                            <img src={github} alt="" />
                            GitHub
                            <img src={arrowUpRight} alt="" /></a>
                        <a href="https://www.linkedin.com/in/thomasvaugeois/" target='_blank' rel="noopener noreferrer">
                            <img src={linkedIn} alt="" />
                            LinkedIn
                            <img src={arrowUpRight} alt="" /></a>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Contact