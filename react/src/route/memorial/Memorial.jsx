import React from "react";
import { Box, Container } from "@mui/material";
import ImageText from "../../components/image-text/ImageText";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import CarouselTestimonials from "../../components/carousel-testimonials/CarouselTestimonials";
import ModalServices from "../../components/modal-services/ModalServices";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin";
import usePageData from "../../components/use-page-data-hook/usePageDataHook";

import MemorialContent from "../../repository/MemorialContent"; // Importing content related to the Baptism page


const Memorial = () => {
  const page = "memorial";

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
          Loading Content...
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
            img={MemorialContent.section1_image_text[0].img}
            title={MemorialContent.section1_image_text[0].title}
            description={MemorialContent.section1_image_text[0].desc}
            isMobile={isMobile}
          />
          {/* Button for editing this section */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(MemorialContent.section1_image_text)}
          />
        </Container>
      </Box>

      {/* Section 2: Card Container List */}
      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={MemorialContent.section2_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
        {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(MemorialContent.section2_cards)}
        />
      </Container>

      {/* Section 3: Image Background Text */}
      <ImageBackgroundText
        img={MemorialContent.section3_phrase[0].img}
        mainText={MemorialContent.section3_phrase[0].title}
        smallText={MemorialContent.section3_phrase[0].desc}
        isMobile={isMobile}
      />
      <Container>
        {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(MemorialContent.section3_phrase)}
        />
      </Container>

      {/* Section 4: Card Container List (with gallery modal) */}
      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={MemorialContent.section4_photos}
          showTitle={true}
          showDescription={false}
          modalType="gallery"
        />
        {/* Button for editing this section */}
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(MemorialContent.section4_photos)}
        />
      </Container>
      {/* Section 5: Carousel Testimonials */}
      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselTestimonials
            testimonies={MemorialContent.section5_testimonials}
            isMobile={isMobile}
          />
          {/* Button for editing this section */}
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() =>
              handleOpenModal(MemorialContent.section5_testimonials)
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

export default Memorial;
