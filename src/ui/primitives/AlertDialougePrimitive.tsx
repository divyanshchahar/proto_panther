import * as React from "react";
import {AlertDialog} from "radix-ui";
import styles from "./AlertDialougePrimitive.module.css"
import ButtonComponent from "@/ui/components/ButtonComponent";

export interface AlertDialogPrimitivePropTypes {
    isOpen: true | false,
    toggleDialog: () => void
    colorScheme: string,
    alertType: "success" | "danger"
    headingText: string,
    bodyText: string,
    cancelButtonText: string,
}

export default function AlertDialogPrimitive({
                                                 isOpen,
                                                 toggleDialog,
                                                 colorScheme,
                                                 alertType,
                                                 headingText,
                                                 bodyText,
                                                 cancelButtonText
                                             }: AlertDialogPrimitivePropTypes) {
    return (
        <AlertDialog.Root open={isOpen} onOpenChange={toggleDialog}>

            <AlertDialog.Portal>
                <AlertDialog.Overlay
                    className={`${styles.alertDialogOverlay} ${colorScheme} ${alertType === "success" && styles.success} ${alertType === "danger" && styles.danger}`}
                />

                <AlertDialog.Content className={`${styles.alertDialogContent} ${colorScheme}`}>

                    <AlertDialog.Title className={`${styles.alertDialogTitle} heading6`}>
                        {headingText}
                    </AlertDialog.Title>

                    <AlertDialog.Description className={styles.alertDialogDescription}>
                        {bodyText}
                    </AlertDialog.Description>

                    <AlertDialog.Cancel className={`${styles.alertDialogCancel}`} asChild>
                        <ButtonComponent version={alertType} className={`colorScheme1`} clickHandler={toggleDialog}>{cancelButtonText}</ButtonComponent>
                    </AlertDialog.Cancel>

                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}