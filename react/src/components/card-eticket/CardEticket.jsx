import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import ButtonCustom from "../button-custom/ButtonCustom";

const CardEticket = ({
  cardTitle,
  cardDate,
  cardTime,
  cardLocation,
  cardLink,
}) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
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
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {cardTitle}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Date: {cardDate}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Time: {cardTime}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Location: {cardLocation}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          <ButtonCustom
            label="Get E-ticket"
            onClick={() => openInNewTab(cardLink)}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default CardEticket;
