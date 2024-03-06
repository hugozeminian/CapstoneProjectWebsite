import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ReachOutData from "../../repository/ReachOutData";
import ButtonCustom from "../button-custom/ButtonCustom";

const Link = styled("a")(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const FooterReachOut = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      sx={{
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      {/* box left */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        p={2}
      >
        <Typography variant="h6" p={1}>
          {ReachOutData.contactForm.contactFormPhraseTitle}
        </Typography>
        <ButtonCustom
          label={ReachOutData.contactForm.contactFormPhraseBody}
          endIcon={ReachOutData.contactForm.contactFormIcon}
          linkTo={"form-reach-out"}
        ></ButtonCustom>
      </Box>

      {/* box right */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        p={2}
      >
        <Typography variant="h6" px={1}>
          {ReachOutData.contactMe.contactMeTitle}
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          {ReachOutData.contactMe.contactMeNumberIcon}
          <Typography pl={1}>
            {ReachOutData.contactMe.contactMeNumber}
          </Typography>
        </Box>

        <Box display={"flex"} alignItems={"center"}>
          {ReachOutData.contactMe.contactMeEmailIcon}
          <Typography pl={1}>
            <Link href={`mailto:${ReachOutData.contactMe.contactMeEmail}`}>
              {ReachOutData.contactMe.contactMeEmail}
            </Link>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          {ReachOutData.contactMe.socialMedia.map(
            (social, index) =>
              social.isIconVisible && (
                <Box key={index} px={1}>
                  <Link href={social.link}>{social.icon}</Link>
                </Box>
              )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FooterReachOut;
