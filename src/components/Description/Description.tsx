import type { ComponentPropsWithoutRef } from 'react'
import './Description.css'

type DescriptionProps = ComponentPropsWithoutRef<'p'>

/** Affiche la description des éléments */
function Description({
    children,
    className = '',
    ...props
}: Readonly<DescriptionProps>) {
    return (
        <p
            {...props}
            className={`description ${className}`.trim()}
        >
            {children}
        </p>
    )
}

export default Description