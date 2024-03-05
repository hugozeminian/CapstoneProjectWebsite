{/*
This code defines a React functional component called CardContainerList, 
which renders a container holding either CardService or CardEticket components based on the isCardEticket flag. 
It maps over the cardsData array to render individual cards and applies appropriate props based on the component being rendered. 
The styles are applied using the sx prop provided by Material-UI.
*/}
import React from "react"; // Importing React library for using React components
import CardService from "../card/CardService"; // Importing CardService component
import CardEticket from "../card-eticket/CardEticket";  // Importing CardEticket component
import { Box } from "@mui/material"; // Importing Box component from Material-UI

// Defining a functional component CardContainerList
const CardContainerList = ({
  cardsData, // Data for cards
  showCardContent, // Flag to determine if card content should be shown
  showTitle, // Flag to determine if card title should be shown
  showDescription, // Flag to determine if card description should be shown
  modalType, // Type of modal
  isModalDisable = false, // Flag to determine if modal is disabled, default is false
  isCardEticket = false, // Flag to determine if card is an eticket card, default is false
}) => {
  return (
    <>
    {/* Container to hold cards */}
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        my={10} // Adding margin on y-axis
        sx={{ flexWrap: "wrap" }} // Setting flex-wrap property to wrap
      >
         {/* Rendering CardService or CardEticket based on isCardEticket flag */}
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
//Exporting CardContainerList component as default
