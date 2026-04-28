import FacebookIconComponent from "../../../public/icons/FacebookIconComponent";
import LinkedinIconComponent from "../../../public/icons/LinkedInIconComponent";
import XIconComponent from "../../../public/icons/XIConComponent";
import InstagramIconComponent from "../../../public/icons/InstagramIconComponent";
import YoutubeIconComponent from "../../../public/icons/YoutubeIconComponent";
import navUrls from "@/consts/navigation";

import styles from "./FooterLayout.module.css"
import Link from "next/link";
import {ReactNode} from "react";

type TextLinksType = { linkText: string, linkAddress: string }[]
type IconLinksType = { linkImage: ReactNode, linkText: string, linkAddress: string }[]

const TextLinks1 = [
    {
        linkText: "Landing Page",
        linkAddress: "services#landing page",
    },
    {
        linkText: "Protrotypes",
        linkAddress: "services#prototype",
    },
    {
        linkText: "MVP Development",
        linkAddress: "services#MVP",
    },
    // {
    //     linkText: "Discovery Call",
    //     linkAddress: "/"
    // },
    // {
    //     linkText: "Pricing",
    //     linkAddress: "/"
    // }
]

const TextLinks2 = [
    {
        linkText: "About Us",
        linkAddress: "aboutus",
    },
    {
        linkText: "Contact Us",
        linkAddress: "contactus",
    },
//     {
//         linkText: "Work with Us",
//         linkAddress: "/",
//     },
//     {
//         linkText: "Resources",
//         linkAddress: "/"
//     },
]

const ImageLinks = [
    {
        linkImage: <FacebookIconComponent styling={styles.imageLink}/>,
        linkText: "Facebook",
        linkAddress: navUrls.external.facebookPage,
    },
    {
        linkImage: <InstagramIconComponent styling={styles.imageLink}/>,
        linkText: "Instagram",
        linkAddress: "/",
    },
    {
        linkImage: <XIconComponent styling={styles.imageLink}/>,
        linkText: "X",
        linkAddress: "/",
    },
    {
        linkImage: <LinkedinIconComponent styling={styles.imageLink}/>,
        linkText: "LinkedIn",
        linkAddress: navUrls.external.linkedInPage,
    },
    {
        linkImage: <YoutubeIconComponent styling={styles.imageLink}/>,
        linkText: "Youtube",
        linkAddress: "/",
    }
]

function TextLinkContainer({categoryText, links}: { categoryText: string, links: TextLinksType }) {
    return (
        <div className={styles.categoryContainer}>
            <p className={`boldN`}>{categoryText}</p>

            <div className={styles.linkSubContainer}>
                {
                    links.map(
                        (
                            link, i) => {
                            return <Link key={i} href={link.linkAddress}>{link.linkText}</Link>
                        }
                    )
                }
            </div>
        </div>
    )
}

function ImageLinkContainer({categoryText, imageLinks}: { categoryText: string, imageLinks: IconLinksType }) {
    return (
        <div className={styles.categoryContainer}>

            <p className={`boldN`}>{categoryText}</p>
            {
                imageLinks.map((imageLink, i) => {
                        return (
                            <Link key={i} href={imageLink.linkAddress}>
                                <div className={styles.imageLinkContainer}>
                                    {imageLink.linkImage}
                                    <p>{imageLink.linkText}</p>
                                </div>
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}

export default function FooterLayout() {
    return (
        <div className={`${styles.container} regularN colorScheme4`}>
            <div className={styles.linksContainer}>
                <TextLinkContainer categoryText={"Services"} links={TextLinks1}/>
                <TextLinkContainer categoryText={"Company"} links={TextLinks2}/>
                <ImageLinkContainer categoryText={"Follow Us"} imageLinks={ImageLinks}/>
            </div>

        </div>
    )
}