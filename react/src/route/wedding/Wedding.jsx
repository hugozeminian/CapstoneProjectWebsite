import React from "react";
import { Box, Container } from "@mui/material";
import ImageText from "../../components/image-text/ImageText";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackground-text/ImageBackgroundText";
import CarouselTestimonials from "../../components/carousel-testimonials/CarouseltesTimonials";
import { IsMobile } from "../../util/generalFunctions";

import WeddingContent from "../../repository/WeddingContent";

const Wedding = () => {
  const isMobile = IsMobile();

  return (
    <>
      <Box bgcolor={isMobile ? "background.default" : "background.alternate"}>
        <Container sx={{ height: "100%" }}>
          <ImageText
            img={WeddingContent.section1_image_text.img}
            title={WeddingContent.section1_image_text.title}
            description={WeddingContent.section1_image_text.desc}
            isMobile={isMobile}
          />
        </Container>
      </Box>

      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={WeddingContent.section2_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />
      </Container>

      <ImageBackgroundText
        img={WeddingContent.section3_phrase.img}
        mainText={WeddingContent.section3_phrase.title}
        smallText={WeddingContent.section3_phrase.desc}
        isMobile={isMobile}
      />

      <Container sx={{ height: "100%" }}>
        <CardContainerList
          cardsData={WeddingContent.section4_photos}
          showTitle={true}
          showDescription={false}
        />
      </Container>

      <Box bgcolor={"background.alternate"} p={2}>
        <Container sx={{ height: "100%" }}>
          <CarouselTestimonials
            testimonies={WeddingContent.section5_testimonials}
            isMobile={isMobile}
          />
        </Container>
      </Box>
    </>
  );
};

export default Wedding;
