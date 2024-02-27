import React from "react";
import { Container } from "@mui/material";
import ImageText from "../../components/imagem-text/ImageText";
import CardContainerList from "../../components/card-container-list/CardContainerList";
import ImageBackgroundText from "../../components/imageBackgroud-text/ImageBackgroundText";

import WeddingContent from "../../repository/WeddingContent";
import CarouselTestemonials from "../../components/carousel-testemonials/CarouselTestemonials";

const Wedding = () => {
  return (
    <>
      <Container sx={{ height: "100%" }}>
        <ImageText
          img={WeddingContent.section1_image_text.img}
          title={WeddingContent.section1_image_text.title}
          description={WeddingContent.section1_image_text.desc}
        />

        <CardContainerList
          cardsData={WeddingContent.section2_cards}
          showCardContent={true}
          showTitle={true}
          showDescription={false}
        />

        <ImageBackgroundText
          img={WeddingContent.section3_phrase.img}
          mainText={WeddingContent.section3_phrase.title}
          smallText={WeddingContent.section3_phrase.desc}
        />

        <CardContainerList
          cardsData={WeddingContent.section4_photos}
          showTitle={true}
          showDescription={false}
        />

        <CarouselTestemonials
          testimonies={WeddingContent.section5_testimonials}
        />
      </Container>
    </>
  );
};

export default Wedding;
