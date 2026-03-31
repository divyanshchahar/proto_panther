import FeatureCard2Layout, {FeatureCard2LayoutPropsTypes} from "./FeatureCard2Layout";
import styles from "./HeroSection1Layout.module.css"
import {ReactNode} from "react";
import TitleContainerLayout from "./TitleContainerLayout";

export interface HeroSectionPropTypes {
    taglineText: string,
    headingText: string,
    descriptionText: string,
    colorScheme: string,
    cardItems: FeatureCard2LayoutPropsTypes[],
}


export default function HeroSection1Layout({
                                               taglineText,
                                               headingText,
                                               descriptionText,
                                               cardItems,
                                               colorScheme
                                           }: HeroSectionPropTypes): ReactNode {
    return (
        <div className={`${styles.paddedSection} ${colorScheme}`}>

            <div className={`${styles.columnFlexContainer}`}>

                <TitleContainerLayout colorScheme={colorScheme} headingText={headingText}
                                      descriptionText={descriptionText}
                                      taglineText={taglineText}/>

                <div className={styles.rowFlexContainer}>
                    {
                        cardItems.map((cardItem, i) => {
                            return <FeatureCard2Layout headingText={cardItem.headingText}
                                                       descriptionText={cardItem.descriptionText}
                                                       key={i}>{cardItem.children}</FeatureCard2Layout>
                        })}
                </div>
            </div>

        </div>
    )
}