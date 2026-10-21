import { useState } from 'react';
import arrowUpRight from '../../assets/arrow-up-right.svg';
import './Header.css';

const navigationLinks = [
    { href: "#projects", label: 'Projets' },
    { href: '#about', label: 'À propos' },
    { href: "#skills", label: 'Compétences' },
    { href: "#background", label: 'Parcours' },
]

/** Affiche l’en-tête et la navigation principale du portfolio. */
function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='site-header'>
            <a href="#home" className="site-brand">
                <span className='site-monogram' aria-hidden="true">tv</span>
                <span>Thomas Vaugeois</span>
            </a>
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
            <a href="#contact" className="header-contact">
                Parlons ensemble
                <img src={arrowUpRight} alt='' />
            </a>
        </header>
    )
}

export default Header
