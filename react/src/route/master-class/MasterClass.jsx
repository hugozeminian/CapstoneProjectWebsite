{
  /*
In this code, a functional component called MasterClass is defined, which represents the master class page of the application. 
It displays various sections of content such as images with text, YouTube videos, and card containers. 
It utilizes Material-UI components like Box and Container, as well as custom components like ImageText, ButtonCustomAdmin, YouTubeVideo, CardContainerList, and ModalServices. 
The content for each section is fetched from a repository (MasterClassContent). 
Additionally, it uses a custom hook (modalServicesHook) to manage modal functionality for editing content.
 */
}
import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import MasterClassContent from "../../repository/MasterClassContent";
import ImageText from "../../components/image-text/ImageText";
import ButtonCustomAdmin from "../../components/button-custom-admin/ButtonCustomAdmin";
import YouTubeVideo from "../../components/youtube/YouTube";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ModalServices from "../../components/modal-services/ModalServices";
import usePageData from "../../components/use-page-data-hook/usePageDataHook";
import { pageNames, loading } from "../../repository/ApiParameters";
import { getCurrentDateTime } from "../../util/generalFunctions";

const MasterClass = () => {
  const [masterClassCard, setMasterClassCard] = useState(
    MasterClassContent.section4_masterclass
  );

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

  const page = pageNames.masterclass;

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
            img={MasterClassContent.section1_master[0].image_path}
            title={MasterClassContent.section1_master[0].title}
            description={MasterClassContent.section1_master[0].description}
            isMobile={isMobile}
          />
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(MasterClassContent.section1_master)}
          />
        </Container>
      </Box>

      {/* Section 2 */}
      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={MasterClassContent.section2_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
        <ButtonCustomAdmin
          label="Edit section"
          onClick={() => handleOpenModal(MasterClassContent.section2_cards)}
        />
      </Container>

      {/* Section 3 */}
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            my={10}
          >
            <YouTubeVideo
              videoId={MasterClassContent.section3_youtube[0].video}
            />
          </Box>
          <ButtonCustomAdmin
            label="Edit section"
            onClick={() => handleOpenModal(MasterClassContent.section3_youtube)}
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
            {MasterClassContent.section4_masterclass_title[0].title}
          </Typography>

          <CardContainerList cardsData={masterClassCard} isCardEticket={true} />
        </Box>

        <Box display={"flex"}>
          <Box sx={{ marginRight: "10px" }}>
            <ButtonCustomAdmin
              width="150px"
              label="Edit section"
              onClick={() => handleOpenModal(masterClassCard)}
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
        obj={objContent}
        modalType={typeOfModal.adm}
      />
    </>
  );
};

export default MasterClass;
