import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ModalServices from "../modal-services/ModalServices";

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
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpeModal = () => {
    setOpenModal(true);
  };

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
    </Card>
  );
};

export default CardService;
