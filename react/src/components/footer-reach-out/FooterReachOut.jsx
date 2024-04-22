import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ReachOutData from "../../repository/ReachOutData";
import ButtonCustom from "../button-custom/ButtonCustom";
import SocialIcon from "../social-icon/SocialIcon";
import { SettingsObjectExample } from "../../repository/_exempleObject";
import { getIconByName } from "../../util/generalFunctions";
import { loadingText } from "../../repository/ApiParameters";
import { Link } from "react-router-dom";

/**
 * FooterReachOut component displays contact information and social media links.
 * @param {Object} props - Props for the FooterReachOut component.
 * @param {Object} props.props - Props received from the parent component.
 * @param {boolean} props.props.isMobile - Indicates whether the device is mobile.
 * @param {React.Component} props.props.FontAwesomeIcon - Icon component.
 * @param {Object} props.props.faSpinner - Font Awesome spinner icon.
 * @param {boolean} props.props.localDataRepositoryOnly - Indicates whether local data repository is used.
 * @param {number} props.props.calcDifViewHeigh - Height calculation.
 * @param {Object} props.props.pageContent - Content of the page.
 * @param {boolean} props.props.isLoading - Indicates whether the page is loading.
 * @param {boolean} props.props.error - Indicates whether there is an error.
 * @returns {JSX.Element} - FooterReachOut component.
 */
const FooterReachOut = ({ props }) => {
  const {
    isMobile,
    FontAwesomeIcon,
    faSpinner,
    localDataRepositoryOnly,
    calcDifViewHeigh,
    pageContent,
    isLoading,
  } = props;

  const [content, setContent] = useState(SettingsObjectExample);
  const [contentPhone, setContentPhone] = useState("");
  const [contentEmail, setContentEmail] = useState("");

  useEffect(() => {
    const repository = localDataRepositoryOnly ? SettingsObjectExample : pageContent;

    if (repository) {
      setContent(repository);
      setContentPhone(repository.contactPhone[0].link);
      setContentEmail(repository.contactEmail[0].link);
    }
  }, [localDataRepositoryOnly, pageContent, isLoading]);

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
          {/* Box left */}
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
              width={isMobile ? "100%" : "200px"}
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

          {/* Box right */}
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
              <Typography pl={1}>{contentPhone}</Typography>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <SocialIcon
                socialIcon={ReachOutData.contactMe.contactMeEmailIcon}
              />
              <Typography pl={1}>
                <Link href={`mailto:${contentEmail}`}>{contentEmail}</Link>
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
