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
