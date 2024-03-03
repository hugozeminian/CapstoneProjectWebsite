import React from "react";
import CardService from "../card/CardService";
import CardEticket from "../card-eticket/CardEticket";
import { Box } from "@mui/material";

const CardContainerList = ({
  cardsData,
  showCardContent,
  showTitle,
  showDescription,
  modalType,
  isModalDisable = false,
  isCardEticket = false,
}) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        my={10}
        sx={{ flexWrap: "wrap" }}
      >
        {!isCardEticket
          ? cardsData.map((cardData, index) => (
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
                isModalDisable={isModalDisable}
              />
            ))
          : cardsData.map((cardData, index) => (
              <CardEticket
                key={index}
                index={index}
                cardTitle={cardData.title}
                cardDate={cardData.date}
                cardTime={cardData.time}
                cardLocation={cardData.location}
                cardLink={cardData.eticket_link}
              />
            ))}
      </Box>
    </>
  );
};

export default CardContainerList;
