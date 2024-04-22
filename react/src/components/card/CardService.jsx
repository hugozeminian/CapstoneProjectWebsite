import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ModalServices from "../modal-services/ModalServices";

/**
 * A card component representing a service or item, with optional title, description, and image.
 * @param {object} props - The props for the CardService component.
 * @param {number} props.index - The index of the card in the list.
 * @param {string} props.cardImg - The URL of the card image.
 * @param {string} props.cardTitle - The title of the card.
 * @param {string} props.cardDesc - The description of the card.
 * @param {boolean} props.showCardContent - Flag to determine if card content should be shown.
 * @param {boolean} props.showTitle - Flag to determine if card title should be shown.
 * @param {boolean} props.showDescription - Flag to determine if card description should be shown.
 * @param {object[]} props.cardsData - The data for all cards.
 * @param {string} props.modalType - The type of modal to display.
 * @param {boolean} props.isModalDisable - Flag to determine if modal is disabled.
 * @returns {JSX.Element} - Returns the CardService component.
 */
const CardService = ({
  index,
  cardImg,
  cardTitle,
  cardDesc,
  showCardContent,
  showTitle,
  showDescription,
  cardsData,
  modalType,
  isModalDisable,
}) => {
  const [openModal, setOpenModal] = useState(false);

  /**
   * Handles opening the modal.
   */
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  /**
   * Handles closing the modal.
   */
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
      <CardActionArea onClick={handleOpenModal}>
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
