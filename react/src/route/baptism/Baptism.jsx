{
  /*
This code defines a component named Baptism responsible for rendering various sections related to baptism cerimonies. 
It includes image-text sections, card container lists, image background text, carousel testimonials, and modal services for editing each section. 
The content for each section is fetched from the BaptismContent repository.
 The layout adjusts dynamically based on whether the device is mobile or not.
 */
}


import React from "react";
import { Box, Container } from "@mui/material";
import ImageText from "../../components/image-text/ImageText";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import CarouselTestimonials from "../../components/carousel-testimonials/CarouselTestimonials";
import ModalServices from "../../components/modal-services/ModalServices";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin";
import usePageData from "../../components/use-page-data-hook/usePageDataHook";

import BaptismContent from "../../repository/BaptismContent"; 
import { pageNames, loading } from "../../repository/ApiParameters";

const Baptism = () => {
  const page = pageNames.baptism;

  const {
    isMobile,
    calcDifViewHeigh,
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
    pageContent,
    isLoading,
    error,
  } = usePageData(page);

  if (isLoading) {
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
          {loading.text}
        </Box>
      </Container>
    ); // Render loading indicator
  }

  return (
    <>
      {/* Section 1: Image Text */}
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <ImageText
            img={BaptismContent.section1_image_text[0].img}
            title={BaptismContent.section1_image_text[0].title}
            description={BaptismContent.section1_image_text[0].desc}
            isMobile={isMobile}
          />
          {/* Button for editing this section */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(BaptismContent.section1_image_text)}
          />
        </Container>
      </Box>

      {/* Section 2: Card Container List */}
      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={BaptismContent.section2_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
        {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(BaptismContent.section2_cards)}
        />
      </Container>

      {/* Section 3: Image Background Text */}
      <ImageBackgroundText
        img={BaptismContent.section3_phrase[0].img}
        mainText={BaptismContent.section3_phrase[0].title}
        smallText={BaptismContent.section3_phrase[0].desc}
        isMobile={isMobile}
      />
      <Container>
        {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(BaptismContent.section3_phrase)}
        />
      </Container>

      {/* Section 4: Card Container List (with gallery modal) */}
      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={BaptismContent.section4_photos}
          showTitle={true}
          showDescription={false}
          modalType="gallery"
        />
        {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(BaptismContent.section4_photos)}
        />
      </Container>
      {/* Section 5: Carousel Testimonials */}
      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselTestimonials
            testimonies={BaptismContent.section5_testimonials}
            isMobile={isMobile}
          />
          {/* Button for editing this section */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() =>
              handleOpenModal(BaptismContent.section5_testimonials)
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

export default Baptism;

