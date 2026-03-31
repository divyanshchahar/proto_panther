import HeroSection1Layout, {HeroSectionPropTypes} from "../../ui/layouts/HeroSection1Layout"

// import "../../../global.css"

import styles from "./page.module.css"
import BrandingLayout from "../../ui/layouts/BrandingLayout";
import FeatureCardLayout from "../../ui/layouts/FeatureCardLayout";
import QuantifiableIconComponent from "../../../public/icons//QuantifiableIconComponent";
import OwnershipIconComponent from "../../../public/icons//OwnershipIconComponent";

import AgreementIconComponent from "../../../public/icons/AgreementIconComponent";

const heroSection1LayoutProps: HeroSectionPropTypes = {
    colorScheme: "colorScheme4",
    taglineText: "Ownership",
    headingText: "Fund, Test, Own",
    descriptionText: "We move fast and get out of your way. What we build belongs to you from day one, no exceptions, no negotiations.",
    cardItems: [{
        headingText: "Clarity",
        descriptionText: "We clearly define timelines, objectives and budgets. No fine print, no surprises, no hidden costs",
        children: <AgreementIconComponent styling={styles.svgImage}/>
    }, {
        headingText: "Quantifiable Results",
        descriptionText: "We ship it live so you can see what sticks before deciding what comes next.",
        children: <QuantifiableIconComponent styling={styles.svgImage}/>
    }, {
        headingText: "Full Ownership",
        descriptionText: "Source code, designs, documentation - all yours the moment dues are cleared",
        children: <OwnershipIconComponent styling={styles.svgImage}/>
    }]
}

const HeroSectionLayout = () => {
    return (
        <div className={`${styles.heroSection} colorScheme2`}>
            <div className={styles.textContainer}>
                <p className={`boldS`}>Trust</p>

                <div className={styles.textSubContainer}>
                    <p className={`heading3`}>Why founders choose us</p>

                    <p className={`lightL`}>We keep things simple and honest</p>
                </div>
            </div>

            <div className={styles.heroSectionCardContainer}>
                <FeatureCardLayout heading={"Transparent Pricing"} description={"No hidden fees or surprise bills"}
                                   explanation={"You know exactly what you pay"}/>

                <FeatureCardLayout heading={"Constant Communication"} description={"You hear from us every step"}
                                   explanation={"No followups only updates"}/>

                <FeatureCardLayout heading={"Clarity"} description={"Every milestone mapped out clearly"}
                                   explanation={"You see what's coming and when"}/>


                <FeatureCardLayout heading={"Guarantee"} description={"RESULTS or REFUND"}
                                   explanation={"If we don't deliver, you get refunded"}/>

                <FeatureCardLayout heading={"Data Driven"} description={"Real numbers drive our decisions"}
                                   explanation={"We track what matters and make changes accordingly"}/>

                <FeatureCardLayout heading={"Agreement"} description={"Agreements that actually make sense"}
                                   explanation={"Plain language, fair terms, no fineprint"}/>
            </div>
        </div>
    )
}

export default function Page() {
    return (
        <>
            <HeroSection1Layout taglineText={heroSection1LayoutProps.taglineText}
                                headingText={heroSection1LayoutProps.headingText}
                                descriptionText={heroSection1LayoutProps.descriptionText}
                                cardItems={heroSection1LayoutProps.cardItems}
                                colorScheme={"colorScheme4"}/>

            <HeroSectionLayout/>

            <BrandingLayout/>
        </>
    )
}