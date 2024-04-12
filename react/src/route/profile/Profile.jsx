{
  /*
In this code, a functional component called Profile is defined, which represents the profile page of the application. 
It displays profile information, a YouTube video, and partner information. Users can edit each section by clicking on the "Edit section" button, 
which opens a modal for editing the content. 
The layout adjusts dynamically based on whether the device is mobile or not.
 */
}
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ImageText from "../../components/image-text/ImageText.jsx";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin.jsx";
import ProfileContent from "../../repository/ProfileContent.js";
import YouTubeVideo from "../../components/youtube/YouTube.jsx";
import CardContainerList from "../../components/card-container-list/CardContainerList.jsx";
import ModalServices from "../../components/modal-services/ModalServices";
import UsePageData from "../../components/use-page-data-hook/UsePageDataHook.jsx";
import { pageNames, loadingText } from "../../repository/ApiParameters";
import {
  deleteGeneralCards,
  fetchGeneralCards,
  updateGeneralCards,
} from "../../api/api";
import BoxCustom from "../../components/box-custom/BoxCustom.jsx";
import { getLastReference } from "../../util/generalFunctions.js";
import newPartnerImage from "../../assets/img/handshake-solid.svg";
import FileInput from "../../components/file-input/FileInput.jsx";

const Profile = () => {
  const page = pageNames.profile;

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

  const repository = localDataRepositoryOnly ? ProfileContent : pageContent;
  const [content, setContent] = useState(repository);
  const [addingCard, setAddingCard] = useState(false);
  const [removingCard, setRemovingCard] = useState(false);

  useEffect(() => {
    const repository = localDataRepositoryOnly ? ProfileContent : pageContent;
    setContent(repository);
  }, [localDataRepositoryOnly, pageContent]);

  const handleAddNewPartner = async (selectedFile) => {
    setAddingCard(true);

    // Determine the index for the next array element
    const nextIndex =
      content.section3_partners.length > 0
        ? content.section3_partners.length + 1
        : 1;

    const reference = `profile_content-section3_partners-${nextIndex}`;

    const newPartner = {
      page: page,
      section: "section3_partners",
      reference: reference,
      title: "",
      description: "",
      video: "",
      date_info: "",
      time_info: "",
      location_info: "",
      eticket_link: "",
      imagefile: selectedFile,
    };

    const formData = new FormData();

    for (const key in newPartner) {
      if (Object.hasOwnProperty.call(newPartner, key)) {
        formData.append(key, newPartner[key]);
      }
    }

    try {
      await updateGeneralCards(reference, formData);
      // console.log("New post created successfully!");
      // Fetch updated data from the server
      const updatedContent = await fetchGeneralCards();
      setContent(updatedContent);
    } catch (error) {
      console.error("Error creating new card:", error);
      throw error;
    } finally {
      setAddingCard(false);
    }
  };

  const handleRemoveLastPartner = async () => {
    setRemovingCard(true);

    const lastReference = getLastReference(content.section3_partners);

    try {
      await deleteGeneralCards(lastReference);
      const updatedContent = await fetchGeneralCards();
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
                img={content.section1_profile[0].image_path}
                title={content.section1_profile[0].title}
                description={content.section1_profile[0].description}
                isMobile={isMobile}
                useAvatar={true}
              />
              <ButtonCustomAdmin
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section1_profile, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 2 */}
          <BoxCustom>
            <Container sx={{ height: "100%" }}>
              <Box display={"flex"} justifyContent={"center"} my={10}>
                <YouTubeVideo videoId={content.section2_youtube[0].video} />
              </Box>
              <ButtonCustomAdmin
                width={isMobile ? "100%" : "160px"}
                label="Edit section"
                onClick={() =>
                  handleOpenModal(null, content.section2_youtube, null, null)
                }
              />
            </Container>
          </BoxCustom>

          {/* Section 3 */}
          <BoxCustom bgcolor="background.alternate">
            <Container sx={{ height: "100%" }}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h5" color={"text.primary"} mt={2}>
                  {content.section3_partners_title[0].title}
                </Typography>

                <CardContainerList
                  cardsData={content.section3_partners}
                  showCardContent={false}
                  showTitle={false}
                  showDescription={false}
                  isModalDisable={true}
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
                        content.section3_partners,
                        null,
                        null
                      )
                    }
                  />
                </Box>

                <FileInput
                  onFileChange={handleAddNewPartner}
                  index={0}
                  regularButtonShape={true}
                />

                <Box sx={{ marginRight: "10px" }}>
                  <ButtonCustomAdmin
                    width={isMobile ? "100%" : "160px"}
                    label="Remove Last"
                    onClick={() => handleRemoveLastPartner()}
                    style={{ marginRight: "10px" }}
                  />
                </Box>
              </Box>
            </Container>
          </BoxCustom>

          {/* ModalServices component for editing content */}
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

export default Profile; // Exporting the Profile component as default
