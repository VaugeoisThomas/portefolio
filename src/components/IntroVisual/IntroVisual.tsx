import orbit from '../../assets/orbit.svg'
import sparkles from '../../assets/sparkles.svg'
import statusDot from '../../assets/status-dot.svg'
import "./IntroVisual.css"
import { developerCode } from "./IntroVisual.data"

/** Affiche l'illustration décorative de l'accueil */

function IntroVisual() {
    return (
        <div className="intro-visual" aria-hidden="true">
            <span className="intro-visual-symbol">{'</>'}</span>
            <img className='intro-orbit intro-orbit-first' src={orbit} alt='' />
            <img className='intro-orbit intro-orbit-second' src={orbit} alt='' />
            <p className="intro-visual-label">
                <img src={statusDot} alt='' />
                De l'idée à l'écran
            </p>
            <div className="code-preview">
                <div className="code-preview-bar">
                    <span>Visual Studio Code</span>
                </div>
                <div className="code-preview-tabs">
                    <span className="code-preview-tab code-preview-tab-active">hello-world.tsx</span>
                    <span className="code-preview-tab">hello-world.css</span>
                </div>
                <pre className="code-preview-content">
                    <code>
                        {developerCode.map(line => (
                            <span className="code-preview-line" key={line.id}>
                                {line.tokens.map((token, index) => (
                                    <span
                                        className={token.kind ? `code-token-${token.kind}` : undefined}
                                        key={index}
                                    >
                                        {token.text}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </code>
                </pre>
            </div>
            <div className="intro-visual-result">
                <div className="intro-visual-result-icon">
                    <img src={sparkles} alt="" />
                </div>
                <div className="intro-visual-result-text">
                    <p className="intro-visual-result-title">Pensé pour l'humain.</p>
                    <p className="intro-visual-result-subtitle">Construit pour le web.</p>
                </div>
            </div>
        </div>
    )
}

export default IntroVisual
