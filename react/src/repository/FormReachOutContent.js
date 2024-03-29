export const initialContactForm = {
    customer: [
        {
            id: "customer_first_name",
            name: "customer_first_name",
            label: "First Name",
            isRequired: true
        },
        {
            id: "customer_last_name",
            name: "customer_last_name",
            label: "Last Name",
            isRequired: true
        },
        {
            id: "customer_email",
            name: "customer_email",
            label: "Email",
            isRequired: true
        },
        {
            id: "customer_confirm_email",
            name: "customer_confirm_email",
            label: "Confirm Email",
            isRequired: true
        },
        {
            id: "customer_cellphone",
            name: "customer_cellphone",
            label: "Cellphone",
            isRequired: true
        },
        {
            id: "customer_city",
            name: "customer_city",
            label: "City",
            isRequired: true
        },
    ]
}
export const initialMessageReachOutForm = {
    message_reachOutBox: {
        id: "message",
        name: "message",
        label: "Message",
        isRequired: true,
        minRows: 5,
        maxRows: 10,
    }
}