"use client"

import ButtonComponent from "../components/ButtonComponent";
import styles from "./BrandingLayout.module.css"
import {useRouter} from "next/navigation";
import navUrls from "@/consts/navigation";

export default function BrandingLayout() {
    const router = useRouter()
    return (
        <div className={`${styles.container} colorScheme5`}>
            <div className={styles.innerContainer}>
                <div className={styles.textContainer}>
                    <p className={`heading3`}>Start building today</p>

                    <p className={`regularN`}>Talk to us about your idea and see what fast execution looks like</p>
                </div>

                <div className={styles.buttonContainer}>
                    <ButtonComponent version="cta"
                                     clickHandler={() => {
                                         router.push(navUrls.external.landingDiscoveryCall)
                                     }}>Book a
                        Call</ButtonComponent>
                </div>
            </div>
        </div>
    )
}