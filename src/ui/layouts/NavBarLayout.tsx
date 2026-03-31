"use client"

import "../../../../apps/global.css"
import Link from 'next/link'

import styles from "./NavBarLayout.module.css"
import ButtonComponent from "../components/ButtonComponent";
import {ReactNode} from "react";
import HamburgerMenuIconComponent from "web/public/icons/HamburgerMenuIconComponent";
import {Menubar} from "radix-ui";
import {useRouter} from "next/navigation";
import ProtoPantherLogo from "web/public/icons/ProtoPantherLogo";

export type LinkContainerPropTypes = {
    links: {
        linkText: string,
        linkAddress: string
    }[]
}


const NavigationLinks = [{
    linkText: "Home",
    linkAddress: "/"
}, {
    linkText: "About",
    linkAddress: "/aboutus"
}, {
    linkText: "Services",
    linkAddress: "/services"
}, {
    linkText: "Contact Us",
    linkAddress: "/contactus"
}]

function LinkContainer({links}: LinkContainerPropTypes): ReactNode {
    return <>
        {
            links.map(
                (link, i) => {
                    return <Link key={i} href={link.linkAddress}>{link.linkText}</Link>
                })
        }
    </>
}

function NavigationMenu() {
    const router = useRouter()

    return (
        <Menubar.Root className={`${styles.MenubarRoot} colorScheme4`}>
            <Menubar.Menu>
                <Menubar.Trigger>
                    <HamburgerMenuIconComponent styling={styles.icons}/>
                </Menubar.Trigger>

                <Menubar.Portal>
                    <Menubar.Content className={`${styles.MenubarContent} colorScheme4`} alignOffset={-24} side={"top"}
                                     sideOffset={25}>
                        {NavigationLinks.map((menuItem, i) => {
                            return (
                                <Menubar.Item key={i} className={styles.MenubarItem}
                                              onSelect={() => router.push(menuItem.linkAddress)}>
                                    {menuItem.linkText}
                                </Menubar.Item>
                            )
                        })}
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>
        </Menubar.Root>
    )
}

export default function NavBarLayout() {

    return (
        <div className={`${styles.container} colorScheme4`}>

            <ProtoPantherLogo styling={styles.brand}/>

            <div>
                <NavigationMenu/>
            </div>

            <div className={styles.linkContainer}>
                <LinkContainer links={NavigationLinks}/>
            </div>

            <ButtonComponent version="cta">Book a Call</ButtonComponent>
        </div>
    )
}