import React from 'react';
import { Box, Typography } from '@mui/material';

const ImageText = ({ img, mainText, smallText }) => {
  return (
    <Box
      sx={{mb: "20px",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'text.primary', 
        }}
      >
        <Typography variant="h6" gutterBottom>
          {mainText}
        </Typography>
        <Typography variant="body1">
          {smallText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageText;
