import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import ImageText from "../../components/image-text/ImageText";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import CarouselTestimonials from "../../components/carousel-testimonials/CarouselTestimonials";
import ModalServices from "../../components/modal-services/ModalServices";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin";
import usePageData from "../../components/use-page-data-hook/UsePageDataHook";

import WeddingContent from "../../repository/WeddingContent";
import { pageNames, loadingText } from "../../repository/ApiParameters";
import { fetchGeneralCards } from "../../api/api";
import BoxCustom from "../../components/box-custom/BoxCustom";

/**
 * Wedding component displays wedding-related content.
 * @returns {JSX.Element} Wedding component.
 */
const Wedding = () => {
  const page = pageNames.wedding;

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
  } = usePageData(page, fetchGeneralCards);

  const repository = localDataRepositoryOnly ? WeddingContent : pageContent;
  const [content, setContent] = useState(repository);

  useEffect(() => {
    const repository = localDataRepositoryOnly ? WeddingContent : pageContent;
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
          {/* Section 1: Image Text */}
          <BoxCustom
            bgcolor={isMobile ? "background.default" : "background.alternate"}
          >
            <Container sx={{ height: "100%" }}>
              <ImageText
                img={content.section1_image_text[0].image_path}
                title={content.section1_image_text[0].title}
                description={content.section1_image_text[0].description}
                isMobile={isMobile}
              />
              {/* Button for editing this section */}
              <ButtonCustomAdmin
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section1_image_text, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 2: Card Container List */}
          <BoxCustom>
            <Container sx={{ height: "100%" }}>
              <CardContainerList
                cardsData={content.section2_cards}
                showCardContent={true}
                showTitle={true}
                showDescription={false}
              />
              {/* Button for editing this section */}
              <ButtonCustomAdmin
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section2_cards, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 3: Image Background Text */}
          <BoxCustom>
            <ImageBackgroundText
              img={content.section3_phrase[0].image_path}
              mainText={content.section3_phrase[0].title}
              smallText={content.section3_phrase[0].description}
              isMobile={isMobile}
            />
            <Container>
              {/* Button for editing this section */}
              <ButtonCustomAdmin
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section3_phrase, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 4: Card Container List (with gallery modal) */}
          <BoxCustom>
            <Container sx={{ height: "100%" }}>
              <CardContainerList
                cardsData={content.section4_photos}
                showTitle={true}
                showDescription={false}
                modalType="gallery"
              />
              {/* Button for editing this section */}
              <ButtonCustomAdmin
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section4_photos, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 5: Carousel Testimonials */}
          <BoxCustom>
            <Box bgcolor={"background.alternate"} p={2}>
              <Container sx={{ height: "100%" }}>
                <CarouselTestimonials
                  testimonies={content.section5_testimonials}
                  isMobile={isMobile}
                />
                {/* Button for editing this section */}
                <ButtonCustomAdmin
                  width={isMobile ? "100%" : "160px"}
                  label="Edit section"
                  onClick={() =>
                    handleOpenModal(
                      null,
                      content.section5_testimonials,
                      null,
                      null
                    )
                  }
                />
              </Container>
            </Box>
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

export default Wedding;
