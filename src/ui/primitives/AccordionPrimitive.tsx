import {ReactNode} from "react";
import {Accordion} from "radix-ui";
import styles from "./AccordionPrimitive.module.css"

export interface AccordionItemPropTypes {
    headerText: string,
    descriptionText: string,
}

export interface AccordionPrimitivePropTypes {
    triggerIcon: ReactNode
    accordionItems: AccordionItemPropTypes[];
}

export default function AccordionPrimitive(
    {triggerIcon, accordionItems}: AccordionPrimitivePropTypes
): ReactNode {
    return (
        <Accordion.Root type="multiple" className={`${styles.accordionRoot} colorScheme1`}>

            {
                accordionItems.map((accordionItem, i) => {
                    return (
                        <Accordion.Item key={i} value={`item-${i}`} className={`${styles.accordionItem} boldN`}>

                            <Accordion.Header className={styles.accordionHeader}>
                                <Accordion.Trigger className={`${styles.accordionTrigger} boldN`}>
                                    <>
                                        {accordionItem.headerText}
                                        {triggerIcon}
                                    </>
                                </Accordion.Trigger>
                            </Accordion.Header>

                            <Accordion.Content className={styles.accordionContent}>
                                <div>
                                    {accordionItem.descriptionText}
                                </div>
                            </Accordion.Content>

                        </Accordion.Item>
                    )
                })
            }
        </Accordion.Root>
    )
}

