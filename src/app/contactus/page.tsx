"use client"

import styles from "./page.module.css"
import ButtonComponent from "@/ui/components/ButtonComponent";
import EnvelopeIConComponent from "../../../public/icons/EnvelopeIConComponent";
import PhoneIconComponent from "../../../public/icons/PhoneIconComponent";
import {useRouter} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form"

const listOfCountries = ["Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Channel Islands",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Democratic Republic of Congo",
    "Republic of Congo",
    "Costa Rica",
    "Republic of Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Arab Republic of Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong Special Administrative Region of the People's Republic of China ",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Islamic Republic of Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Democratic Republic of Korea",
    "Republic of Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyz Republic",
    "Lao PDR",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao Special Administrative Region of the People's Republic of China",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Federal State of Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico (US)",
    "Qatatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovak Republic",
    "Slovenia",
    "Solomon Islands",
    "Federal Republic of Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St.Kitts and Nevis",
    "St.Lucia",
    "St.Martin(French part)",
    "St.Vincent and the Grenadines",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkiye",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Bolivian Republic of Venezuella",
    "VietNam",
    "Virgin Islands (U.S.)",
    "West Bank and Gaza",
    "Republic of Yemen",
    "Zambia",
    "Zimbabwe"
]

interface formInputsTypes {
    fullName: string,
    email: string,
    country: string,
    phoneNumber: string,
    service: string,
}


export default function Page() {
    const router = useRouter();


    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<formInputsTypes>()

    const onSubmit: SubmitHandler<formInputsTypes> = (data) => console.log(data)

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className={`regularN`}>Full Name *</label>

                    <input type="text"{...register("fullName", {required: "Please enter Full Name"})} />

                    <p className={`normalS`}>{errors.fullName?.message}</p>


                    <label className={`regularN`}>Email</label>

                    <input type="email" {...register("email")} />


                    <label className={`regularN`}>Country *</label>

                    <select defaultValue={"India"} {...register("country")} >
                        {
                            listOfCountries.map((country) => {
                                return <option value={country} key={country}
                                >{country}</option>
                            })
                        }
                    </select>


                    <label className={`regularN`}>Phone Number *</label>

                    <input type="tel" {...register("phoneNumber", {required: "Please enter a phone number"})} />

                    <p className={`normalS`}>{errors.phoneNumber?.message}</p>


                    <label className={`regularN`}>What do you need ?*</label>

                    <select
                        defaultValue={"Landing Page"} {...register("service", {required: "Please select a service"})} >
                        <option value="Landing Page">Landing Page</option>

                        <option value="Website">Website</option>

                        <option value="MVP">MVP</option>
                    </select>

                    <p className={`normalS`}>{errors.service?.message}</p>

                    <br/>


                    <ButtonComponent version="plain" clickHandler={() => {
                        // router.push(navUrls.external.landingDiscoveryCall)
                        handleSubmit(onSubmit);
                    }}>Schedule</ButtonComponent>

                </form>
            </div>
        </div>
    )
}

// TODO
// Improve International dialing code selection