export interface HamburgerMenuIconComponentPropTypes {
    styling?: string
}

export default function HamburgerMenuIconComponent({styling}: HamburgerMenuIconComponentPropTypes) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg" className={styling}>
            <path d="M0 32H48V26.6667H0V32ZM0 18.6667H48V13.3333H0V18.6667ZM0 0V5.33333H48V0H0Z"/>
        </svg>
    )
};