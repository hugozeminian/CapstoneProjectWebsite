import { useMediaQuery } from "@mui/material";
import { useNavbarHeight } from "../context/NavBarHeightContext";
import { useFooterHeight } from "../context/FooterHeightContext";

export const IsMobile = () => {
    return useMediaQuery((theme) => theme.breakpoints.down("sm"));
}

export const CalcDifViewHeigh = () => {
    const { navbarHeight } = useNavbarHeight();
    const { footerHeight } = useFooterHeight();

    return navbarHeight + footerHeight + 24;
}

// Function to extract video key from YouTube link
export const extractVideoKey = (videoLink) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    const match = videoLink.match(regex);
    return match ? match[1] : null;
};


export const deleteAccessToken = () => {
    localStorage.removeItem('ACCESS_TOKEN');
}

export const getAccessToken = () => {
    return localStorage.getItem('ACCESS_TOKEN');
}
