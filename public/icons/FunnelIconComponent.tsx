export interface FunnelIconComponentPropTypes {
    styling?: string
}

export default function FunnelIconComponent({styling}: FunnelIconComponentPropTypes) {
    return <svg width="100%" height="100%" viewBox="0 0 48 45" xmlns="http://www.w3.org/2000/svg"
                className={styling}>
        <path
            d="M47.8104 0.700312C47.5578 0.266437 47.095 0 46.5938 0H1.40626C0.904974 0 0.442224 0.266438 0.189474 0.700406C-0.0617757 1.13438 -0.0631819 1.66856 0.185443 2.10384L4.70185 9.84375H43.2982L47.8146 2.10384C48.0631 1.66847 48.0618 1.13428 47.8104 0.700312Z"
        />

        <path d="M11.9339 22.5L15.9516 29.5312H32.0483L36.0661 22.5H11.9339Z"/>

        <path d="M6.3089 12.6562L10.3268 19.6875H37.6732L41.6911 12.6562H6.3089Z"/>

        <path
            d="M16.9688 32.3438V43.5938C16.9688 44.371 17.5977 45 18.375 45H29.625C30.4023 45 31.0312 44.371 31.0312 43.5938V32.3438H16.9688Z"
        />
    </svg>

}