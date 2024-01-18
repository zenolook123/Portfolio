import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import './App.css';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Experience from '../Experience/Experience';
import ContactInfo from '../ContactInfo/ContactInfo';
import AboutMe from '../AboutMe/AboutMe';
import TechnicalSkills from '../TechnicalSkills/TechnicalSkills';

function App() {
  return (
    <div>
      <WelcomeScreen />
      <motion.div className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <ContactInfo />
          <AboutMe />
          <Experience />
          <TechnicalSkills />
          <motion.footer 
            className="App-footer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="body2" className="App-footer-text">
              &copy; 2024 Zachary Garrison. All Rights Reserved.
            </Typography>
          </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;
