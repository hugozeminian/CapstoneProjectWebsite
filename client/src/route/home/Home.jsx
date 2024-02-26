import React from "react";
import { Container, Typography } from "@mui/material";
import CarouselImages from "../../components/carousel-images/CarouselImages";
import HomeContent from "../../repository/HomeContent";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackgroud-text/ImageBackgroundText";
import { LocationOnOutlined } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <Container sx={{ height: "100%" }}>
        <CarouselImages images={HomeContent.section1_carousel}/>

        <Typography
          variant="h3"
          my={"20px"}
          minHeight={"200px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"text.primary"}>
          {HomeContent.section2_phrase[0].desc}
        </Typography>

        <Typography
          variant="h6"
          minHeight={"200px"}
          bgcolor={"background.alternate"}
          color={"text.primary"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ py: 5, px: 10, textAlign: "justify" }}>
          {HomeContent.section3_phrase[0].desc}
        </Typography>

        <CardContainerList cardsData={HomeContent.section4_cards} showCardContent={true} showTitle={true} showDescription={false}/>

        <ImageBackgroundText
          img={HomeContent.section5_phrase[0].img}
          mainText={HomeContent.section5_phrase[0].title}
          smallText={HomeContent.section5_phrase[0].desc}
        />

        <Typography
          variant="h6"
          minHeight={"200px"}
          bgcolor={"background.default"}
          color={"text.primary"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ py: 5, px: 10, textAlign: "justify" }}>
          {HomeContent.section6_define[0].title}
        </Typography>

        <Typography
          variant="h6"
          minHeight={"200px"}
          bgcolor={"background.alternate"}
          color={"text.primary"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ py: 5, px: 10, textAlign: "justify" }}>
          <LocationOnOutlined /> {HomeContent.section7_area[0].title}
        </Typography>

      </Container>
    </>
  );
};

export default Home;
