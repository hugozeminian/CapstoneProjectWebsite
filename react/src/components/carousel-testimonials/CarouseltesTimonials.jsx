import React from "react"; 
import Carousel from "react-material-ui-carousel";
import { Paper, Avatar, Typography } from "@mui/material"; 
import { styled } from "@mui/system"; 

/**
 * Styled Paper component for desktop view.
 */
const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  padding: "80px 40px",
  height: "100%",
  backgroundColor: theme.palette.background.alternate,
}));

/**
 * Styled Paper component for mobile view.
 */
const StyledMobilePaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  padding: "20px",
  backgroundColor: theme.palette.background.alternate,
}));

/**
 * Styled container for content.
 */
const ContentContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "50%",
});

/**
 * Styled container for descriptions.
 */
const DescriptionContainer = styled("div")({
  width: "66.6%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

/**
 * Styled container for dates.
 */
const DateContainer = styled("div")({
  textAlign: "center", 
  marginTop: "10px", 
});

/**
 * Styled Avatar component for desktop view.
 */
const StyledAvatar = styled(Avatar)({
  width: "200px",
  height: "200px",
});

/**
 * Styled container for mobile content.
 */
const MobileContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

/**
 * Styled container for mobile avatars.
 */
const MobileAvatarContainer = styled("div")({
  marginBottom: "10px",
});

/**
 * Styled container for mobile descriptions.
 */
const MobileDescriptionContainer = styled("div")({
  textAlign: "justify", 
});

/**
 * Styled Avatar component for mobile view.
 */
const MobileStyledAvatar = styled(Avatar)({
  width: "100px",
  height: "100px",
});

/**
 * Carousel component for displaying testimonials.
 * @param {Object} props - Props for the CarouselTestimonials component.
 * @param {Array} props.testimonies - Array of testimonies to be displayed.
 * @param {boolean} props.isMobile - Flag indicating if the carousel is rendered on a mobile device.
 * @returns {JSX.Element} - Returns the CarouselTestimonials component.
 */
const CarouselTestimonials = ({ testimonies, isMobile }) => {
  return (
    <Carousel>
      {testimonies.map((testimony, i) => ( 
        <Item key={i} testimony={testimony} isMobile={isMobile} /> 
      ))}
    </Carousel>
  );
};

/**
 * Component representing an individual item within the carousel.
 * @param {Object} props - Props for the Item component.
 * @param {Object} props.testimony - Testimony object to be displayed.
 * @param {boolean} props.isMobile - Flag indicating if the carousel is rendered on a mobile device.
 * @returns {JSX.Element} - Returns the Item component.
 */
const Item = ({ testimony, isMobile }) => {
  const { image_path, title, description, date } = testimony; 
  const Container = isMobile ? StyledMobilePaper : StyledPaper; 
  const AvatarComponent = isMobile ? MobileStyledAvatar : StyledAvatar;

  return (
    <Container>
      {/* Title container */}
      <TitleContainer isMobile={isMobile}>
        <Typography variant="h6" color={"text.primary"}>
          {title}
        </Typography>
      </TitleContainer>

      {!isMobile ? (
        // Content container for desktop
        <ContentContainer>
          <AvatarContainer>
            <AvatarComponent src={image_path} alt="avatar" />
          </AvatarContainer>
          <DescriptionContainer>
            <Typography
              variant="h7"
              color={"text.primary"}
              textAlign={"justify"}
              width={"90%"}
            >
              {description}
            </Typography>
          </DescriptionContainer>
        </ContentContainer>
      ) : (
        // Content container for mobile
        <MobileContentContainer>
          <MobileAvatarContainer>
            <MobileStyledAvatar src={image_path} alt="avatar" />
          </MobileAvatarContainer>
          <MobileDescriptionContainer>
            <Typography
              variant="h7"
              color={"text.primary"}
            >
              {description}
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

/**
 * Styled container for titles.
 */
const TitleContainer = styled("div")(({ isMobile }) => ({
  textAlign: "center", 
  marginBottom: "10px",
  fontSize: isMobile ? "mobileFontSizeSmall.fontSize" : "h6", 
}));

/**
 * Styled container for avatars.
 */
const AvatarContainer = styled("div")({
  width: "33.3%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default CarouselTestimonials;
