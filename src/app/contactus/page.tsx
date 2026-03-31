import styles from "./page.module.css"
import ButtonComponent from "@/ui/components/ButtonComponent";
import EnvelopeIConComponent from "../../../public/icons/EnvelopeIConComponent";
import PhoneIconComponent from "../../../public/icons/PhoneIconComponent";


export default function Page() {
    return (
        <div className={`colorScheme4 ${styles.Container}`}>
            <div className={styles.TopContainer}>
                <div>
                    <p className={`boldS`}>Connect</p>

                    <div className={styles.TextSubContainer}>
                        <p className={"heading2"}>Let's Talk</p>

                        <p>Share your idea we will respond fast</p>
                    </div>
                </div>

                <div className={styles.ContactDetailsContainer}>
                    <div className={styles.ContactDetails}>
                        <EnvelopeIConComponent/>

                        <p>mail@leondevs.tech</p>
                    </div>

                    <div className={styles.ContactDetails}>
                        <PhoneIconComponent/>

                        <p>+91-9599698815</p>
                    </div>
                </div>
            </div>

            <div className={styles.BottomContainer}>
                <form>
                    <label className={`regularN`}>Name</label>
                    <br/>
                    <input type="text"/>
                    <br/>

                    <label className={`regularN`}>Email</label>
                    <br/>
                    <input type="email"/>
                    <br/>

                    <label className={`regularN`}>Message</label>
                    <br/>
                    <textarea/>
                    <br/>

                    <ButtonComponent version="cta">Schedule</ButtonComponent>


                </form>
            </div>
        </div>
    )
}