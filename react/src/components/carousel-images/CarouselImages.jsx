{/*
This code defines a React functional component called CarouselImages, 
which renders a carousel of images using the Carousel component from react-material-ui-carousel. 
Each image is displayed within a Paper component with an aspect ratio of 16:9. 
The styles for the Paper and img elements are applied using the styled function from Material-UI.
 */}

import React from "react"; 
import Carousel from "react-material-ui-carousel"; 
import { Paper } from "@mui/material";
import { styled } from "@mui/system"; 


const StyledPaper = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingTop: "56.25%", // 16:9 aspect ratio (9 / 16 = 0.5625)
  position: "relative",
});

const StyledImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const CarouselImages = (props) => {
  const { images, width = "100%", indexImage} = props;
  return (

    <Carousel sx={{ width: width }} index={indexImage}>
      {images.map((image, i) => (
        <Item key={i} img={image} /> 
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  const { img } = props.img; 
  return (
    <StyledPaper>
      <StyledImage src={img} alt="carousel item" />
    </StyledPaper>
  );
};

export default CarouselImages; 
