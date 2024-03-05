{/*This code defines a React functional component called CardService, 
which renders a card with customizable properties such as image, title, and description. 
It also includes the functionality to open a modal when the card is clicked. 
The modal is conditionally rendered based on the isModalDisable prop. 
The styles are applied using the sx prop provided by Material-UI. */}

import React, { useState } from "react"; // Importing React and useState hooks
import Card from "@mui/material/Card"; // Importing Card component from Material-UI
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography"; // Importing Typography component from Material-UI
import { CardActionArea } from "@mui/material"; // Importing CardActionArea component from Material-UI
import ModalServices from "../modal-services/ModalServices"; // Importing ModalServices component

// Defining a functional component CardService
const CardService = ({
  index, // Index of the card
  cardImg, // Image source for the card
  cardTitle,
  cardDesc,
  showCardContent, // Flag to determine if card content should be shown
  showTitle, // Flag to determine if card title should be shown
  showDescription, // Flag to determine if card description should be shown
  cardsData, // Data related to cards
  modalType,  // Type of modal
  isModalDisable, // Flag to determine if modal is disabled
}) => {
  const [openModal, setOpenModal] = useState(false); // State to manage modal open/close

   // Function to handle opening modal
  const handleOpeModal = () => {
    setOpenModal(true);
  };

   // Function to handle closing modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        width: 300,
        bgcolor: "background.alternate",
        my: 4,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.10)",
        },
      }}
    >
      <CardActionArea onClick={handleOpeModal}>
        <CardMedia
          component="img"
          height="250"
          image={cardImg}
          alt="card service"
        />
        {showCardContent && (
          <CardContent>
            {showTitle && (
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                {cardTitle}
              </Typography>
            )}
            {showDescription && (
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign={"justify"}
              >
                {cardDesc}
              </Typography>
            )}
          </CardContent>
        )}
      </CardActionArea>

  {/* Rendering ModalServices component if modal is not disabled */}
      {!isModalDisable && (
        <ModalServices
          open={openModal}
          onClose={handleCloseModal}
          img={cardImg}
          title={cardTitle}
          desc={cardDesc}
          cardsData={cardsData}
          modalType={modalType}
          index={index}
        />
      )}
    </Card>
  );
};

export default CardService;
// Exporting CardService component as default