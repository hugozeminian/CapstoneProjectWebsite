import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CarouselImages from "../../components/carousel-images/CarouselImages";
import HomeContent from "../../repository/HomeContent";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import { LocationOnOutlined } from "@mui/icons-material";
import { IsMobile } from "../../util/generalFunctions";
import ButtonCustom from "../../components/button-custom/ButtonCustom";
import ModalServices from "../../components/modal-services/ModalServices";
import TypeOfModal from "../../repository/ModalType";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [objContent, setObjContent] = useState(null);

  const handleOpeModal = (obj) => {
    setOpenModal(true);
    setObjContent(obj);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const isMobile = IsMobile();

  return (
    <>
      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselImages images={HomeContent.section1_carousel} />
          <ButtonCustom
            label="Edit section"
            onClick={() => handleOpeModal(HomeContent.section1_carousel)}
          />
        </Container>
      </Box>

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
        <ButtonCustom
          label="Edit section"
          onClick={() => handleOpeModal(HomeContent.section2_phrase)}
        />
      </Container>

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
          <ButtonCustom
            label="Edit section"
            onClick={() => handleOpeModal(HomeContent.section3_phrase)}
          />
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={HomeContent.section4_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
        <ButtonCustom
          label="Edit section"
          onClick={() => handleOpeModal(HomeContent.section4_cards)}
        />
      </Container>

      <ImageBackgroundText
        img={HomeContent.section5_phrase[0].img}
        mainText={HomeContent.section5_phrase[0].title}
        smallText={HomeContent.section5_phrase[0].desc}
        isMobile={isMobile}
      />
      <Container>
        <ButtonCustom
          label="Edit section"
          onClick={() => handleOpeModal(HomeContent.section5_phrase)}
        />
      </Container>

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
          <ButtonCustom
            label="Edit section"
            onClick={() => handleOpeModal(HomeContent.section6_define)}
          />
        </Container>
      </Box>

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
          <ButtonCustom
            label="Edit section"
            onClick={() => handleOpeModal(HomeContent.section7_area)}
          />
        </Container>
      </Box>

      <ModalServices
        open={openModal}
        onClose={handleCloseModal}
        obj={objContent}
        modalType={TypeOfModal.adm}
      />
    </>
  );
};

export default Home;
