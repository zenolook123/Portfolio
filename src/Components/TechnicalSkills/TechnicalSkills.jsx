import {Typography} from '@mui/material';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechnicalSkills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
        hidden: { opacity: 0, scale: 0.8 }
      }}
    >
      <section className="TechnicalSkills">
    <Typography variant="h4" className="App-section-title">Technical Skills</Typography>
    <ul>
    <li>JavaScript / ES6</li>
        <li>Swift / UI-Kit / SwiftUI</li>
        <li>React / JSX</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>REST APIs</li>
        <li>SQL / PostgreSQL</li>
        <li>HTML / HTML5</li>
        <li>CSS / CSS3</li>
        <li>Redux / Redux-Saga</li>
        <li>Git / GitHub</li>
        <li>Command Line / CLI</li>
        <li>Material-UI</li>
        <li>Bootstrap</li>
        <li>MVC/MVVM/SRP</li>
    </ul>
  </section>
    </motion.div>
  );
};

export default TechnicalSkills;
