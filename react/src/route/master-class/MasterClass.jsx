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
import {
  getCurrentDateTime,
  getLastReference,
} from "../../util/generalFunctions";
import {
  deleteGeneralCards,
  fetchGeneralCards,
  updateGeneralCards,
} from "../../api/api";
import BoxCustom from "../../components/box-custom/BoxCustom";

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
  const [addingCard, setAddingCard] = useState(false);
  const [removingCard, setRemovingCard] = useState(false);

  useEffect(() => {
    const repository = localDataRepositoryOnly
      ? MasterClassContent
      : pageContent;
    setContent(repository);
  }, [localDataRepositoryOnly, pageContent]);

  const handleAddNewMasterClass = async () => {
    setAddingCard(true);

    // Determine the index for the next array element
    const nextIndex =
      content.section4_masterclass.length > 0
        ? content.section4_masterclass.length + 1
        : 1;

    const reference = `masterclass_content-section_class-${nextIndex}`;

    const newMasterClass = {
      page: page,
      section: "section4_masterclass",
      reference: reference,
      title: "Enter Title",
      description: null,
      video: null,
      date_info: getCurrentDateTime("date"),
      time_info: getCurrentDateTime("time"),
      location_info: "Enter location",
      eticket_link: "Enter e-ticket link",
    };

    try {
      await updateGeneralCards(reference, newMasterClass);
      // console.log("New post created successfully!");
      // Fetch updated data from the server
      const updatedContent = await fetchGeneralCards(page);
      setContent(updatedContent);
    } catch (error) {
      console.error("Error creating new card:", error);
      throw error;
    } finally {
      setAddingCard(false);
    }
  };

  const handleRemoveLastMasterClass = async () => {
    setRemovingCard(true);

    const lastReference = getLastReference(content.section4_masterclass);

    try {
      await deleteGeneralCards(lastReference);
      const updatedContent = await fetchGeneralCards(page);
      setContent(updatedContent);
    } catch (error) {
      console.error("Error deleting last card:", error);
      throw error;
    } finally {
      setRemovingCard(false);
    }
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
          <BoxCustom
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
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section1_master, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 2 */}
          <BoxCustom>
            <Container sx={{ height: "100%" }}>
              <CardContainerList
                cardsData={content.section2_cards}
                showCardContent={true}
                showTitle={true}
                showDescription={false}
              />
              <ButtonCustomAdmin
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section2_cards, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 3 */}
          <BoxCustom
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
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section3_youtube, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 4 */}
          <BoxCustom>
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

                {addingCard && (
                  <Typography>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      style={{ marginRight: "0.5rem" }}
                    />{" "}
                    Wait a moment, adding new card.
                  </Typography>
                )}

                {removingCard && (
                  <Typography>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      style={{ marginRight: "0.5rem" }}
                    />{" "}
                    Wait a moment, removing last card.
                  </Typography>
                )}
              </Box>

              <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
                <Box sx={{ marginRight: "10px" }}>
                  <ButtonCustomAdmin
                    width={isMobile ? "100%" : "160px"}
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
                    width={isMobile ? "100%" : "160px"}
                    label="Add New"
                    onClick={() => handleAddNewMasterClass()}
                    style={{ marginRight: "10px" }}
                  />
                </Box>

                <Box sx={{ marginRight: "10px" }}>
                  <ButtonCustomAdmin
                    width={isMobile ? "100%" : "160px"}
                    label="Remove Last"
                    onClick={() => handleRemoveLastMasterClass()}
                    style={{ marginRight: "10px" }}
                  />
                </Box>
              </Box>
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

export default MasterClass;
