{/*
This code defines a component named Wedding responsible for rendering various sections related to a wedding. 
It includes image-text sections, card container lists, image background text, carousel testimonials, and modal services for editing each section. 
The content for each section is fetched from the WeddingContent repository.
 The layout adjusts dynamically based on whether the device is mobile or not.
 */}

import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import ImageText from "../../components/image-text/ImageText";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import CarouselTestimonials from "../../components/carousel-testimonials/CarouseltesTimonials";
import { IsMobile } from "../../util/generalFunctions";
import ModalServices from "../../components/modal-services/ModalServices";
import modalServicesHook from "../../components/modal-services-hook/modalServicesHook";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin";

import WeddingContent from "../../repository/WeddingContent"; // Importing content related to the Wedding page

const Wedding = () => {
  const isMobile = IsMobile();  // Determine if the device is mobile

  // Custom hook to manage modal services
  const {
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
  } = modalServicesHook();

  return (
    <>
     {/* Section 1: Image Text */}
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <ImageText
            img={WeddingContent.section1_image_text[0].img}
            title={WeddingContent.section1_image_text[0].title}
            description={WeddingContent.section1_image_text[0].desc}
            isMobile={isMobile}
          />
           {/* Button for editing this section */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(WeddingContent.section1_image_text)}
          />
        </Container>
      </Box>

      {/* Section 2: Card Container List */}
      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={WeddingContent.section2_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
         {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(WeddingContent.section2_cards)}
        />
      </Container>

      {/* Section 3: Image Background Text */}
      <ImageBackgroundText
        img={WeddingContent.section3_phrase[0].img}
        mainText={WeddingContent.section3_phrase[0].title}
        smallText={WeddingContent.section3_phrase[0].desc}
        isMobile={isMobile}
      />
      <Container>
        {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(WeddingContent.section3_phrase)}
        />
      </Container>
      
      {/* Section 4: Card Container List (with gallery modal) */}
      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={WeddingContent.section4_photos}
          showTitle={true}
          showDescription={false}
          modalType="gallery"
        />
        {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(WeddingContent.section4_photos)}
        />
      </Container>
      {/* Section 5: Carousel Testimonials */}
      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselTestimonials
            testimonies={WeddingContent.section5_testimonials}
            isMobile={isMobile}
          />
          {/* Button for editing this section */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() =>
              handleOpenModal(WeddingContent.section5_testimonials)
            }
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

export default Wedding;
