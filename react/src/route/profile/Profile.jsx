import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ImageText from "../../components/image-text/ImageText.jsx";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin.jsx";
import ProfileContent from "../../repository/ProfileContent.js";
import { IsMobile } from "../../util/generalFunctions.js";
import YouTubeVideo from "../../components/youtube/YouTube.jsx";
import CardContainerList from "../../components/card-container-list/CardContainerList.jsx";

const Profile = () => {
  const isMobile = IsMobile();

  return (
    <>
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <ImageText
            img={ProfileContent.section1_profile[0].img}
            title={ProfileContent.section1_profile[0].title}
            description={ProfileContent.section1_profile[0].desc}
            isMobile={isMobile}
            useAvatar={true}
          />
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpeModal(ProfileContent.section1_profile)}
          />
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
        <Box display={"flex"} justifyContent={"center"} my={10}>
          <YouTubeVideo videoId={ProfileContent.section2_youtube[0].img} />
        </Box>
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpeModal(ProfileContent.section2_youtube)}
        />
      </Container>

      <Box bgcolor="background.alternate">
        <Container sx={{ height: "100%" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h5" color={"text.primary"} mt={2}>
              {ProfileContent.section3_partners_title[0].title}
            </Typography>

            <CardContainerList
              cardsData={ProfileContent.section3_partners}
              showCardContent={false}
              showTitle={false}
              showDescription={false}
              isModalDisable={true}
            />
          </Box>
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpeModal(ProfileContent.section1_profile)}
          />
        </Container>
      </Box>
    </>
  );
};

export default Profile;
