{/*
 These utility functions are used for various tasks such as determining if the device is mobile, calculating the height difference between the viewport and the content area, extracting video keys from YouTube links, and managing access tokens in local storage.
*/}
import { useMediaQuery } from "@mui/material";
import { useNavbarHeight } from "../context/NavBarHeightContext";
import { useFooterHeight } from "../context/FooterHeightContext";

// Function to determine if the device is mobile based on the MUI theme breakpoints
export const IsMobile = () => {
    return useMediaQuery((theme) => theme.breakpoints.down("sm"));
}

// Function to calculate the height difference between the viewport and the content area
export const CalcDifViewHeigh = () => {
     // Retrieve the navbar height from the context
    const { navbarHeight } = useNavbarHeight();
     // Retrieve the footer height from the context
    const { footerHeight } = useFooterHeight();

    // Return the sum of navbar height, footer height, and a fixed value (24)
    // 24 is added as an extra padding for better visual appearance
    return navbarHeight + footerHeight + 24;
}

// Function to extract video key from YouTube link
export const extractVideoKey = (videoLink) => {
    // Regular expression to match YouTube video links
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    // Attempt to match the provided video link with the regex
    const match = videoLink.match(regex);
    // Return the extracted video key if a match is found, otherwise return null
    return match ? match[1] : null;
};

// Function to delete the access token from local storage
export const deleteAccessToken = () => {
    localStorage.removeItem('ACCESS_TOKEN');
}

// Function to retrieve the access token from local storage
export const getAccessToken = () => {
    return localStorage.getItem('ACCESS_TOKEN');
}
