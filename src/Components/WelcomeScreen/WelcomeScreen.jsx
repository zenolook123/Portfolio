import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';

const WelcomeScreen = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'darkgray' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
      >
        <Typography variant="h2" component="h1" color="text.primary">
          Zach Garrison
        </Typography>
        <Typography variant="h4" component="h2" color="text.primary">
          Software Developer
        </Typography>
      </motion.div>
      <IconButton onClick={handleScroll} sx={{ position: 'absolute', bottom: 20, color: 'white' }}>
        <KeyboardArrowDownIcon style={{ fontSize: 60 }} />
      </IconButton>
    </Box>
  );
};

export default WelcomeScreen;
