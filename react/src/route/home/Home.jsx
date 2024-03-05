{/*
In this code, a functional component called Home is defined, which represents the homepage of the application.
 It displays various sections of content such as carousel images, text sections, card containers, etc. 
 It utilizes Material-UI components like Box, Container, and Typography, as well as custom components like CarouselImages, CardContainerList, ImageBackgroundText, ButtonCustomAdmin, and ModalServices. 
 The content for each section is fetched from a repository (HomeContent). 
Additionally, it uses a custom hook (modalServicesHook) to manage modal functionality for editing content.
 */}

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CarouselImages from "../../components/carousel-images/CarouselImages"; // Importing custom CarouselImages component
import HomeContent from "../../repository/HomeContent"; // Importing home content data from repository
import CardContainerList from "../../components/card-container-list/CardContainerList"; // Importing custom CardContainerList component
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText"; // Importing custom ImageBackgroundText component
import { LocationOnOutlined } from "@mui/icons-material";
import { IsMobile } from "../../util/generalFunctions"; // Importing IsMobile function from generalFunctions.js
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin"; // Importing custom ButtonCustomAdmin component
import ModalServices from "../../components/modal-services/ModalServices";// Importing custom ModalServices component
import modalServicesHook from "../../components/modal-services-hook/modalServicesHook"; // Importing modalServicesHook from custom hook

// Functional component for rendering the home page
const Home = () => {
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
    <>    {/* Section 1 */}
      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselImages images={HomeContent.section1_carousel} />
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(HomeContent.section1_carousel)}
          />
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
        {/* Section 2 */}
        <Typography
          variant="h3"
          my={"20px"}
          minHeight={"200px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"justify"}
          color={"text.primary"}
          sx={{ fontSize: isMobile ? "mobileFontSizeLarge.fontSize" : "h3" }}
        >
          {HomeContent.section2_phrase[0].desc}
        </Typography>

         {/* Edit button */}
        <ButtonCustomAdmin
          label="Edit section"
          admEdit={true}
          onClick={() => handleOpenModal(HomeContent.section2_phrase)}
        />
      </Container>
      
      {/* Section 3 */}
      <Box bgcolor={"background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <Typography
            variant="h6"
            minHeight={"200px"}
            color={"text.primary"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"justify"}
            p={2}
            sx={{ fontSize: isMobile ? "mobileFontSizeSmall.fontSize" : "h6" }}
          >
            {HomeContent.section3_phrase[0].desc}
          </Typography>

          {/* Edit button */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(HomeContent.section3_phrase)}
          />
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
           {/* Section 4 */}
        <CardContainerList
          cardsData={HomeContent.section4_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />

         {/* Edit button */}
        <ButtonCustomAdmin
          label="Edit section"
          admEdit={true}
          onClick={() => handleOpenModal(HomeContent.section4_cards)}
        />
      </Container>

      {/* Section 5 */}
      <ImageBackgroundText
        img={HomeContent.section5_phrase[0].img}
        mainText={HomeContent.section5_phrase[0].title}
        smallText={HomeContent.section5_phrase[0].desc}
        isMobile={isMobile}
      />
      <Container>

         {/* Edit button */}
        <ButtonCustomAdmin
          label="Edit section"
          admEdit={true}
          onClick={() => handleOpenModal(HomeContent.section5_phrase)}
        />
      </Container>

      <Box bgcolor={"background.default"}>
        {/* Section 6 */}
        <Container sx={{ height: "100%" }}>
          <Typography
            variant="h6"
            minHeight={"200px"}
            color={"text.primary"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"justify"}
            sx={{ py: 5, px: 10 }}
          >
            {HomeContent.section6_define[0].title}
          </Typography>

           {/* Edit button */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(HomeContent.section6_define)}
          />
        </Container>
      </Box>

      <Box bgcolor={"background.alternate"}>
        {/* Section 7 */}
        <Container sx={{ height: "100%" }}>
          <Typography
            variant="h6"
            minHeight={"200px"}
            bgcolor={"background.alternate"}
            color={"text.primary"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Box>
              <LocationOnOutlined /> {HomeContent.section7_area[0].title}
            </Box>
          </Typography>

           {/* Edit button */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(HomeContent.section7_area)}
          />
        </Container>
      </Box>

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

export default Home; // Exporting Home component as default
