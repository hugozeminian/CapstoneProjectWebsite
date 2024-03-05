{/*
This code defines a React functional component called CardEticket, 
which renders a card for an event with details such as title, date, time, and location. 
It also includes a button to get the E-ticket, which opens the provided link in a new tab when clicked. 
The styles are applied using the sx prop provided by Material-UI.
 */}
import React from "react"; // Importing React library for using React components
import Card from "@mui/material/Card"; // Importing Card component from Material-UI
import CardContent from "@mui/material/CardContent"; // Importing CardContent component from Material-UI
import Typography from "@mui/material/Typography"; // Importing Typography component from Material-UI
import { CardActions } from "@mui/material"; // Importing CardActions component from Material-UI
import ButtonCustom from "../button-custom/ButtonCustom"; // Importing ButtonCustom component
 
// Defining a functional component CardEticket
const CardEticket = ({
  cardTitle, // Title of the eticket card
  cardDate, // Date of the event
  cardTime,
  cardLocation,
  cardLink, // Link to get the E-ticket
}) => {
   // Function to open link in new tab
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
             {/* Rendering card title */}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {cardTitle}
          </Typography>

            {/* Rendering card date */}
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Date: {cardDate}
          </Typography>

              {/* Rendering card time */}
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Time: {cardTime}
          </Typography>

             {/* Rendering card location */}
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            Location: {cardLocation}
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
// Exporting CardEticket component as default