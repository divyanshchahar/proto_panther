import Image from "next/image";

import styles from "./ReviewCardLayout.module.css"

export interface ReviewCardLayoutPropsTypes {
    review: string,
    reviewerName: string,
    occupation: string,
    companyName: string,
    avatarUrl: string,
}

export default function ReviewCardLayout({
                                             review,
                                             reviewerName,
                                             occupation,
                                             companyName,
                                             avatarUrl
                                         }: ReviewCardLayoutPropsTypes) {
    return (
        <div className={styles.container}>
            <p className={`${styles.review} boldN`}>{review}</p>

            <Image src={avatarUrl} height={56} width={56} className={styles.avatar} alt="user avatar"/>

            <div>
                <p className={`boldN`}>{reviewerName}</p>

                <p>{`${occupation}, ${companyName}`}</p>
            </div>

        </div>
    )
}