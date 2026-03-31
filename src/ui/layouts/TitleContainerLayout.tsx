import styles from "./TitleContainerLayout.module.css"

export interface TitleContainerLayoutPropsTypes {
    taglineText?: string;
    headingText?: string;
    descriptionText?: string;
    colorScheme: string;
}

export default function TitleContainerLayout({
                                                 taglineText,
                                                 headingText,
                                                 descriptionText,
                                                 colorScheme,
                                             }: TitleContainerLayoutPropsTypes) {
    return (
        <div className={`${colorScheme} ${styles.container}`}>
            <p className={`boldS`}>{taglineText}</p>

            <p className={`heading2`}>{headingText}</p>

            <p className={`lightL`}>{descriptionText}</p>
        </div>
    )
}