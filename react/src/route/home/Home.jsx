{
  /*
In this code, a functional component called Home is defined, which represents the homepage of the application.
 It displays various sections of content such as carousel images, text sections, card containers, etc. 
 It utilizes Material-UI components like Box, Container, and Typography, as well as custom components like CarouselImages, CardContainerList, ImageBackgroundText, ButtonCustomAdmin, and ModalServices. 
 The content for each section is fetched from a repository (HomeContent). 
Additionally, it uses a custom hook (modalServicesHook) to manage modal functionality for editing content.
 */
}

import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CarouselImages from "../../components/carousel-images/CarouselImages";
import HomeContent from "../../repository/HomeContent";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import { LocationOnOutlined } from "@mui/icons-material";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin";
import ModalServices from "../../components/modal-services/ModalServices";
import UsePageData from "../../components/use-page-data-hook/UsePageDataHook";
import { pageNames, loadingText } from "../../repository/ApiParameters";
import { fetchGeneralCards } from "../../api/api";
import BoxCustom from "../../components/box-custom/BoxCustom";

const Home = () => {
  const page = pageNames.home;

  const {
    FontAwesomeIcon,
    faSpinner,
    localDataRepositoryOnly,
    isMobile,
    calcDifViewHeigh,
    openModal,
    objContentModal,
    typeOfModal,
    isObjField,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
    pageContent,
    isLoading,
    error,
  } = UsePageData(page, fetchGeneralCards);

  const repository = localDataRepositoryOnly ? HomeContent : pageContent;
  const [content, setContent] = useState(repository);

  useEffect(() => {
    const repository = localDataRepositoryOnly ? HomeContent : pageContent;
    setContent(repository);
  }, [localDataRepositoryOnly, pageContent]);

  if (isLoading && !localDataRepositoryOnly) {
    return (
      <Container display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? `70vh`
                : `calc(100vh - ${calcDifViewHeigh}px)`,
          }}
        >
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            style={{ marginRight: "0.5rem" }}
          />
          {loadingText.text}
        </Box>
      </Container>
    ); // Render loading indicator
  }

  return (
    <>
      {content && (
        <>
          {/* Section 1 */}
          <BoxCustom bgcolor={"background.alternate"} p={2}>
            <Container sx={{ height: "100%" }}>
              <CarouselImages images={content.section1_carousel} />
              <ButtonCustomAdmin
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section1_carousel, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 2 */}
          <BoxCustom>
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
                sx={{
                  fontSize: isMobile ? "mobileFontSizeLarge.fontSize" : "h3",
                }}
              >
                {content.section2_phrase[0].description}
              </Typography>

              <ButtonCustomAdmin
                label="Edit section"
                admEdit={true}
                onClick={() =>
                  handleOpenModal(null, content.section2_phrase, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 3 */}
          <BoxCustom bgcolor={"background.alternate"}>
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
                sx={{
                  fontSize: isMobile ? "mobileFontSizeSmall.fontSize" : "h6",
                }}
              >
                {content.section3_phrase[0].description}
              </Typography>

              <ButtonCustomAdmin
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section3_phrase, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 4 */}
          <BoxCustom>
            <Container sx={{ height: "100%" }}>
              <CardContainerList
                cardsData={content.section4_cards}
                showCardContent={true}
                showTitle={true}
                showDescription={false}
              />

              <ButtonCustomAdmin
                label="Edit section"
                admEdit={true}
                onClick={() =>
                  handleOpenModal(null, content.section4_cards, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 5 */}
          <BoxCustom>
            <ImageBackgroundText
              img={content.section5_phrase[0].image_path}
              mainText={content.section5_phrase[0].title}
              smallText={content.section5_phrase[0].description}
              isMobile={isMobile}
            />
            <Container>
              <ButtonCustomAdmin
                label="Edit section"
                admEdit={true}
                onClick={() =>
                  handleOpenModal(null, content.section5_phrase, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 6 */}
          {/* <BoxCustom bgcolor={"background.default"}>
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
                {content.section6_define[0].title}
              </Typography>

              <ButtonCustomAdmin
                label="Edit section"
                onClick={() => handleOpenModal(null, content.section6_define,null, null)}
              />
            </Container>
          </BoxCustom> */}

          {/* Section 7 */}
          {/* <BoxCustom bgcolor={"background.alternate"}> */}
          <BoxCustom>
            <Container sx={{ height: "100%" }}>
              <Typography
                variant="h6"
                minHeight={"200px"}
                // bgcolor={"background.alternate"}
                color={"text.primary"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
              >
                <Box>
                  <LocationOnOutlined /> {content.section7_area[0].title}
                </Box>
              </Typography>

              <ButtonCustomAdmin
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section7_area, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Modal for editing content */}
          <ModalServices
            open={openModal}
            onClose={handleCloseModal}
            obj={objContentModal}
            isObjField={isObjField}
            modalType={typeOfModal.adm}
            onChangeFields={handleOnChangeFieldsModal}
            onChangeImages={handleOnChangeImagesModal}
            updateButton={handleUpdateDateModal}
          />
        </>
      )}
    </>
  );
};

export default Home;
