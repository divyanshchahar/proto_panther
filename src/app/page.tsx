import AccordionPrimitive, {AccordionPrimitivePropTypes} from "@/ui/primitives/AccordionPrimitive";
import ChevronDownIconComponent from "../../public/icons/ChevronDownIcon";
import PrototypeIconComponent from "../../public/icons/PrototypeIconComponent";
import LandingPageIconComponent from "../../public/icons/LandingPAgeIconComponent";
import MVPIconComponent from "../../public/icons/MVPIconComponent";
import ButtonComponent from "@/ui/components/ButtonComponent";
import styles from "./page.module.css"
import ReviewCardLayout, {ReviewCardLayoutPropsTypes} from "@/ui/layouts/ReviewCardLayout";
import TitleContainerLayout from "@/ui/layouts/TitleContainerLayout";
import HeroSection1Layout from "@/ui/layouts/HeroSection1Layout";
import BrandingLayout from "@/ui/layouts/BrandingLayout";


const accordionProps: AccordionPrimitivePropTypes = {
    triggerIcon: <ChevronDownIconComponent styling=""/>,
    accordionItems: [
        {
            headerText: "How long does an MVP take ?",
            descriptionText: "Most MVPs ship in four weeks or less. We've refined our process to eliminate inefficiency and move with purpose. Your timeline gets locked in before we start."
        },
        {
            headerText: "What if I need changes?",
            descriptionText: "Congratulation you are just like every other founder. You don’t need to worry, our approach allows for easy incorporation of changes."
        },
        {
            headerText: "Do you handle everything?",
            descriptionText: "We plan, design, build and deploy your product. You focus on your business. We deliver working software ready to put in front of users."
        },
        {
            headerText: "What's the pricing structure ?",
            descriptionText: "TRANSPARENT and FIXED. Our pricing structure varies based on the complexity and timeline of the product. However we promise that there won’t be any hidden fees or financial surprises along the way."
        },
        {
            headerText: "Can we scale what you build?",
            descriptionText: "Yes. You will be able to easily add scalability to our code. We write code that is easy to read, code readability (clean code) is must for everything we deliver. "
        }
    ]

}

const realResultsSectionProps: ReviewCardLayoutPropsTypes[] = [
    {
        review: "We went from concept to paying customers in less than a month. That speed changed everything for us.",
        reviewerName: "James Liu",
        occupation: "Founder",
        companyName: "FinFlow",
        avatarUrl: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80", /* remove this in final version */
    }, {
        review: "They treated our product like it was their own. The attention to detail and the roadmap clarity made all the difference.",
        reviewerName: "Priya Kapoor",
        occupation: "CEO",
        companyName: "CloudSync",
        avatarUrl: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80", /* remove this in final version */
    },
    {
        review: "Fixed price, fixed timeline, and they delivered exactly what they promised. No surprises, just a working product.",
        reviewerName: "David Torres",
        occupation: "Founder",
        companyName: "Growth Labs",
        avatarUrl: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80", /* remove this in final version */
    }
]

const heroSectionProps = {
    colorScheme: "colorScheme2",
    taglineText: "Launch",
    headerText: "Pick the path fits your stage",
    descriptionText: "We meet you where you are. Some founders need to test an idea. Others need proof for investors. Some are ready to go to market. We have the right approach for each.",
    cardItems: [
        {
            headingText: "MVPs that validate",
            descriptionText: "Launch a product engineered for real users, real traffic, and real growth.",
            children: <MVPIconComponent styling={styles.HeroSectionImages}/>
        }, {
            headingText: "Landing pages that convert",
            descriptionText: "Put your concept in front of real users and measure what sticks.",
            children: <LandingPageIconComponent styling={styles.HeroSectionImages}/>
        }, {
            headingText: "Prototypes that give clarity",
            descriptionText: "Show investors and early users exactly what you're building and why it matters.",
            children: <PrototypeIconComponent styling={styles.HeroSectionImages}/>
        },
    ]
}

