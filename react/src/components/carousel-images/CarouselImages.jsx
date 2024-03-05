{/*
This code defines a React functional component called CarouselImages, 
which renders a carousel of images using the Carousel component from react-material-ui-carousel. 
Each image is displayed within a Paper component with an aspect ratio of 16:9. 
The styles for the Paper and img elements are applied using the styled function from Material-UI.
 */}

import React from "react"; // Importing React library for using React components
import Carousel from "react-material-ui-carousel"; // Importing Carousel component from react-material-ui-carousel
import { Paper } from "@mui/material"; // Importing Paper component from Material-UI
import { styled } from "@mui/system"; // Importing styled function from Material-UI

// Styling the Paper component using styled function
const StyledPaper = styled(Paper)({
  //setting display, content justification to center, width,padding to achieve 16:9 aspect radio and position
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingTop: "56.25%", // 16:9 aspect ratio (9 / 16 = 0.5625)
  position: "relative",
});

// Styling the img tag using styled function
const StyledImage = styled("img")({
  //setting position, top and left, width and height,objectFit property to cover
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

// Functional component CarouselImages
const CarouselImages = (props) => {
  const { images, width = "100%", indexImage} = props; // Destructuring props
  return (
    // Carousel component to display images
    <Carousel sx={{ width: width }} index={indexImage}>
      {images.map((image, i) => (
        <Item key={i} img={image} /> // Rendering Item component for each image
      ))}
    </Carousel>
  );
};

// Functional component Item
const Item = (props) => {
  const { img } = props.img; // Destructuring img prop
  return (
    // Paper component for displaying each image in the carousel
    <StyledPaper>
      <StyledImage src={img} alt="carousel item" />
    </StyledPaper>
  );
};

export default CarouselImages; // Exporting CarouselImages component as default
