{/*
 These utility functions are used for various tasks such as determining if the device is mobile, calculating the height difference between the viewport and the content area, extracting video keys from YouTube links, and managing access tokens in local storage.
*/}
import { useMediaQuery } from "@mui/material";
import { useNavbarHeight } from "../context/NavBarHeightContext";
import { useFooterHeight } from "../context/FooterHeightContext";
import ReachOutIconsList from "../repository/ReachOutIconsList";

// Function to determine if the device is mobile based on the MUI theme breakpoints
export const IsMobile = () => {
    return useMediaQuery((theme) => theme.breakpoints.down("sm"));
}

// Function to calculate the height difference between the viewport and the content area
export const CalcDifViewHeigh = () => {
    const { navbarHeight } = useNavbarHeight();
    const { footerHeight } = useFooterHeight();

    return navbarHeight + footerHeight + 24;
}

// Function to extract video key from YouTube link
export const extractVideoKey = (videoLink) => {
    // Regular expression to match YouTube video links
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    const match = videoLink.match(regex);
    // Return the extracted video key if a match is found, otherwise return null
    return match ? match[1] : null;
};

// Function to formatting date string
export const formatDate = (dateString) => {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Get the components of the date
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    // Return the formatted date string
    return `${month}/${day}/${year}`;
};

// Function to get date or time
export const getCurrentDateTime = (choice) => {
    const now = new Date();

    if (choice === 'date') {
        // Return current date in mm/dd/yyyy format
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();
        return `${month}/${day}/${year}`;
    } else if (choice === 'time') {
        // Return current time in hh:mm AM/PM format with AM/PM in uppercase
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, hourCycle: 'h12' }).toUpperCase();
    } else {
        // Handle invalid choice
        return 'Invalid choice';
    }
}

export const formattedDateAndTimeToAPI = () => {
    // "date_info": null, // AAAA/MM/DD
    // "time_info": null, // HH:MM 24h
}

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to get the label or name based on the item's title
// export const getLabelOrNameOfObjItem = (item, element, type) => {
//     const objElement = Object.keys(item).find((key) => item[key] === item[element]);
//     return type === 'label' ? capitalizeFirstLetter(objElement) : objElement;
// };

export const getLabelOrNameOfObjItem = (item, element, type) => {
    let objElement = Object.keys(item).find((key) => item[key] === item[element]);
    objElement = (objElement !== undefined) ? objElement : element;
    return type === 'label' ? capitalizeFirstLetter(element) : element;
};


// Function to make a hard copy of object without pass by reference
export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// Function to check if is array
export const ensureArray = (value) => Array.isArray(value) ? value : [];

// Function to find the icon with the matching name
export const getIconByName = (name) => {
    const matchedImage = ReachOutIconsList.find((icon) => icon.name === name);
    return matchedImage ? matchedImage.url : null;
};