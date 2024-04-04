import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ReachOutData from "../../repository/ReachOutData";
import ButtonCustom from "../button-custom/ButtonCustom";
import SocialIcon from "../social-icon/SocialIcon";
import { SettingsObjectExample } from "../../repository/_exempleObject";
import { getIconByName } from "../../util/generalFunctions";
import { getSettings } from "../../api/api";
import usePageData from "../use-page-data-hook/UsePageDataHook";
import { loadingText } from "../../repository/ApiParameters";

const Link = styled("a")(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

const FooterReachOut = () => {
  const {
    FontAwesomeIcon,
    faSpinner,
    localDataRepositoryOnly,
    isMobile,
    calcDifViewHeigh,
    openModal,
    objContentModal,
    typeOfModal,
    toggleSwitch,
    handleToggleSwitch,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
    pageContent,
    isLoading,
    error,
  } = usePageData("", getSettings);

  const repository = localDataRepositoryOnly
    ? SettingsObjectExample
    : pageContent;
  const [content, setContent] = useState(repository);

  useEffect(() => {
    console.log("Effect triggered footer");
    const repository = localDataRepositoryOnly
      ? SettingsObjectExample
      : pageContent;
    setContent(repository);
  }, [localDataRepositoryOnly, pageContent, toggleSwitch, isLoading]);

  if (isLoading && !localDataRepositoryOnly) {
    return (
      <Container
        sx={{
          height: "auto",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? "auto"
                : `calc(100vh - ${calcDifViewHeigh}px)`,
          }}
        >
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            style={{ marginRight: "0.5rem" }}
          />
          {loadingText.text}
        </Box>
      </Container>
    ); // Render loading indicator
  }

  return (
    <>
      {content && (
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
            width={"350px"}
            p={2}
          >
            <Typography variant="h6" p={1}>
              {ReachOutData.contactForm.contactFormPhraseTitle}
            </Typography>
            <ButtonCustom
              width="200px"
              label={ReachOutData.contactForm.contactFormPhraseBody}
              endIcon={
                <SocialIcon
                  socialIcon={ReachOutData.contactForm.contactFormIcon}
                />
              }
              endIcon_hover={
                <SocialIcon
                  socialIcon={ReachOutData.contactForm.contactFormIcon_Hover}
                />
              }
              linkTo={"form-reach-out"}
            ></ButtonCustom>
          </Box>

          {/* box right */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={"350px"}
            p={2}
          >
            <Typography variant="h6" px={1}>
              {ReachOutData.contactMe.contactMeTitle}
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <SocialIcon
                socialIcon={ReachOutData.contactMe.contactMeNumberIcon}
              />
              {content.contactPhone && (
                <Typography pl={1}>{content.contactPhone.link}</Typography>
              )}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <SocialIcon
                socialIcon={ReachOutData.contactMe.contactMeEmailIcon}
              />
              <Typography pl={1}>
                {content.contactEmail && (
                  <Link href={`mailto:${content.contactEmail.link}`}>
                    {content.contactEmail.link}
                  </Link>
                )}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              {content.socialMedia &&
                content.socialMedia.map(
                  (social, index) =>
                    social.isIconVisible && (
                      <Box key={index} p={1}>
                        <SocialIcon
                          socialIcon={getIconByName(social.icon)}
                          hoverIcon={getIconByName(social.icon_Hover)}
                          href={social.link}
                          pointer={true}
                          onClickHandler={true}
                        />
                      </Box>
                    )
                )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FooterReachOut;
