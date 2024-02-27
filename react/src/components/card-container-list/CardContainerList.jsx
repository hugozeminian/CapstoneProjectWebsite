import React from "react";
import CardService from "../card-service/CardService";
import { Box } from "@mui/material";

const CardContainerList = ({ cardsData, showCardContent, showTitle, showDescription }) => {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-evenly"} my={10} sx={{ flexWrap: "wrap" }}>
        {cardsData.map((cardData, index) => (
          <CardService
            key={index}
            cardImg={cardData.img}
            cardTitle={cardData.title}
            cardDesc={cardData.desc}
            showCardContent={showCardContent}
            showTitle={showTitle}
            showDescription={showDescription}
          />
        ))}
      </Box>
    </>
  );
};

export default CardContainerList;
