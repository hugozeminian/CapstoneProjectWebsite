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
        wedding: ["Spiritual", "Non Spiritual"],
        baptism: ["Spiritual", "Non Spiritual"],
        memorial: ["Spiritual", "Non Spiritual"],
        masterclass: ["Spiritual", "Non Spiritual"],
    },
    packagesType: {
        wedding: [],
        baptism: [],
        memorial: [],
        masterclass: [],
    },
}

async function fetchDataAndUpdatePackages() {
    const cardInfoApi = await fetchGeneralCards();
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
}

// Call the async function
fetchDataAndUpdatePackages()
    .then(() => {
        // console.log('Data fetched and packages updated successfully.');
    })
    .catch(error => {
        console.error('Error fetching data or updating packages in FormContent.js:', error);
    });
//--------------------------------end----------------------------------------------
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
            id: "client_first_name_wedding",
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
            id: "client_last_name_wedding",
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
            id: "client_gender_wedding",
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
            id: "client_email_wedding",
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
            id: "client_confirm_email_wedding",
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
            id: "client_cellphone_wedding",
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
            id: "celebrant_first_name_wedding",
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
            id: "celebrant_last_name_wedding",
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
            id: "celebrant_gender_wedding",
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
            id: "celebrant_email_wedding",
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
            id: "celebrant_confirm_email_wedding",
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
            id: "celebrant_cellphone_wedding",
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
            id: "client_first_name_baptism",
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
            id: "client_last_name_baptism",
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
            id: "client_gender_baptism",
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
            id: "client_email_baptism",
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
            id: "client_confirm_email_baptism",
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
            id: "client_cellphone_baptism",
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
            id: "celebrant_first_name_baptism",
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
            id: "celebrant_last_name_baptism",
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
            id: "celebrant_gender_baptism",
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
            id: "client_first_name_memorial",
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
            id: "client_last_name_memorial",
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
            id: "client_gender_memorial",
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
            id: "client_email_memorial",
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
            id: "client_confirm_email_memorial",
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
            id: "client_cellphone_memorial",
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
            id: "celebrant_first_name_memorial",
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
            id: "celebrant_last_name_memorial",
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
            id: "celebrant_gender_memorial",
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
            id: "client_first_name_master",
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
            id: "client_last_name_master",
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
            id: "client_gender_master",
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
            id: "client_email_master",
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
            id: "client_confirm_email_master",
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
            id: "client_cellphone_master",
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
            id: "number_of_guests_wedding",
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
            id: "language_wedding",
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
            id: "ceremony_type_wedding",
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
            id: "packages_wedding",
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
            id: "number_of_guests_baptism",
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
            id: "language_baptism",
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
            id: "ceremony_type_baptism",
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
            id: "packages_baptism",
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
            id: "number_of_guests_memorial",
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
            id: "language_memorial",
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
            id: "ceremony_type_memorial",
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
            id: "packages_memorial",
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
            id: "number_of_guests_master_class",
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
            id: "language_master_class",
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
            id: "ceremony_type_master_class",
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
            id: "packages_master_class",
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
            id: "venue_name_wedding",
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
            id: "street_address_wedding",
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
            id: "city_wedding",
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
            id: "province_wedding",
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
            id: "venue_name_baptism",
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
            id: "street_address_baptism",
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
            id: "city_baptism",
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
            id: "province_baptism",
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
            id: "venue_name_memorial",
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
            id: "street_address_memorial",
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
            id: "city_memorial",
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
            id: "province_memorial",
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
            id: "venue_name_master_class",
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
            id: "city_master_class",
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
            id: "street_address_master_class",
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
            id: "province_master_class",
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
        id: "message_message_box",
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

// ** UNCOMMENT TO TEST IF THE IDs ARE UNIQUE **
// const forms = [
//     ...Object.values(initialWeddingDataForm),
//     ...Object.values(initialBaptismDataForm),
//     ...Object.values(initialMemorialDataForm),
//     ...Object.values(initialMasterClassDataForm),
//     ...Object.values(initialCeremonyDetailDataForm),
//     ...Object.values(initialCeremonyVenueDataForm),
//     Object.values(initialMessageDataForm),
// ];

// const allIds = forms.reduce((acc, form) => {
//     if (Array.isArray(form)) {
//         form.forEach(field => {
//             acc.push(field.id);
//         });
//     } else {
//         acc.push(form.id);
//     }
//     return acc;
// }, []);

// const hasDuplicates = new Set(allIds).size !== allIds.length;

// if (hasDuplicates) {
//     console.log('Some IDs are not unique.');
// } else {
//     console.log('All IDs are unique.');
// }
