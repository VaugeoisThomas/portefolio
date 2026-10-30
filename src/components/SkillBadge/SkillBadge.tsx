import { skillLevels } from './SkillBadge.data';
import type { SkillLevel } from './SkillBadge.data';
import './SkillBadge.css';

type SkillBadgeProps = { name: string; level: SkillLevel };

/** Affiche le niveau sans interaction, y compris pour les lecteurs d’écran. */
function SkillBadge({ name, level }: Readonly<SkillBadgeProps>) {
    const status = skillLevels[level];
    return (
        <span className={'skill-badge skill-badge--' + level}>
            <span className="skill-badge-symbol" aria-hidden="true">{status.symbol}</span>
            {name}
            <span className="skill-badge-level"> : {status.label}</span>
        </span>
    );
}

export default SkillBadge;
