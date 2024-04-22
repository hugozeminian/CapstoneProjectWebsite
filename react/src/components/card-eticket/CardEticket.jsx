import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import ButtonCustom from "../button-custom/ButtonCustom";
import { formatDate, formatTime } from "../../util/generalFunctions";
import { Box } from "@mui/material";

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
          maxWidth: 350,
          width: 350,
          borderRadius: 8,
          boxShadow: 3,
          bgcolor: "background.alternate",
          my: 4,
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: 9,
          },
        }}
      >
        <CardContent>
          {/* Rendering card title */}
          <Box style={{ height: "100px" }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              textAlign={"center"}
              mb={2}
            >
              {cardTitle}
            </Typography>
          </Box>

          {/* Rendering card date */}
          {/* <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Date: {formatDate(cardDate)}
          </Typography> */}
          <Typography variant="body1" textAlign="center" mb={2}>
            <strong>Date:</strong> {formatDate(cardDate)}
          </Typography>

          {/* Rendering card time */}
          {/* <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Time: {formatTime(cardTime)}
          </Typography> */}
          <Typography variant="body1" textAlign="center" mb={2}>
            <strong>Time:</strong> {formatTime(cardTime)}
          </Typography>

          {/* Rendering card location */}
          {/* <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Location: {cardLocation}
          </Typography> */}
          <Typography variant="body1" textAlign="center" mb={2}>
            <strong>Location:</strong> {cardLocation}
          </Typography>
        </CardContent>

        {/* Rendering button to get E-ticket */}
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
