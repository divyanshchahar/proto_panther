"use client"

import styles from "./page.module.css"
import EnvelopeIConComponent from "../../../public/icons/EnvelopeIConComponent";
import PhoneIconComponent from "../../../public/icons/PhoneIconComponent";
import {SubmitHandler, useForm} from "react-hook-form"
import ButtonComponent from "@/ui/components/ButtonComponent";
import {useState} from "react";
import AlertDialogPrimitive, {AlertDialogPrimitivePropTypes} from "@/ui/primitives/AlertDialougePrimitive";


interface formInputsTypes {
    First_Name: string,
    Last_Name: string,
    Email: string,
    Phone: string,
    Service_Required: string,
}


export default function Page() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

    const toggleSucessDialoge = () => {
        setIsAlertDialogOpen(!isAlertDialogOpen);
    }

    const [alertDialogeProps, setAlertDialogeProps] = useState<AlertDialogPrimitivePropTypes>({
        isOpen: isAlertDialogOpen,
        alertType: "success",
        colorScheme: "colorScheme2",
        bodyText: "",
        cancelButtonText: "",
        headingText: "",
        toggleDialog: toggleSucessDialoge
    })


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<formInputsTypes>()

    const onSubmit: SubmitHandler<formInputsTypes> = async (data) => {
        try {
            setIsDisabled(true);

            const res = await fetch("/api/lead",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });

            if (res.status === 200) {

                setAlertDialogeProps({
                    ...alertDialogeProps,
                    alertType: "success",
                    bodyText: "We have recieved your message. Our customer sucess team will get back to you shortly",
                    headingText: "Query recieved",
                    cancelButtonText: "OK",
                })

                toggleSucessDialoge()
            } else {

                setAlertDialogeProps({
                    ...alertDialogeProps,
                    alertType: "danger",
                    bodyText: "We were unable to recieve your message. Please try again.",
                    headingText: "Unable to register your query",
                    cancelButtonText: "Try Again"
                })

                toggleSucessDialoge()
            }

            setIsDisabled(false);

        } catch (e) {
            console.log(e);
            setIsDisabled(false);

        }
    }

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

            <div className={`${styles.formContainer} colorScheme4 normalN`}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/*first name*/}
                    <label className={`lightS`}>First Name *</label>

                    <input type="text"{...register("First_Name", {required: "Please enter First Name"})}
                           className={`${errors.First_Name && "errorFocused"}`}
                    />

                    <p className={`${styles.error} boldS`}>{errors.First_Name?.message}</p>

                    {/*Last name*/}
                    <label className={`lightS`}>Last Name *</label>

                    <input type="text"{...register("Last_Name", {required: "Please enter Last Name"})}
                           className={`${errors.Last_Name && "errorFocused"}`}
                    />

                    <p className={`${styles.error} boldS`}>{errors.Last_Name?.message}</p>

                    {/*email*/}
                    <label className={`lightS`}>Email</label>

                    <input type="email" {...register("Email")} />

                    {/*phone number*/}
                    <label className={`lightS`}>Phone Number *</label>

                    <input type="tel" {...register("Phone", {required: "Please enter a phone number"})}
                           className={`${errors.Phone && "errorFocused"}`}/>

                    <p className={` ${styles.error} boldS`}>{errors.Phone?.message}</p>


                    {/*service required*/}
                    <label className={`lightS`}>What do you need ?*</label>

                    <select
                        defaultValue={"Landing Page"} {...register("Service_Required", {required: "Please select a service"})} >
                        <option value="Landing Page">Landing Page</option>

                        <option value="Website">Website</option>

                        <option value="MVP">MVP</option>
                    </select>

                    <p className={`${styles.error} boldS`}>{errors.Service_Required?.message}</p>

                    {/*submit button*/}
                    <ButtonComponent isDisabled={isDisabled} version="plain" clickHandler={() => {
                        handleSubmit(onSubmit);
                    }}>Schedule</ButtonComponent>

                </form>
            </div>

            <AlertDialogPrimitive isOpen={isAlertDialogOpen} alertType={alertDialogeProps.alertType}
                                  headingText={alertDialogeProps.headingText} toggleDialog={toggleSucessDialoge}
                                  cancelButtonText={alertDialogeProps.cancelButtonText}
                                  bodyText={alertDialogeProps.bodyText} colorScheme={alertDialogeProps.colorScheme}/>
        </div>
    )
}

// TODO
// Improve International dialing code selection