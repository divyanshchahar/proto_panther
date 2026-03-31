import {ReactNode} from "react";
import styles from "./ButtonComponent.module.css"


interface ButtonComponentProps {
    children: ReactNode;
    className?: string;
    version: "cta" | "plain"
}

export default function ButtonComponent({children, className, version}: ButtonComponentProps): ReactNode {
    switch (version) {
        case "cta":
            return (
                <button className={`${className} ${styles.basic} ${styles.cta} regularN`}> {children} </button>
            )
        case "plain":
            return (
                <button className={`${className} ${styles.basic} ${styles.plain} boldN`}> {children} </button>
            )
    }
}