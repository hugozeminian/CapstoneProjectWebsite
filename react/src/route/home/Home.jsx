{
  /*
In this code, a functional component called Home is defined, which represents the homepage of the application.
 It displays various sections of content such as carousel images, text sections, card containers, etc. 
 It utilizes Material-UI components like Box, Container, and Typography, as well as custom components like CarouselImages, CardContainerList, ImageBackgroundText, ButtonCustomAdmin, and ModalServices. 
 The content for each section is fetched from a repository (HomeContent). 
Additionally, it uses a custom hook (modalServicesHook) to manage modal functionality for editing content.
 */
}

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CarouselImages from "../../components/carousel-images/CarouselImages";
import HomeContent from "../../repository/HomeContent";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import { LocationOnOutlined } from "@mui/icons-material";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin";
import ModalServices from "../../components/modal-services/ModalServices";
import usePageData from "../../components/use-page-data-hook/usePageDataHook";

const Home = () => {
  const page = "home";

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
      {/* Section 1 */}
      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselImages images={HomeContent.section1_carousel} />
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(HomeContent.section1_carousel)}
          />
        </Container>
      </Box>

      {/* Section 2 */}
      <Container sx={{ height: "100%" }}>
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

          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(HomeContent.section3_phrase)}
          />
        </Container>
      </Box>

      {/* Section 4 */}
      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={HomeContent.section4_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />

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
        <ButtonCustomAdmin
          label="Edit section"
          admEdit={true}
          onClick={() => handleOpenModal(HomeContent.section5_phrase)}
        />
      </Container>

      {/* Section 6 */}
      <Box bgcolor={"background.default"}>
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

          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(HomeContent.section6_define)}
          />
        </Container>
      </Box>

      {/* Section 7 */}
      <Box bgcolor={"background.alternate"}>
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

export default Home;
