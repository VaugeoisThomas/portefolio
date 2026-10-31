import './Footer.css';

/** Pied de page du portefolio */
function Footer() {
    return (
        <footer className='footer'>
            <div className="page-container">
                <div className="footer-inner">
                    <div className="footer-identity">
                        <p>Thomas Vaugeois</p>
                        <p>Développeur web junior</p>
                    </div>
                    <div className="footer-links">
                        <p>&copy; {new Date().getFullYear()}</p>
                        <a href="#home">Retour en haut ↑</a>
                    </div>
                </div>
                <p className='footer-note'>
                    Portefolio personnel développé avec React et TypeScript, à partir d'une maquette Figma adaptée à mon parcours.
                </p>
            </div>
        </footer>
    )
}

export default Footer