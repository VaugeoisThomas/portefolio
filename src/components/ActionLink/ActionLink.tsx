import type { ComponentPropsWithoutRef } from "react";
import './ActionLink.css';

type ActionLinkProps = ComponentPropsWithoutRef<'a'> & {
    href: string;
    variant?: 'primary' | 'secondary' | 'light';
    icon?: string
}

/** Affiche un lien d'action avec une variante et une icône facultative. */
function ActionLink({
    children,
    variant = 'secondary',
    icon,
    className = '',
    ...props
}: Readonly<ActionLinkProps>) {
    return (
        <a
            {...props}
            className={`action-link action-link--${variant} ${className}`.trim()}
        >
            {children}
            {icon && <img src={icon} alt="" />}
        </a>
    );
}

export default ActionLink