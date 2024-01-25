import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './WelcomeScreen.css';


const WelcomeScreen = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Box className="welcome-screen" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h2" component="h1" className="welcome-text">
          Zach Garrison
        </Typography>
        <Typography variant="h4" component="h2" className="welcome-text" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          Software Developer
        </Typography>
        <IconButton className="IconButton" onClick={handleScroll}>
          <KeyboardArrowDownIcon style={{ fontSize: 80, color: 'white' }} />
        </IconButton>
    </Box>
  );
};

export default WelcomeScreen;
