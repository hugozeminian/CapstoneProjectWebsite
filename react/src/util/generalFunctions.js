import { useMediaQuery } from "@mui/material";

export const IsMobile = () => {
    return useMediaQuery((theme) => theme.breakpoints.down("sm"));
}

