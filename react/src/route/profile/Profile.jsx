{/*
In this code, a functional component called Profile is defined, which represents the profile page of the application. 
It displays profile information, a YouTube video, and partner information. Users can edit each section by clicking on the "Edit section" button, 
which opens a modal for editing the content. 
The layout adjusts dynamically based on whether the device is mobile or not.
 */}
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ImageText from "../../components/image-text/ImageText.jsx"; // Importing ImageText component
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin.jsx"; // Importing ButtonCustomAdmin component
import ProfileContent from "../../repository/ProfileContent.js"; // Importing ProfileContent data
import { IsMobile } from "../../util/generalFunctions.js"; // Importing IsMobile function from generalFunctions.js
import YouTubeVideo from "../../components/youtube/YouTube.jsx"; // Importing YouTubeVideo component
import CardContainerList from "../../components/card-container-list/CardContainerList.jsx"; // Importing CardContainerList component
import ModalServices from "../../components/modal-services/ModalServices"; // Importing ModalServices component
import modalServicesHook from "../../components/modal-services-hook/modalServicesHook"; // Importing modalServicesHook function

// Functional component for rendering the profile page
const Profile = () => {
  const isMobile = IsMobile(); // Checking if the device is mobile

  // Destructuring values from modalServicesHook
  const {
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
  } = modalServicesHook();

  return (
    <>
     {/* Box to contain the profile section */}
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <ImageText
            img={ProfileContent.section1_profile[0].img}
            title={ProfileContent.section1_profile[0].title}
            description={ProfileContent.section1_profile[0].desc}
            isMobile={isMobile}
            useAvatar={true}
          />
           {/* Button for editing the profile section */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(ProfileContent.section1_profile)}
          />
        </Container>
      </Box>

      {/* Container for YouTube video */}
      <Container sx={{ height: "100%" }}>
        <Box display={"flex"} justifyContent={"center"} my={10}>
           {/* YouTubeVideo component displaying profile video */}
          <YouTubeVideo videoId={ProfileContent.section2_youtube[0].video} />
        </Box>
         {/* Button for editing the YouTube video section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(ProfileContent.section2_youtube)}
        />
      </Container>

      {/* Box to contain partner section */}
      <Box bgcolor="background.alternate">
        <Container sx={{ height: "100%" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
             {/* Typography component displaying partner section title */}
            <Typography variant="h5" color={"text.primary"} mt={2}>
              {ProfileContent.section3_partners_title[0].title}
            </Typography>

              {/* CardContainerList component displaying partner information */}
            <CardContainerList
              cardsData={ProfileContent.section3_partners}
              showCardContent={false}
              showTitle={false}
              showDescription={false}
              isModalDisable={true}
            />
          </Box>
          {/* Button for editing the partner section */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(ProfileContent.section3_partners)}
          />
        </Container>
      </Box>

      {/* ModalServices component for editing content */}
      <ModalServices
        open={openModal}
        onClose={handleCloseModal}
        obj={objContent}
        modalType={typeOfModal.adm}
      />
    </>
  );
};

export default Profile; // Exporting the Profile component as default
