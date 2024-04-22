import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import ButtonCustom from "../button-custom/ButtonCustom";
import { formatDate, formatTime } from "../../util/generalFunctions";
import { Box } from "@mui/material";

/**
 * A card component representing an e-ticket.
 * @param {object} props - The props for the CardEticket component.
 * @param {string} props.cardTitle - The title of the e-ticket.
 * @param {string} props.cardDate - The date of the e-ticket.
 * @param {string} props.cardTime - The time of the e-ticket.
 * @param {string} props.cardLocation - The location of the e-ticket.
 * @param {string} props.cardLink - The link to the e-ticket.
 * @returns {JSX.Element} - Returns the CardEticket component.
 */
const CardEticket = ({
  cardTitle,
  cardDate,
  cardTime,
  cardLocation,
  cardLink,
}) => {
  /**
   * Opens the e-ticket link in a new tab.
   * @param {string} url - The URL of the e-ticket.
   */
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
          <Typography variant="body1" textAlign="center" mb={2}>
            <strong>Date:</strong> {formatDate(cardDate)}
          </Typography>

          {/* Rendering card time */}
          <Typography variant="body1" textAlign="center" mb={2}>
            <strong>Time:</strong> {formatTime(cardTime)}
          </Typography>

          {/* Rendering card location */}
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
