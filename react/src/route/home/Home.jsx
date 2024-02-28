import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CarouselImages from "../../components/carousel-images/CarouselImages";
import HomeContent from "../../repository/HomeContent";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import { LocationOnOutlined } from "@mui/icons-material";
import { IsMobile } from "../../util/generalFunctions";

const Home = () => {
  const isMobile = IsMobile();

  return (
    <>
      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselImages images={HomeContent.section1_carousel} />
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
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={HomeContent.section4_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
      </Container>

      <ImageBackgroundText
        img={HomeContent.section5_phrase[0].img}
        mainText={HomeContent.section5_phrase[0].title}
        smallText={HomeContent.section5_phrase[0].desc}
        isMobile={isMobile}
      />

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
        </Container>
      </Box>
    </>
  );
};

export default Home;
