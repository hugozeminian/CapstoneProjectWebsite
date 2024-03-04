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

import WeddingContent from "../../repository/WeddingContent";

const Wedding = () => {
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
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <ImageText
            img={WeddingContent.section1_image_text[0].img}
            title={WeddingContent.section1_image_text[0].title}
            description={WeddingContent.section1_image_text[0].desc}
            isMobile={isMobile}
          />
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(WeddingContent.section1_image_text)}
          />
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={WeddingContent.section2_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(WeddingContent.section2_cards)}
        />
      </Container>

      <ImageBackgroundText
        img={WeddingContent.section3_phrase[0].img}
        mainText={WeddingContent.section3_phrase[0].title}
        smallText={WeddingContent.section3_phrase[0].desc}
        isMobile={isMobile}
      />
      <Container>
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(WeddingContent.section3_phrase)}
        />
      </Container>

      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={WeddingContent.section4_photos}
          showTitle={true}
          showDescription={false}
          modalType="gallery"
        />
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(WeddingContent.section4_photos)}
        />
      </Container>

      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselTestimonials
            testimonies={WeddingContent.section5_testimonials}
            isMobile={isMobile}
          />
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() =>
              handleOpenModal(WeddingContent.section5_testimonials)
            }
          />
        </Container>
      </Box>

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
