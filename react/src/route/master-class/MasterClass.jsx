
{/*
In this code, a functional component called MasterClass is defined, which represents the master class page of the application. 
It displays various sections of content such as images with text, YouTube videos, and card containers. 
It utilizes Material-UI components like Box and Container, as well as custom components like ImageText, ButtonCustomAdmin, YouTubeVideo, CardContainerList, and ModalServices. 
The content for each section is fetched from a repository (MasterClassContent). 
Additionally, it uses a custom hook (modalServicesHook) to manage modal functionality for editing content.
 */}
import React from "react";
import { Box, Container } from "@mui/material";
import { IsMobile } from "../../util/generalFunctions"; // Importing IsMobile function from generalFunctions.js
import MasterClassContent from "../../repository/MasterClassContent"; // Importing master class content data from repository
import ImageText from "../../components/image-text/ImageText"; // Importing custom ImageText component
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin"; // Importing custom ButtonCustomAdmin component
import YouTubeVideo from "../../components/youtube/YouTube";// Importing custom YouTubeVideo component
import CardContainerList from "../../components/card-container-list/CardContainerList"; // Importing custom CardContainerList component
import ModalServices from "../../components/modal-services/ModalServices"; // Importing custom ModalServices component
import modalServicesHook from "../../components/modal-services-hook/modalServicesHook"; // Importing modalServicesHook from custom hook

// Functional component for rendering the master class page
const MasterClass = () => {
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
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <ImageText
            img={MasterClassContent.section1_master[0].img}
            title={MasterClassContent.section1_master[0].title}
            description={MasterClassContent.section1_master[0].desc}
            isMobile={isMobile}
          />
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(MasterClassContent.section1_master)}
          />
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={MasterClassContent.section2_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(MasterClassContent.section2_cards)}
        />
      </Container>

      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            my={10}
          >
            <YouTubeVideo
              videoId={MasterClassContent.section3_youtube[0].video}
            />
          </Box>
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(MasterClassContent.section3_youtube)}
          />
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={MasterClassContent.section4_masterclass}
          isCardEticket={true}
        />
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() =>
            handleOpenModal(MasterClassContent.section4_masterclass)
          }
        />
      </Container>
      
       {/* Modal for editing content */}
      <ModalServices
        open={openModal}
        onClose={handleCloseModal}
        obj={objContent}
        modalType={typeOfModal.adm}
      />
    </>
  );
};

export default MasterClass; // Exporting MasterClass component as default
