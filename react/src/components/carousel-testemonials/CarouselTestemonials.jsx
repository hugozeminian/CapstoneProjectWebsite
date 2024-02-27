import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled components for desktop view
const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  padding: "80px 40px",
  height: "100%",
  backgroundColor: theme.palette.background.alternate,
}));

const TitleContainer = styled("div")({
  textAlign: "center",
  marginBottom: "10px",
});

const ContentContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "50%",
});

const AvatarContainer = styled("div")({
  width: "33.3%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
// End Styled components for desktop view

// Styled components for mobile view
const StyledMobilePaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
  padding: "20px",
  backgroundColor: theme.palette.background.alternate,
}));

const MobileAvatarContainer = styled("div")({
  marginBottom: "10px",
});

const MobileDescriptionContainer = styled("div")({
  textAlign: "center",
});

const MobileStyledAvatar = styled(Avatar)({
  width: "100px",
  height: "100px",
});


function CarouselTestemonials(props) {
  const { testimonies } = props;

  return (
    <Carousel>
      {testimonies.map((testimony, i) => (
        <Item key={i} testimony={testimony} />
      ))}
    </Carousel>
  );
};

const MobileContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

// End Styled components for mobile view

function Item({ testimony }) {
  const { img, title, desc, date } = testimony;

  return (
    <>
      {/* Desktop view */}
      <StyledPaper sx={{ display: { xs: "none", md: "block" } }}>
        <TitleContainer>
          <Typography variant="h6">{title}</Typography>
        </TitleContainer>
        <ContentContainer>
          <AvatarContainer>
            <StyledAvatar src={img} alt="avatar" />
          </AvatarContainer>
          <DescriptionContainer>
            <Typography variant="body1">{desc}</Typography>
          </DescriptionContainer>
        </ContentContainer>
        <DateContainer>
          <Typography variant="body2">{date}</Typography>
        </DateContainer>
      </StyledPaper>

      {/* Mobile view */}
      <StyledMobilePaper sx={{ display: { xs: "block", md: "none" } }}>
        <TitleContainer>
          <Typography variant="h6">{title}</Typography>
        </TitleContainer>
        <MobileContentContainer>
          <MobileAvatarContainer>
            <MobileStyledAvatar src={img} alt="avatar" />
          </MobileAvatarContainer>
          <MobileDescriptionContainer>
            <Typography variant="body1">{desc}</Typography>
          </MobileDescriptionContainer>
        </MobileContentContainer>
        <DateContainer>
          <Typography variant="body2">{date}</Typography>
        </DateContainer>
      </StyledMobilePaper>
    </>
  );
}

export default CarouselTestemonials;
