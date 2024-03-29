export const formSelectorService = {
    services: ["WEDDING", "BAPTISM / BABY NAMING", "MEMORIAL", "MASTER CLASS"]
}

const listOfSelectors = {
    genderType: ["Male", "Female"],
    ceremonyType:{
        wedding:["Ceremony Wedding Type 1","Ceremony Wedding Type 2","Ceremony Wedding Type 3"],
        baptism:["Ceremony Baptism Type 1","Ceremony Baptism Type 2","Ceremony Baptism Type 3"],
        memorial:["Ceremony Memorial Type 1","Ceremony Memorial Type 2","Ceremony Memorial Type 3"],
        masterclass:["Ceremony Masterclass Type 1","Ceremony Masterclass Type 2","Ceremony Masterclass Type 3"],
    },
    packagesType:{
        wedding:["Package Wedding Type 1","Package Wedding Type 2","Package Wedding Type 3"],
        baptism:["Package Baptism Type 1","Package Baptism Type 2","Package Baptism Type 3"],
        memorial:["Package Memorial Type 1","Package Memorial Type 2","Package Memorial Type 3"],
        masterclass:["Package Masterclass Type 1","Package Masterclass Type 2","Package Masterclass Type 3"],
    },
}

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
            helperText: "this is help text name client",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            helperText: "this is help text",
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
            isRequired: true,
            type: "number",
            error: false,
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: true,
            selectorList: listOfSelectors.ceremonyType.wedding
        },
        {
            id: "packages",
            name: "packages",
            label: "Package",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: true,
            selectorList: listOfSelectors.packagesType.wedding
        },
    ],

    baptism: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: true,
            selectorList: listOfSelectors.ceremonyType.baptism
        },
        {
            id: "packages",
            name: "packages",
            label: "Package",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: true,
            selectorList: listOfSelectors.packagesType.baptism
        },
    ],

    memorial: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: true,
            selectorList: listOfSelectors.ceremonyType.memorial
        },
        {
            id: "packages",
            name: "packages",
            label: "Package",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: true,
            selectorList: listOfSelectors.packagesType.memorial
        },
    ],

    master_class: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
            isSelectorList: true,
            selectorList: listOfSelectors.ceremonyType.masterclass
        },
        {
            id: "packages",
            name: "packages",
            label: "Package",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
    ],

    baptism: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
    ],

    memorial: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
    ],

    master_class: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: true,
            type: "text",
            error: false,
            helperText: "this is help text",
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
            helperText: "this is help text",
            isSelectorList: false,
            selectorList: []
        },
    ]

}

export const initialMessageDataForm = {
    message_box: {
        id: "message",
        name: "message",
        label: "Message",
        isRequired: true,
        minRows: 5,
        maxRows: 10,
        type: "text",
        error: false,
        helperText: "this is help text",
        isSelectorList: false,
        selectorList: []
    }
}