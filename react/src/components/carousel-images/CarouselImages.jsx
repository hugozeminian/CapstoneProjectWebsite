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
