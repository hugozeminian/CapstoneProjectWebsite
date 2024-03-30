{
  /*
In this code, a functional component called Profile is defined, which represents the profile page of the application. 
It displays profile information, a YouTube video, and partner information. Users can edit each section by clicking on the "Edit section" button, 
which opens a modal for editing the content. 
The layout adjusts dynamically based on whether the device is mobile or not.
 */
}
import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ImageText from "../../components/image-text/ImageText.jsx";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin.jsx";
import ProfileContent from "../../repository/ProfileContent.js";
import YouTubeVideo from "../../components/youtube/YouTube.jsx";
import CardContainerList from "../../components/card-container-list/CardContainerList.jsx";
import ModalServices from "../../components/modal-services/ModalServices";
import usePageData from "../../components/use-page-data-hook/usePageDataHook.jsx";
import { pageNames, loading } from "../../repository/ApiParameters";

const Profile = () => {
  const [partners, setPartners] = useState(ProfileContent.section3_partners);

  const handleAddPartner = () => {
    setPartners([
      ...partners,
      {
        img: "https://via.placeholder.com/600x400?text=Image",
        title: "",
        desc: "",
        ref: "",
      },
    ]);
  };

  const handleRemoveLastPartner = () => {
    setPartners(partners.slice(0, -1));
  };

  const page = pageNames.profile;

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
    FontAwesomeIcon,
    faSpinner,
  } = usePageData(page);

  // if (isLoading) {
  //   return (
  //     <Container
  //       sx={{
  //         height: "auto",
  //       }}
  //     >
  //       <Box
  //         display="flex"
  //         justifyContent="center"
  //         alignItems="center"
  //         sx={{
  //           minHeight:
  //             calcDifViewHeigh > window.innerHeight
  //               ? "auto"
  //               : `calc(100vh - ${calcDifViewHeigh}px)`,
  //         }}
  //       >
  //         <FontAwesomeIcon
  //           icon={faSpinner}
  //           spin
  //           style={{ marginRight: "0.5rem" }}
  //         />
  //         {loading.text}
  //       </Box>
  //     </Container>
  //   ); // Render loading indicator
  // }

  return (
    <>
      {/* Section 1 */}
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <ImageText
            img={ProfileContent.section1_profile[0].image_path}
            title={ProfileContent.section1_profile[0].title}
            description={ProfileContent.section1_profile[0].description}
            isMobile={isMobile}
            useAvatar={true}
          />
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(ProfileContent.section1_profile)}
          />
        </Container>
      </Box>

      {/* Section 2 */}
      <Container sx={{ height: "100%" }}>
        <Box display={"flex"} justifyContent={"center"} my={10}>
          <YouTubeVideo videoId={ProfileContent.section2_youtube[0].video} />
        </Box>
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(ProfileContent.section2_youtube)}
        />
      </Container>

      {/* Section 3 */}
      <Box bgcolor="background.alternate">
        <Container sx={{ height: "100%" }}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h5" color={"text.primary"} mt={2}>
              {ProfileContent.section3_partners_title[0].title}
            </Typography>

            <CardContainerList
              cardsData={partners}
              showCardContent={false}
              showTitle={false}
              showDescription={false}
              isModalDisable={true}
            />
          </Box>

          <Box display={"flex"}>
            <Box sx={{ marginRight: "10px" }}>
              <ButtonCustomAdmin
                width="150px"
                label="Edit section"
                onClick={() =>
                  handleOpenModal(ProfileContent.section3_partners)
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
      </Box>

      {/* ModalServices component for editing content */}
      <ModalServices
        open={openModal}
        onClose={handleCloseModal}
        obj={objContent}
        modalType={typeOfModal.adm}
      />
    </>
  );
};

export default Profile; // Exporting the Profile component as default
