import { useState } from 'react';
import './Header.css';

const navigationLinks = [
    { href: "#projects", label: 'Projets' },
    { href: "#skills", label: 'Compétences' },
    { href: "#background", label: 'Parcours' },
    { href: "#contact", label: 'Contact' },
]

/** Affiche l’en-tête et la navigation principale du portfolio. */
function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='site-header'>
            <a href="#home">Thomas Vaugeois</a>
            <button
                type="button"
                className='menu-toggle'
                aria-expanded={isMenuOpen}
                aria-controls='main-navigation'
                onClick={() => setIsMenuOpen(previous => !previous)}
            >
                <span className="menu-icon" aria-hidden="true"></span>
                Menu
            </button>
            <nav id="main-navigation" aria-label="Navigation principale" hidden={!isMenuOpen}>
                <ul>
                    {navigationLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header