const HeroSection = () => {
    return (
        <div className={`${styles.paddedContainer} colorScheme5`}>

            <div
                className={`${styles.xxlContainer} ${styles.columnFlexContainer} ${styles.borderedContainer} ${styles.dottedBackground}`}>
                <div className={`${styles.columnFlexContainer} ${styles.herSectionTextContainer}`}>

                    <p className={`heading2`}>Get a tech cofounder without the equity</p>

                    <p className={`boldN`}>
                        We build your MVP like a cofounder would, but you keep full ownership. Fixed price, fixed
                        timeline,
                        no
                        dilution.
                    </p>


                    <ButtonComponent version="cta">Book</ButtonComponent>

                </div>
            </div>
        </div>
    )
}

const ReviewSection = () => {
    return (
        <div className={`colorScheme2 ${styles.paddedContainer}`}>
            <div className={`${styles.columnFlexContainer} ${styles.xxlContainer} `}>

                <TitleContainerLayout colorScheme={`colorScheme2`} headingText={"Real Results"}
                                      descriptionText={"Founders who mooved fast and shipped"}/>

                <div className={styles.rowFlexContainer}>
                    {realResultsSectionProps.map((item, i) => {
                        return <ReviewCardLayout key={i} review={item.review} occupation={item.occupation}
                                                 companyName={item.companyName} avatarUrl={item.avatarUrl}
                                                 reviewerName={item.reviewerName}/>
                    })}
                </div>
            </div>
        </div>
    )
}

const StatsSection = () => {
    return (
        <div className={`${styles.paddedContainer} colorScheme1`}>

            <div className={`${styles.columnFlexContainer} ${styles.xxlContainer}`}>


                <div className={`${styles.statsTitleContainer}`}>

                    <div className={`${styles.statTitleSubContainer}`}>
                        <p className={`boldS`}>Proven</p>

                        <p className={`heading3`}>The proof is in the shipped products</p>
                    </div>

                    <div className={`${styles.statTitleSubContainer}`}>
                        <p className={`lightL`}>Numbers matter only when they mean something
                            real. Ours do. Over 90% Lighthouse
                            Performance Score. We
                            ship fast and we ship complete text</p>
                    </div>
                </div>

                <div className={styles.statsCardsContainer}>
                    <div className={styles.statsCard}>
                        <p className={styles.HerSection2BigText}>90%</p>

                        <p>Lighthouse Performance Score</p>
                    </div>

                    <div className={styles.statsCard}>
                        <p className={styles.HerSection2BigText}>4</p>

                        <p>Weeks To Launch</p>
                    </div>

                    <div className={styles.statsCard}>
                        <p className={styles.HerSection2BigText}>100%</p>

                        <p>Delivered as Promise</p>
                    </div>
                </div>
            </div>

        </div>
    )

}

const QuestionsSection = () => {
    return (
        <div className={`colorScheme1 ${styles.paddedContainer}`}>

            <div className={`${styles.columnFlexContainer} ${styles.xxlContainer}`}>

                <TitleContainerLayout colorScheme={`colorScheme1`} headingText={"Questions"}
                                      descriptionText={"We move fast. Here's what you need to know about working with us."}/>

                <AccordionPrimitive triggerIcon={accordionProps.triggerIcon}
                                    accordionItems={accordionProps.accordionItems}/>

                <div className={styles.questionSectionBottonContainer}>
                    <p className={"heading4"}> Let's talk it through</p>

                    <p className={`lightL`}>Book a call and ask us anything</p>

                    <ButtonComponent version="plain" className={`colorScheme1`}>Contact</ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            <HeroSection/>

            {/*<ReviewSection/>*/}

            <StatsSection/>

            <HeroSection1Layout taglineText={heroSectionProps.taglineText} headingText={heroSectionProps.headerText}
                                descriptionText={heroSectionProps.descriptionText}
                                colorScheme={heroSectionProps.colorScheme}
                                cardItems={heroSectionProps.cardItems}/>

            <QuestionsSection/>

            <BrandingLayout/>
        </>
    )
}


// TODO
// 1. Add back reviews section