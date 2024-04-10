import { helperTextField } from "./FormContent"

export const initialContactFormReachOut = {
    client: [
        {
            id: "client_first_name",
            name: "client_first_name",
            label: "First Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
        },
        {
            id: "client_last_name",
            name: "client_last_name",
            label: "Last Name",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
        },
        {
            id: "client_email",
            name: "client_email",
            label: "Email",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
        },
        {
            id: "client_confirm_email",
            name: "client_confirm_email",
            label: "Confirm Email",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
        },
        {
            id: "client_cellphone",
            name: "client_cellphone",
            label: "Cellphone",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
        },
        {
            id: "client_city",
            name: "client_city",
            label: "City",
            isRequired: true,
            type: "text",
            error: false,
            helperText: helperTextField,
        },
    ]
}
export const initialMessageReachOutForm = {
    message_box: {
        id: "message",
        name: "message",
        label: "Message",
        isRequired: true,
        minRows: 5,
        maxRows: 10,
        type: "text",
        error: false,
        helperText: helperTextField,
        isSelectorList: false,
        selectorList: []
    }
}