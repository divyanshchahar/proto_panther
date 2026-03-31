import {ReactNode} from "react";
import styles from "./FeatureCardLayout.module.css"


export interface FeatureCardLayoutPropTypes {
    heading: string,
    description: string,
    explanation: string,
}

export default function FeatureCardLayout({heading, description, explanation}: FeatureCardLayoutPropTypes): ReactNode {
    return (
        <div className={`${styles.container}`}>
            <p className={`boldS ${styles.extraSpacing1}`}>{heading}</p>

            <p className={`heading4 ${styles.extraSpacing1}`}>{description}</p>

            <p>{explanation}</p>
        </div>
    )
}