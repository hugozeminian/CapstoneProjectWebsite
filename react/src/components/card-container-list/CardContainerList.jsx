import React from "react";
import CardService from "../card/CardService";
import CardEticket from "../card-eticket/CardEticket";
import { Box, Typography } from "@mui/material";

/**
 * A container component for rendering a list of cards.
 * @param {object} props - The props for the CardContainerList component.
 * @param {object[]} props.cardsData - The data for all cards to be rendered.
 * @param {boolean} props.showCardContent - Flag to determine if card content should be shown.
 * @param {boolean} props.showTitle - Flag to determine if card title should be shown.
 * @param {boolean} props.showDescription - Flag to determine if card description should be shown.
 * @param {string} props.modalType - Type of modal to be used.
 * @param {boolean} [props.isModalDisable=false] - Flag to determine if modal is disabled. Default is false.
 * @param {boolean} [props.isCardEticket=false] - Flag to determine if card is an eticket card. Default is false.
 * @returns {JSX.Element} - Returns the CardContainerList component.
 */
const CardContainerList = ({
  cardsData,
  showCardContent,
  showTitle,
  showDescription,
  modalType,
  isModalDisable = false,
  isCardEticket = false,
}) => {

  // If cardsData is empty, display a message
  if (cardsData.length === 0) {
    return (
      <Box display="flex" justifyContent="center" my={5}>
        <Typography variant="body1">No content yet in this section.</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        my={10}
        sx={{ flexWrap: "wrap" }}
        width={"100%"}
      >
        {/* Rendering CardService or CardEticket based on isCardEticket flag */}
        {!isCardEticket
          ? cardsData.map((cardData, index) => (
              <CardService
                key={index}
                index={index}
                cardImg={cardData.image_path}
                cardTitle={cardData.title}
                cardDesc={cardData.description}
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
                cardDate={cardData.date_info}
                cardTime={cardData.time_info}
                cardLocation={cardData.location_info}
                cardLink={cardData.eticket_link}
              />
            ))}
      </Box>
    </>
  );
};

export default CardContainerList;
