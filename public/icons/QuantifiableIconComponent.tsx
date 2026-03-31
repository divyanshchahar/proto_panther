export interface QuantifiableIconComponentPropType {
    styling?: string,
}

export default function QuantifiableIconComponent({styling}: QuantifiableIconComponentPropType) {
    return (
        <svg width="100%" height="100%" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={styling}>
            <path d="M22.586 47.8809V27.9128L10.0518 43.4089C13.7304 46.0675 18.046 47.6156 22.586 47.8809Z"
            />
            <path
                d="M25.3964 25.3463V47.8809C31.2351 47.5399 36.7058 45.0795 40.928 40.8634C45.1511 36.6463 47.6172 31.1812 47.9589 25.3463H25.3964Z"
            />
            <path d="M38.0288 13.343H41.5388V22.5359H38.0288V13.343Z"/>
            <path
                d="M7.06369 7.0185C2.50856 11.5714 0 17.5813 0 23.9411C0 30.3009 2.50856 36.3109 7.06369 40.8638C7.32806 41.1279 7.59778 41.3846 7.87181 41.6349L22.586 23.4438V0C16.7454 0.342094 11.2804 2.80387 7.06369 7.0185Z"
            />
            <path d="M25.3964 10.5513H28.8978V22.5359H25.3964V10.5513Z"/>
            <path d="M31.7082 3.78873H35.2183V22.536H31.7082V3.78873Z"/>
            <path d="M44.3494 17.1006H48V22.5359H44.3494V17.1006Z"/>
        </svg>
    )
}