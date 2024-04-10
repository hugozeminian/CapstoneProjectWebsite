{
  /*
In this code, a functional component called MasterClass is defined, which represents the master class page of the application. 
It displays various sections of content such as images with text, YouTube videos, and card containers. 
It utilizes Material-UI components like Box and Container, as well as custom components like ImageText, ButtonCustomAdmin, YouTubeVideo, CardContainerList, and ModalServices. 
The content for each section is fetched from a repository (MasterClassContent). 
Additionally, it uses a custom hook (modalServicesHook) to manage modal functionality for editing content.
 */
}
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import MasterClassContent from "../../repository/MasterClassContent";
import ImageText from "../../components/image-text/ImageText";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin";
import YouTubeVideo from "../../components/youtube/YouTube";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ModalServices from "../../components/modal-services/ModalServices";
import UsePageData from "../../components/use-page-data-hook/UsePageDataHook";
import { pageNames, loadingText } from "../../repository/ApiParameters";
import { getCurrentDateTime } from "../../util/generalFunctions";
import { fetchGeneralCards } from "../../api/api";

const MasterClass = () => {
  const page = pageNames.masterclass;

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

  const repository = localDataRepositoryOnly ? MasterClassContent : pageContent;
  const [content, setContent] = useState(repository);
  const [masterClassCard, setMasterClassCard] = useState(
    MasterClassContent.section4_masterclass
  );
  // MasterClassContent.section4_masterclass

  useEffect(() => {
    const repository = localDataRepositoryOnly
      ? MasterClassContent
      : pageContent;
    setContent(repository);
  }, [localDataRepositoryOnly, pageContent]);

  const handleAddPartner = () => {
    setMasterClassCard([
      ...masterClassCard,
      {
        title: "M. Class Title",
        date: getCurrentDateTime("date"),
        time: getCurrentDateTime("time"),
        location: "TBD",
        eticket_link: "LINK TBD",
        ref: "",
      },
    ]);
  };

  const handleRemoveLastPartner = () => {
    setMasterClassCard(masterClassCard.slice(0, -1));
  };

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
          <Box
            bgcolor={isMobile ? "background.default" : "background.alternate"}
          >
            <Container sx={{ height: "100%" }}>
              <ImageText
                img={content.section1_master[0].image_path}
                title={content.section1_master[0].title}
                description={content.section1_master[0].description}
                isMobile={isMobile}
              />
              <ButtonCustomAdmin
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section1_master, null, null)
                }
              />
            </Container>
          </Box>

          {/* Section 2 */}
          <Container sx={{ height: "100%" }}>
            <CardContainerList
              cardsData={content.section2_cards}
              showCardContent={true}
              showTitle={true}
              showDescription={false}
            />
            <ButtonCustomAdmin
              label="Edit section"
              onClick={() =>
                handleOpenModal(null, content.section2_cards, null, null)
              }
            />
          </Container>

          {/* Section 3 */}
          <Box
            bgcolor={isMobile ? "background.default" : "background.alternate"}
          >
            <Container sx={{ height: "100%" }}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
                my={10}
              >
                <YouTubeVideo videoId={content.section3_youtube[0].video} />
              </Box>
              <ButtonCustomAdmin
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section3_youtube, null, null)
                }
              />
            </Container>
          </Box>

          {/* Section 4 */}
          <Container sx={{ height: "100%" }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h5" color={"text.primary"} mt={2}>
                {content.section4_masterclass_title[0].title}
              </Typography>

              <CardContainerList
                cardsData={content.section4_masterclass}
                isCardEticket={true}
              />
            </Box>

            <Box display={"flex"}>
              <Box sx={{ marginRight: "10px" }}>
                <ButtonCustomAdmin
                  width="150px"
                  label="Edit section"
                  onClick={() =>
                    handleOpenModal(
                      null,
                      content.section4_masterclass,
                      null,
                      null
                    )
                  }
                />
              </Box>

              <Box sx={{ marginRight: "10px" }}>
                <ButtonCustomAdmin
                  width="150px"
                  label="Add"
                  onClick={() => handleAddPartner()}
                  style={{ marginRight: "10px" }}
                />
              </Box>

              <Box sx={{ marginRight: "10px" }}>
                <ButtonCustomAdmin
                  width="160px"
                  label="Remove"
                  onClick={() => handleRemoveLastPartner()}
                  style={{ marginRight: "10px" }}
                />
              </Box>
            </Box>
          </Container>

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

export default MasterClass;
