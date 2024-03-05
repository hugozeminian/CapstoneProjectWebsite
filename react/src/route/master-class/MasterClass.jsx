
{/*
In this code, a functional component called MasterClass is defined, which represents the master class page of the application. 
It displays various sections of content such as images with text, YouTube videos, and card containers. 
It utilizes Material-UI components like Box and Container, as well as custom components like ImageText, ButtonCustomAdmin, YouTubeVideo, CardContainerList, and ModalServices. 
The content for each section is fetched from a repository (MasterClassContent). 
Additionally, it uses a custom hook (modalServicesHook) to manage modal functionality for editing content.
 */}
import React from "react";
import { Box, Container } from "@mui/material";
import { IsMobile } from "../../util/generalFunctions"; 
import MasterClassContent from "../../repository/MasterClassContent"; 
import ImageText from "../../components/image-text/ImageText"; 
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin"; 
import YouTubeVideo from "../../components/youtube/YouTube";
import CardContainerList from "../../components/card-container-list/CardContainerList"; 
import ModalServices from "../../components/modal-services/ModalServices"; 
import modalServicesHook from "../../components/modal-services-hook/modalServicesHook"; 

const MasterClass = () => {
  const isMobile = IsMobile();

  const {
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
  } = modalServicesHook();

  return (
    <>
      {/* Section 1 */}
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

      {/* Section 2 */}
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

      {/* Section 3 */}
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

      {/* Section 4 */}
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

export default MasterClass; 
