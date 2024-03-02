import React from "react";
import CardService from "../card/CardService";
import { Box } from "@mui/material";

const CardContainerList = ({
  cardsData,
  showCardContent,
  showTitle,
  showDescription,
  modalType,
}) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        my={10}
        sx={{ flexWrap: "wrap" }}
      >
        {cardsData.map((cardData, index) => (
          <CardService
            key={index}
            index={index}
            cardImg={cardData.img}
            cardTitle={cardData.title}
            cardDesc={cardData.desc}
            showCardContent={showCardContent}
            showTitle={showTitle}
            showDescription={showDescription}
            cardsData={cardsData}
            modalType={modalType}
          />
        ))}
      </Box>
    </>
  );
};

export default CardContainerList;
