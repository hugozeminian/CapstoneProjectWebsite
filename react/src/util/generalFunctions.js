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

// Function to formatting date
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

  