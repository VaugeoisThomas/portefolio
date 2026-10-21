import './Footer.css';

/** Pied de page du portefolio */
function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-inner page-container">
                <p>Thomas Vaugeois - Développeur web junior</p>
                <nav className="footer-links" aria-label='Réseaux professionnels'>
                    <a href="https://github.com/VaugeoisThomas" target='_blank' rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/thomasvaugeois/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer