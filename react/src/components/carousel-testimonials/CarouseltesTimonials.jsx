{/*
This code defines a React functional component called CarouselTestimonials, 
which renders a carousel of testimonials using the Carousel component from react-material-ui-carousel. 
Each testimonial includes an avatar, title, description, and date. The component adjusts its layout based on the isMobile prop. 
The styles for the components are applied using the styled function from Material-UI.
*/}
import React from "react"; 
import Carousel from "react-material-ui-carousel";
import { Paper, Avatar, Typography } from "@mui/material"; 
import { styled } from "@mui/system"; 

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  padding: "80px 40px",
  height: "100%",
  backgroundColor: theme.palette.background.alternate,
}));

const StyledMobilePaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  padding: "20px",
  backgroundColor: theme.palette.background.alternate,
}));

const ContentContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "50%",
});

const DescriptionContainer = styled("div")({
  width: "66.6%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const DateContainer = styled("div")({
  textAlign: "center", 
  marginTop: "10px", 
});

const StyledAvatar = styled(Avatar)({
  width: "200px",
  height: "200px",
});

const MobileContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const MobileAvatarContainer = styled("div")({
  marginBottom: "10px",
});

const MobileDescriptionContainer = styled("div")({
  textAlign: "justify", 
});

const MobileStyledAvatar = styled(Avatar)({
  width: "100px",
  height: "100px",
});

const CarouselTestimonials = ({ testimonies, isMobile }) => {
  return (
    <Carousel>
      {testimonies.map((testimony, i) => ( 
        <Item key={i} testimony={testimony} isMobile={isMobile} /> 
      ))}
    </Carousel>
  );
};


const Item = ({ testimony, isMobile }) => {
  const { img, title, desc, date } = testimony; 
  const Container = isMobile ? StyledMobilePaper : StyledPaper; 
  const AvatarComponent = isMobile ? MobileStyledAvatar : StyledAvatar;

  return (
    <Container>

      <TitleContainer isMobile={isMobile}>
        <Typography variant="h6" color={"text.primary"}>
          {title}
        </Typography>
      </TitleContainer>

      {!isMobile ? (
      // Content container for desktop
        <ContentContainer>

          <AvatarContainer>
            <AvatarComponent src={img} alt="avatar" />
          </AvatarContainer>
  
          <DescriptionContainer>
            <Typography
              variant="h7"
              color={"text.primary"}
              textAlign={"justify"}
            >
              {desc}
            </Typography>
          </DescriptionContainer>
        </ContentContainer>
      ) : (

          // Content container for mobile
        <MobileContentContainer>

          <MobileAvatarContainer>
            <MobileStyledAvatar src={img} alt="avatar" />
          </MobileAvatarContainer>

          <MobileDescriptionContainer>
            <Typography
              variant="h7"
              color={"text.primary"}
            >
              {desc}
            </Typography>
          </MobileDescriptionContainer>
        </MobileContentContainer>
      )}
       {/* Date container */}
      <DateContainer>
        <Typography variant="body2">{date}</Typography>
      </DateContainer>
    </Container>
  );
};


const TitleContainer = styled("div")(({ isMobile }) => ({
  textAlign: "center", 
  marginBottom: "10px",
  fontSize: isMobile ? "mobileFontSizeSmall.fontSize" : "h6", 
}));


const AvatarContainer = styled("div")({
  width: "33.3%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default CarouselTestimonials;
