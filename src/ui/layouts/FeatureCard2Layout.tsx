import styles from "./FeatureCard2Layout.module.css"
import {ReactNode} from "react";

export interface FeatureCard2LayoutPropsTypes {
    headingText: string,
    descriptionText: string,
    children: ReactNode,
}

export default function FeatureCard2Layout({children, headingText, descriptionText}: FeatureCard2LayoutPropsTypes) {
    return (
        <div className={styles.container}>
            {children}
            <p className={`heading4`}>{headingText}</p>

            <p className={`regularN`}>{descriptionText}</p>

        </div>
    )
}