import { fetchGeneralCards } from "../api/api";

export const helperTextField = "Check this field"
export const helperTextField_phone = "Check this field / Only numbers / 10 digits"
export const helperTextField_email = "Check this field / Are they equal? / Example: email@email.co"

export const formSelectorService = {
    services: ["WEDDING", "BAPTISM / BABY NAMING", "MEMORIAL", "MASTER CLASS"]
}

const listOfSelectors = {
    genderType: ["Male", "Female", "Other"],
    provinceSelectorList: [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Nova Scotia",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Northwest Territories",
        "Nunavut",
        "Yukon"
    ],
    ceremonyType: {
        wedding: ["Ceremony Wedding Type 1", "Ceremony Wedding Type 2", "Ceremony Wedding Type 3"],
        baptism: ["Ceremony Baptism Type 1", "Ceremony Baptism Type 2", "Ceremony Baptism Type 3"],
        memorial: ["Ceremony Memorial Type 1", "Ceremony Memorial Type 2", "Ceremony Memorial Type 3"],
        masterclass: ["Ceremony Masterclass Type 1", "Ceremony Masterclass Type 2", "Ceremony Masterclass Type 3"],
    },
    packagesType: {
        wedding: [],
        baptism: [],
        memorial: [],
        masterclass: [],
    },
}

const cardInfoApi = await fetchGeneralCards()

// Function to update the packagesType object with titles
const updatePackagesType = (data, selectors) => {
    data.forEach(obj => {
        Object.keys(selectors.packagesType).forEach(key => {
            if (obj.reference.includes(key)) {
                selectors.packagesType[key].push(obj.title);
            }
        });
    });
};

// Call the function to update the packagesType object
updatePackagesType(cardInfoApi.section2_cards, listOfSelectors);


export const ceremonyServices = {
    wedding: "wedding",
    baptism: "baptism",
    memorial: "memorial",
    master_class: "master_class",
};

export const formGeneralTypography = {
    form_title: "Contact Information",
    wedding: {
        client: "Your details",
        celebrant: "Partner details"
    },
    baptism: {
        client: "Your details",
        celebrant: "In commemoration of"
    },
    memorial: {
        client: "Your details",
        celebrant: "In celebration of"
    },
    master_class: {
        client: "Your details",
    },
    ceremony_details: "Ceremony Details",
    ceremony_venue: "Ceremony Venue"
}


export const initialWeddingDataForm = {
    client: [
        {
            id: "client_first_name",
            name: "client_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.genderType
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: [],
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "tel",
            error: false,
            helperText: helperTextField_phone,
            isSelectorList: false,
            selectorList: []
        },
    ],

    celebrant: [
        {
            id: "celebrant_first_name",
            name: "celebrant_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_last_name",
            name: "celebrant_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.genderType
        },
        {
            id: "celebrant_email",
            name: "celebrant_email",
            label: "Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_confirm_email",
            name: "celebrant_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_cellphone",
            name: "celebrant_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "tel",
            error: false,
            helperText: helperTextField_phone,
            isSelectorList: false,
            selectorList: []
        },
    ],
}

export const initialBaptismDataForm = {
    client: [
        {
            id: "client_first_name",
            name: "client_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.genderType
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "tel",
            error: false,
            helperText: helperTextField_phone,
            isSelectorList: false,
            selectorList: []
        },
    ],

    celebrant: [
        {
            id: "celebrant_first_name",
            name: "celebrant_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_last_name",
            name: "celebrant_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.genderType
        },
    ],
}

export const initialMemorialDataForm = {
    client: [
        {
            id: "client_first_name",
            name: "client_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: ["Male", "Female"]
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "tel",
            error: false,
            helperText: helperTextField_phone,
            isSelectorList: false,
            selectorList: []
        },
    ],

    celebrant: [
        {
            id: "celebrant_first_name",
            name: "celebrant_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_last_name",
            name: "celebrant_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.genderType
        },
    ],
}

export const initialMasterClassDataForm = {
    client: [
        {
            id: "client_first_name",
            name: "client_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.genderType
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "email",
            error: false,
            helperText: helperTextField_email,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "tel",
            error: false,
            helperText: helperTextField_phone,
            isSelectorList: false,
            selectorList: []
        },
    ],

}

export const initialCeremonyDetailDataForm = {
    wedding: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: false,
            type: "number",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.ceremonyType.wedding
        },
        {
            id: "packages",
            name: "packages",
            label: "Package",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.packagesType.wedding
        },
    ],

    baptism: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.ceremonyType.baptism
        },
        {
            id: "packages",
            name: "packages",
            label: "Package",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.packagesType.baptism
        },
    ],

    memorial: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.ceremonyType.memorial
        },
        {
            id: "packages",
            name: "packages",
            label: "Package",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.packagesType.memorial
        },
    ],

    master_class: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Master Class",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.ceremonyType.masterclass
        },
        {
            id: "packages",
            name: "packages",
            label: "Package",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.packagesType.masterclass
        },
    ],
}

export const initialCeremonyVenueDataForm = {
    wedding: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "city",
            name: "city",
            label: "City",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "province",
            name: "province",
            label: "Province",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.provinceSelectorList
        },
    ],

    baptism: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "city",
            name: "city",
            label: "City",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "province",
            name: "province",
            label: "Province",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.provinceSelectorList
        },
    ],

    memorial: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "city",
            name: "city",
            label: "City",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "province",
            name: "province",
            label: "Province",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.provinceSelectorList
        },
    ],

    master_class: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "city",
            name: "city",
            label: "City",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: false,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "province",
            name: "province",
            label: "Province",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
            isSelectorList: true,
            selectorList: listOfSelectors.provinceSelectorList
        },
    ]

}

export const initialMessageDataForm = {
    message_box: {
        id: "message",
        name: "message",
        label: "Message",
        isRequired: false,
        minRows: 5,
        maxRows: 10,
        type: "text",
        error: false,
        helperText: helperTextField,
        isSelectorList: false,
        selectorList: []
    }
}