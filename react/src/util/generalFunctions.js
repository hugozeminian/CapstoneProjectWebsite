import { useMediaQuery } from "@mui/material";
import { useNavbarHeight } from "../context/NavBarHeightContext";
import { useFooterHeight } from "../context/FooterHeightContext";
import ReachOutIconsList from "../repository/ReachOutIconsList";

// Function to determine if the device is mobile based on the MUI theme breakpoints
/**
 * Determines if the device is mobile based on the MUI theme breakpoints.
 * @returns {boolean} Whether the device is mobile.
 */
export const IsMobile = () => {
    return useMediaQuery((theme) => theme.breakpoints.down("sm"));
}

// Function to calculate the height difference between the viewport and the content area
/**
 * Calculates the height difference between the viewport and the content area.
 * @returns {number} The height difference.
 */
export const CalcDifViewHeigh = () => {
    const { navbarHeight } = useNavbarHeight();
    const { footerHeight } = useFooterHeight();

    // Returns the sum of the navbar height, footer height, and 24 pixels
    return navbarHeight + footerHeight + 24;
}

// Function to extract video key from YouTube link
/**
 * Extracts the video key from a YouTube link.
 * @param {string} videoLink - The YouTube video link.
 * @returns {string|null} The extracted video key or null if no match found.
 */
export const extractVideoKey = (videoLink) => {
    // Regular expression to match YouTube video links
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    const match = videoLink.match(regex);
    // Return the extracted video key if a match is found, otherwise return null
    return match ? match[1] : null;
};

/**
 * Checks if a formatted date is greater than or equal to the current date.
 * @param {string} formattedDate - The formatted date string (e.g., "MM/DD/YYYY").
 * @returns {boolean} Whether the formatted date is greater than or equal to the current date.
 */
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
    return formattedDateObject >= today || formattedDateObject.toDateString() === today.toDateString();
};

/**
 * Formats a date string to "MM/DD/YYYY" format.
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (dateString) => {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Check if the parsed date is valid
    if (isNaN(date.getTime())) {
        console.error('Invalid date:', dateString);
        return 'Invalid Date'; // Or handle the error in a different way
    }

    // Get the components of the date
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

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
/**
 * Gets the current date or time.
 * @param {string} choice - The choice of either 'date' or 'time'.
 * @returns {string} The current date or time.
 */
export const getCurrentDateTime = (choice) => {
    const now = new Date();

    if (choice === 'date') {
        // Return current date in yyyy-mm-dd format
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    } else if (choice === 'time') {
        // Return current time in HH:MM:SS format
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');
        const second = String(now.getSeconds()).padStart(2, '0');
        return `${hour}:${minute}:${second}`;
    } else {
        // Handle invalid choice
        return 'Invalid choice';
    }
}


// Function to convert formatted date to API format
/**
 * Converts a formatted date string to API format (YYYY-MM-DD).
 * @param {string} dateString - The formatted date string (e.g., "MM/DD/YYYY").
 * @returns {string} The date string in API format (YYYY-MM-DD).
 */
export const formattedDateToAPI = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};


// Function to convert formatted time to API format
/**
 * Converts a formatted time string to API format (HH:MM:SS).
 * @param {string} dateString - The formatted time string (e.g., "HH:MM:SS").
 * @returns {string} The time string in API format (HH:MM:SS).
 */
export const formattedTimeToAPI = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};


// Function to capitalize the first letter of a string
/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to get label or name of an object item
/**
 * Gets the label or name of an object item.
 * @param {object} item - The object containing the item.
 * @param {string} element - The item to get the label or name for.
 * @param {string} type - The type of label to return ('label' or 'name').
 * @returns {string} The label or name of the object item.
 */
export const getLabelOrNameOfObjItem = (item, element, type) => {
    let objElement = Object.keys(item).find((key) => item[key] === item[element]);
    objElement = (objElement !== undefined) ? objElement : element;
    return type === 'label' ? capitalizeFirstLetter(element) : element;
};

// Function to make a hard copy of an object without pass by reference
/**
 * Creates a deep copy of an object without passing by reference.
 * @param {object} obj - The object to copy.
 * @returns {object} The deep copy of the object.
 */
export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// Function to ensure the value is an array
/**
 * Ensures that the value is an array.
 * @param {*} value - The value to ensure as an array.
 * @returns {array} The value as an array.
 */
export const ensureArray = (value) => Array.isArray(value) ? value : [];

// Function to find the icon with the matching name
/**
 * Finds the icon with the matching name.
 * @param {string} name - The name of the icon to find.
 * @param {boolean} flagReplaceAirPlane - Whether to replace "faPaperPlane_Hover" icon.
 * @returns {string|null} The URL of the matched icon or null if not found.
 */
export const getIconByName = (name, flagReplaceAirPlane = false) => {
    // return the URL of "faPaperPlane_HoverBlack"
    if (flagReplaceAirPlane && name === "faPaperPlane_Hover") {
        const blackIcon = ReachOutIconsList.find((icon) => icon.name === "faPaperPlane_HoverBlack");
        // Return the URL property of the found black icon
        return blackIcon ? blackIcon.url : icon.url;
    }

    // Otherwise, find the icon by name
    const matchedImage = ReachOutIconsList.find((icon) => icon.name === name);

    return matchedImage ? matchedImage.url : null

};

// Function to get the last reference from the object
/**
 * Gets the last reference from the object.
 * @param {array} dataArray - The array containing objects.
 * @returns {string|null} The last reference from the array or null if empty.
 */
export const getLastReference = (dataArray) => {
    if (dataArray.length === 0) {
        return null; // Return null if the array is empty
    } else {
        const lastObject = dataArray[dataArray.length - 1];
        return lastObject.reference;
    }
};


// Function to encrypt the user ID using Base64 encoding with additional random characters
/**
 * Encrypts the user ID using Base64 encoding with additional random characters.
 * @param {string} userId - The user ID to encrypt.
 * @returns {string} The encrypted user ID.
 */
export const encryptUserId = (userId) => {
    const randomChars = generateRandomChars(10); // Generate 10 random characters
    const encryptedUserId = btoa(randomChars + userId + randomChars); // Base64 encoding with random characters
    return encryptedUserId;
};

// Function to decrypt the user ID from Base64 encoding with additional random characters
/**
 * Decrypts the user ID from Base64 encoding with additional random characters.
 * @param {string} encryptedUserId - The encrypted user ID to decrypt.
 * @returns {string} The decrypted user ID.
 */
export const decryptUserId = (encryptedUserId) => {
    const decryptedUserId = atob(encryptedUserId); // Base64 decoding
    const randomCharsLength = 10; // Length of random characters
    return decryptedUserId.substring(randomCharsLength, decryptedUserId.length - randomCharsLength); // Extracting original user ID
};

// Function to generate random characters
/**
 * Generates random characters of a specified length.
 * @param {number} length - The length of the random characters to generate.
 * @returns {string} The generated random characters.
 */
const generateRandomChars = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomChars = '';
    for (let i = 0; i < length; i++) {
        randomChars += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomChars;
};
