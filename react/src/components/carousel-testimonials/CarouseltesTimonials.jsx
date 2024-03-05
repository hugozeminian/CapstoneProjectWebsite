{/*
This code defines a React functional component called CarouselTestimonials, 
which renders a carousel of testimonials using the Carousel component from react-material-ui-carousel. 
Each testimonial includes an avatar, title, description, and date. The component adjusts its layout based on the isMobile prop. 
The styles for the components are applied using the styled function from Material-UI.
*/}
import React from "react"; // Importing React library for using React components
import Carousel from "react-material-ui-carousel"; // Importing Carousel component from react-material-ui-carousel
import { Paper, Avatar, Typography } from "@mui/material"; // Importing Paper, Avatar, and Typography components from Material-UI
import { styled } from "@mui/system";  // Importing styled function from Material-UI

// Styling the Paper component using styled function
const StyledPaper = styled(Paper)(({ theme }) => ({
  //setting display, flex direction,content justification, position, padding, height and background color.
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  padding: "80px 40px",
  height: "100%",
  backgroundColor: theme.palette.background.alternate,
}));

// Styling the Paper component for mobile using styled function
const StyledMobilePaper = styled(Paper)(({ theme }) => ({
  //setting display, flex direction,content justification, position, padding and background color.
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  padding: "20px",
  backgroundColor: theme.palette.background.alternate,
}));

// Styling the content container using styled function
const ContentContainer = styled("div")({
  //setting display, aligning items,justifying content,width and height.
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "50%",
});

// Styling the description container using styled function
const DescriptionContainer = styled("div")({
  //setting display, aligning items,justifying content and width.
  width: "66.6%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Styling the date container using styled function
const DateContainer = styled("div")({
  textAlign: "center", // Setting text alignment to center
  marginTop: "10px", // Adding margin on top
});

// Styling the Avatar component using styled function
const StyledAvatar = styled(Avatar)({
  //setting widht and height
  width: "200px",
  height: "200px",
});

// Styling the content container for mobile using styled function
const MobileContentContainer = styled("div")({
  //setting display, aligning items,justifying content and flex direction to column
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

// Styling the Avatar container for mobile using styled function
const MobileAvatarContainer = styled("div")({
  marginBottom: "10px", // Adding margin at the bottom
});

// Styling the description container for mobile using styled function
const MobileDescriptionContainer = styled("div")({
  textAlign: "justify", // Setting text alignment to justify
});

// Styling the Avatar component for mobile using styled function
const MobileStyledAvatar = styled(Avatar)({
    //setting widht and height
  width: "100px",
  height: "100px",
});

// Functional component CarouselTestimonials
const CarouselTestimonials = ({ testimonies, isMobile }) => {
  return (
    // Carousel component to display testimonials
    <Carousel>
      {testimonies.map((testimony, i) => ( 
        <Item key={i} testimony={testimony} isMobile={isMobile} /> // Rendering Item component for each testimony
      ))}
    </Carousel>
  );
};

// Functional component Item
const Item = ({ testimony, isMobile }) => {
  const { img, title, desc, date } = testimony; // Destructuring testimony
  const Container = isMobile ? StyledMobilePaper : StyledPaper; // Selecting appropriate Paper component based on isMobile flag
  const AvatarComponent = isMobile ? MobileStyledAvatar : StyledAvatar; // Selecting appropriate Avatar component based on isMobile flag

  return (
    // Container to hold testimonial item
    <Container>
      <TitleContainer isMobile={isMobile}>
        <Typography variant="h6" color={"text.primary"}>
          {title}
        </Typography>{/* Rendering title */}
      </TitleContainer>
      {!isMobile ? ( // Conditional rendering based on isMobile flag
      
      // Content container for desktop
        <ContentContainer>
          <AvatarContainer>
              {/* Avatar for desktop */}
            <AvatarComponent src={img} alt="avatar" />
          </AvatarContainer>
           {/* Description container for desktop */}
          <DescriptionContainer>
            <Typography
              variant="h7"
              color={"text.primary"}
              textAlign={"justify"}
            >
              {desc}
            </Typography> {/* Rendering description */}
          </DescriptionContainer>
        </ContentContainer>
      ) : (

          // Content container for mobile
        <MobileContentContainer>
          <MobileAvatarContainer>
             {/* Avatar for mobile */}
            <MobileStyledAvatar src={img} alt="avatar" />
          </MobileAvatarContainer>
            {/* Description container for mobile */}
          <MobileDescriptionContainer>
            <Typography
              variant="h7"
              color={"text.primary"}
            >
              {desc}
            </Typography>  {/* Rendering description */}
          </MobileDescriptionContainer>
        </MobileContentContainer>
      )}
       {/* Date container */}
      <DateContainer>
        <Typography variant="body2">{date}</Typography> {/* Rendering date */}
      </DateContainer>
    </Container>
  );
};

// Styling the title container using styled function
const TitleContainer = styled("div")(({ isMobile }) => ({
  textAlign: "center", // Setting text alignment to center
  marginBottom: "10px", // Adding margin at the bottom
  fontSize: isMobile ? "mobileFontSizeSmall.fontSize" : "h6", // Setting font size based on isMobile flag
}));

// Styling the Avatar container using styled function
const AvatarContainer = styled("div")({
  //setting display, justifying content, aligning items and width.
  width: "33.3%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default CarouselTestimonials; // Exporting CarouselTestimonials component as default
