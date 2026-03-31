import ButtonComponent from "../components/ButtonComponent";
import styles from "./BrandingLayout.module.css"

export default function BrandingLayout() {
    return (
        <div className={`${styles.container} colorSchemeBranding`}>
            <div className={styles.innerContainer}>
                <div className={styles.textContainer}>
                    <p className={`heading3`}>Start building today</p>

                    <p className={`regularN`}>Talk to us about your idea and see what fast execution looks like</p>
                </div>

                <div className={styles.buttonContainer}>
                    <ButtonComponent version="cta">Book a Call</ButtonComponent>
                </div>
            </div>
        </div>
    )
}