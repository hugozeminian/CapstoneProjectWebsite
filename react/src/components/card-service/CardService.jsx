import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardService = ({ cardImg, cardTitle, cardDesc, showCardContent, showTitle, showDescription }) => {
  return (
    <Card sx={{ maxWidth: 300, width: 300, bgcolor: "background.alternate", my: 4 }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={cardImg} alt="card service" />
        {showCardContent && (
          <CardContent>
            {showTitle && (
              <Typography gutterBottom variant="h5" component="div">
                {cardTitle}
              </Typography>
            )}
            {showDescription && (
              <Typography variant="body2" color="text.secondary">
                {cardDesc}
              </Typography>
            )}
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};

export default CardService;
