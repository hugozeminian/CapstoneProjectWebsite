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

    // Returns the sum of the navbar height, footer height, and 24 pixels
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

// Function to check if formatted date is greater than or equal to today's date (MM/DD/YYYY)
export const isDateGreaterThanOrEqualToToday = (formattedDate) => {
    const dateParts = formattedDate.split('/');
    const month = parseInt(dateParts[0], 10);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);

    // Check if any part of the date is NaN or invalid
    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        return false;
    }

    // Create Date object for the formatted date
    const formattedDateObject = new Date(year, month - 1, day); // Month is zero-based

    // Get today's date
    const today = new Date();

    // Compare dates
    return formattedDateObject >= today;
}

// Function to formatting date string MM/DD/YYYY
export const formatDate = (dateString) => {
    // Parse the date string into a Date object (using UTC time)
    const date = new Date(Date.UTC(
        parseInt(dateString.substring(0, 4)), // Year
        parseInt(dateString.substring(5, 7)) - 1, // Month (subtract 1 since months are zero-based)
        parseInt(dateString.substring(8, 10)), // Day
        0, 0, 0 // Hours, Minutes, Seconds (set to 0 for UTC time)
    ));

    // Get the components of the date
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, "0");
    const year = date.getUTCFullYear();

    // Return the formatted date string
    return `${month}/${day}/${year}`;
};


/**
 * Converts a time string from "HH:MM:SS" format to "h:mm A" format.
 * @param {string} timeString - The time string to format (e.g., "10:00:00").
 * @returns {string} The formatted time string (e.g., "10:00 AM").
 */
export const formatTime = (timeString) => {
    // Splitting the time string into hours, minutes, and seconds
    const [hours, minutes] = timeString.split(':');

    // Creating a Date object and setting the time components
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));

    // Formatting the time using toLocaleTimeString with 'en-US' locale
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    return formattedTime;
}

// Function to get current date or time
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

// Function to convert formatted date to API format
export const formattedDateToAPI = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};


// Function to convert formatted time to API format
export const formattedTimeToAPI = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};


// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to get label or name of an object item
export const getLabelOrNameOfObjItem = (item, element, type) => {
    let objElement = Object.keys(item).find((key) => item[key] === item[element]);
    objElement = (objElement !== undefined) ? objElement : element;
    return type === 'label' ? capitalizeFirstLetter(element) : element;
};

// Function to make a hard copy of an object without pass by reference
export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// Function to ensure the value is an array
export const ensureArray = (value) => Array.isArray(value) ? value : [];

// Function to find the icon with the matching name
export const getIconByName = (name) => {
    const matchedImage = ReachOutIconsList.find((icon) => icon.name === name);
    return matchedImage ? matchedImage.url : null;
};
