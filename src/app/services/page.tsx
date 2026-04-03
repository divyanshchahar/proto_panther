import {ReactNode} from "react";
// import "../../../global.css"
import HeroSection1Layout, {HeroSectionPropTypes} from "@/ui/layouts/HeroSection1Layout"
import styles from "./page.module.css"
import FunnelIconComponent from "../../../public/icons/FunnelIconComponent";
import BudgetIconComponent from "../../../public/icons/BudgetIconComponent";
import ScheduleIconComponent from "../../../public/icons/ScheduleIconComponent";
import OwnershipIconComponent from "../../../public/icons/OwnershipIconComponent";
import FocusIconComponent from "../../../public/icons/FocusIconComponent";
import MeasurementIconComponent from "../../../public/icons/MeasurementIconComponent";
import InteractionIconComponent from "../../../public/icons/InteractionIconComponent";
import FeedbackIconComponent from "../../../public/icons/FeedbackIconComponent";
import LayersIconComponent from "../../../public/icons/LayersIconComponent";
import CogsIconComponent from "../../../public/icons/CogsIconComponent";
import IdeaIconComponent from "../../../public/icons/IdeaIconComponent";
import InvestmentIconComponent from "../../../public/icons/InvestmentIconComponent";

interface AttributeCardLayoutPropTypes {
    imgObj: ReactNode,
    headingText: string,
    descriptionText: string,
}

interface ServiceSectionPropTypes {
    tagLineText: string,
    headingText: string,
    descriptionText: string,
    attributeItems: AttributeCardLayoutPropTypes[]
    isImageOnRight: true | false;
    isBackgroundGrey: true | false
    sectionId: string,
    mainImage: ReactNode
}

const heroSection1Props: HeroSectionPropTypes = {
    colorScheme: "colorScheme4",
    taglineText: "Partnership",
    headingText: "How we work with you from start to finish",
    descriptionText: "We move fast. You decide when to start, when to pivot, and when to ship. We handle the building while you stay in control of the decisions that matter.",
    cardItems: [{
        children: <BudgetIconComponent styling={styles.svgImage}/>,
        descriptionText: "Clear agreements mean no surprises when the invoice arrives.",
        headingText: "You define the Scope and Budget",
    }, {
        children: <ScheduleIconComponent styling={styles.svgImage}/>,
        descriptionText: "Weekly updates keep you informed of progress and any course corrections needed.",
        headingText: "We deliver on a roadmap you approve",
    }, {
        children: <OwnershipIconComponent styling={styles.svgImage}/>,
        descriptionText: "Deliverables include ownership transfer of source code, documentation, design files and everything else required to run your project",
        headingText: "Everything transfers to you completely",
    }]
}

const AttributeCardLayout = ({imgObj, headingText, descriptionText}: AttributeCardLayoutPropTypes): ReactNode => {
    return (
        <div className={`${styles.card}`}>

            {imgObj}

            <p className={`heading6`}>{headingText}</p>

            <p>{descriptionText}</p>
        </div>
    )
}


const ServiceSection = ({
                            tagLineText,
                            headingText,
                            descriptionText,
                            attributeItems,
                            isImageOnRight,
                            isBackgroundGrey,
                            sectionId,
                            mainImage
                        }: ServiceSectionPropTypes): ReactNode => {
    return (
        <div id={sectionId}
             className={`${styles.serviceSection} ${isBackgroundGrey ? "colorScheme2" : "colorScheme1"}`}>
            <div className={styles.container}>
                <div className={`${styles.contentHolder}  ${isImageOnRight ? styles.order1 : styles.order2}`}>
                    <div className={styles.contentSubHolder}>
                        <div className={styles.textHolder}>
                            <p className={`boldS`}>{tagLineText}</p>

                            <div className={styles.textSubHolder}>
                                <p className={`heading3`}>{headingText}</p>

                                <p>{descriptionText}</p>
                            </div>
                        </div>

                        <div className={`${styles.cardHolder}`}>
                            {
                                attributeItems.map((arrtibuteItem, i) => {
                                    return (
                                        <AttributeCardLayout imgObj={arrtibuteItem.imgObj}
                                                             headingText={arrtibuteItem.headingText}
                                                             descriptionText={arrtibuteItem.descriptionText} key={i}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className={`${styles.imageHolder} ${isImageOnRight ? styles.order2 : styles.order1}`}>
                    {mainImage}
                </div>
            </div>
        </div>
    )
}

export default function Services() {
    return (
        <>
            <HeroSection1Layout taglineText={heroSection1Props.taglineText}
                                headingText={heroSection1Props.headingText}
                                descriptionText={heroSection1Props.descriptionText}
                                cardItems={heroSection1Props.cardItems}
                                colorScheme={"colorScheme4"}
            />

            <ServiceSection isImageOnRight={true} tagLineText={"Convert"}
                            sectionId={"landing page"}
                            isBackgroundGrey={true}
                            headingText={"Pages that turn visitors into customers"}
                            descriptionText={"A landing page has one job. It stops the scroll, removes doubt, and moves people toward action. We measure what works and rebuild what doesn't."}
                            mainImage={<FunnelIconComponent styling={styles.serviceSectionImage}/>}
                            attributeItems={[{
                                imgObj: <FocusIconComponent/>,
                                headingText: "Singular Focus",
                                descriptionText: "No navigation menus. No competing offers. Just one clear path forward."
                            }, {
                                imgObj: <MeasurementIconComponent/>,
                                headingText: "Measured results",
                                descriptionText: "We watch where users pause and why they leave. Data guides every change."
                            }]}/>

            <ServiceSection isImageOnRight={false}
                            isBackgroundGrey={false}
                            tagLineText={"Validated"}
                            headingText={"Interactive designs that deliver clarity"}
                            descriptionText={"A high fidelity prototype feels real. You interact with it like a finished product, revealing what works and what doesn't before you build the full thing."}
                            attributeItems={[{
                                imgObj: <InteractionIconComponent/>,
                                headingText: "Clickable flows",
                                descriptionText: "Fully functional interfaces that behave like production software."
                            }, {
                                imgObj: <FeedbackIconComponent/>,
                                headingText: "Market Feedback",
                                descriptionText: "Test demand with real users and refine before development begins."
                            }]}
                            sectionId={"prototype"}
                            mainImage={<IdeaIconComponent styling={styles.serviceSectionImage}/>}
            />

            <ServiceSection tagLineText={"Launch"} headingText={"Products that work from day one"}
                            isBackgroundGrey={true}
                            descriptionText={"An MVP proves your idea has legs. We build it solid enough to attract capital and lean enough to move when the market shifts."}
                            attributeItems={[{
                                headingText: "No Shortcuts",
                                descriptionText: "Architecture built to scale, code that does not rot, decisions that hold up.",
                                imgObj: <LayersIconComponent/>,
                            }, {
                                headingText: "Capital ready",
                                descriptionText: "Finished enough to impress investors, focused enough to ship fast.",
                                imgObj: <InvestmentIconComponent/>
                            }]} isImageOnRight={true}
                            sectionId={"MVP"}
                            mainImage={<CogsIconComponent styling={styles.serviceSectionImage}/>}
            />
        </>
    );
}


// TODO
// 1.Add actions
