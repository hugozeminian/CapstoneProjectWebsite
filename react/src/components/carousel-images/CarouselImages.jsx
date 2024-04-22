import React from "react"; 
import Carousel from "react-material-ui-carousel"; 
import { Paper } from "@mui/material";
import { styled } from "@mui/system"; 

/**
 * A styled Paper component for displaying images in a carousel.
 */
const StyledPaper = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingTop: "56.25%", // 16:9 aspect ratio (9 / 16 = 0.5625)
  position: "relative",
});

/**
 * A styled img component for displaying images within the carousel.
 */
const StyledImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "5px",
});

/**
 * A carousel component for displaying a list of images.
 * @param {object} props - The props for the CarouselImages component.
 * @param {object[]} props.images - The array of image objects to be displayed in the carousel.
 * @param {string} [props.width="100%"] - The width of the carousel.
 * @param {number} [props.indexImage] - The index of the initial image to display.
 * @returns {JSX.Element} - Returns the CarouselImages component.
 */
const CarouselImages = (props) => {
  const { images, width = "100%", indexImage } = props;
  return (
    <Carousel sx={{ width: width }} index={indexImage}>
      {images.map((image, i) => (
        <Item key={i} image={image} /> 
      ))}
    </Carousel>
  );
};

/**
 * A component representing an individual item within the carousel.
 * @param {object} props - The props for the Item component.
 * @param {object} props.image - The image object to be displayed.
 * @param {string} props.image.image_path - The path of the image to be displayed.
 * @returns {JSX.Element} - Returns the Item component.
 */
const Item = (props) => {
  const { image_path } = props.image; 
  return (
    <StyledPaper>
      <StyledImage src={image_path} alt="carousel item" />
    </StyledPaper>
  );
};

export default CarouselImages; 
