export const formSelectorService = {
    services: ["WEDDING", "BAPTISM / BABY NAMING", "MEMORIAL", "MASTER CLASS"]
}

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
            isRequired: false,
            type: "text",
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: false,
            type: "text",
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: false,
            type: "email",
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: false,
            type: "email",
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: false,
            type: "tel",
        },
    ],

    celebrant: [
        {
            id: "celebrant_first_name",
            name: "celebrant_first_name",
            label: "First Name",
            isRequired: false,
            type: "text",
        },
        {
            id: "celebrant_last_name",
            name: "celebrant_last_name",
            label: "Last Name",
            isRequired: false,
            type: "text",
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: false,
            type: "text",
        },
        {
            id: "celebrant_email",
            name: "celebrant_email",
            label: "Email",
            isRequired: false,
            type: "email",
        },
        {
            id: "celebrant_confirm_email",
            name: "celebrant_confirm_email",
            label: "Confirm Email",
            isRequired: false,
            type: "email",
        },
        {
            id: "celebrant_cellphone",
            name: "celebrant_cellphone",
            label: "Cellphone",
            isRequired: false,
            type: "tel",
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
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: true,
            type: "email",
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "email",
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "tel",
        },
    ],

    celebrant: [
        {
            id: "celebrant_first_name",
            name: "celebrant_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "celebrant_last_name",
            name: "celebrant_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
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
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: true,
            type: "email",
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "email",
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "tel",
        },
    ],

    celebrant: [
        {
            id: "celebrant_first_name",
            name: "celebrant_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "celebrant_last_name",
            name: "celebrant_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "celebrant_gender",
            name: "celebrant_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
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
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "client_gender",
            name: "client_gender",
            label: "Gender",
            isRequired: true,
            type: "text",
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: true,
            type: "email",
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "email",
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "tel",
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
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: false,
            type: "text",
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: false,
            type: "text",
        },
        {
            id: "packages",
            name: "packages",
            label: "Packages",
            isRequired: false,
            type: "text",
        },
    ],

    baptism: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: true,
            type: "text",
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: true,
            type: "text",
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: true,
            type: "text",
        },
        {
            id: "packages",
            name: "packages",
            label: "Packages",
            isRequired: true,
            type: "text",
        },
    ],

    memorial: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: true,
            type: "text",
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: true,
            type: "text",
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: true,
            type: "text",
        },
        {
            id: "packages",
            name: "packages",
            label: "Packages",
            isRequired: true,
            type: "text",
        },
    ],

    master_class: [
        {
            id: "number_of_guests",
            name: "number_of_guests",
            label: "Number of Guests",
            isRequired: true,
            type: "text",
        },
        {
            id: "language",
            name: "language",
            label: "Language",
            isRequired: true,
            type: "text",
        },
        {
            id: "ceremony_type",
            name: "ceremony_type",
            label: "Type of Ceremony",
            isRequired: true,
            type: "text",
        },
        {
            id: "packages",
            name: "packages",
            label: "Packages",
            isRequired: true,
            type: "text",
        },
    ],
}

export const ceremonyServices = {
    wedding: "wedding",
    baptism: "baptism",
    memorial: "memorial",
    master_class: "master_class",
};

export const initialCeremonyVenueDataForm = {
    wedding: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: false,
            type: "text",
        },
        {
            id: "city",
            name: "city",
            label: "City",
            isRequired: false,
            type: "text",
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: false,
            type: "text",
        },
        {
            id: "province",
            name: "province",
            label: "Province",
            isRequired: false,
            type: "text",
        },
    ],

    baptism: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "city",
            name: "city",
            label: "City",
            isRequired: true,
            type: "text",
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: true,
            type: "text",
        },
        {
            id: "province",
            name: "province",
            label: "Province",
            isRequired: true,
            type: "text",
        },
    ],

    memorial: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "city",
            name: "city",
            label: "City",
            isRequired: true,
            type: "text",
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: true,
            type: "text",
        },
        {
            id: "province",
            name: "province",
            label: "Province",
            isRequired: true,
            type: "text",
        },
    ],

    master_class: [
        {
            id: "venue_name",
            name: "venue_name",
            label: "Venue Name",
            isRequired: true,
            type: "text",
        },
        {
            id: "city",
            name: "city",
            label: "City",
            isRequired: true,
            type: "text",
        },
        {
            id: "street_address",
            name: "street_address",
            label: "Street Address",
            isRequired: true,
            type: "text",
        },
        {
            id: "province",
            name: "province",
            label: "Province",
            isRequired: true,
            type: "text",
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
    }
}