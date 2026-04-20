import {ReactNode} from "react";
import styles from "./ButtonComponent.module.css"


interface ButtonComponentProps {
    children: ReactNode;
    className?: string;
    version: "cta" | "plain"
    clickHandler: () => void
    isDisabled?: true | false
}

export default function ButtonComponent({
                                            children,
                                            className,
                                            version,
                                            clickHandler,
                                            isDisabled = false,
                                        }: ButtonComponentProps): ReactNode {
    switch (version) {
        case "cta":
            return (
                <button disabled={isDisabled} className={`${className} ${styles.basic} ${styles.cta} regularN`}
                        onClick={
                            clickHandler
                        }> {children} </button>
            )
        case "plain":
            return (
                <button disabled={isDisabled}
                        className={`${className} ${styles.basic} ${styles.plain} boldN`}
                        onClick={clickHandler}> {children} </button>
            )
    }
}