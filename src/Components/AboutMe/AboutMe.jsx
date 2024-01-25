import { Typography } from '@mui/material';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
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
      <section className="About">
        <Typography variant="h4" className="App-section-title">About Me</Typography>
        <Typography>
          A motivated and versatile Software Engineer with a background in management. Leveraging my client
          relationship management skills and contributing to the world of technology in my own way. With
          experience in leading teams with diverse responsibilities. I’m dedicated to broadening my technical
          knowledge with an open mind for change and the urge to create a fulfilling experience for users and
          creators alike.
        </Typography>
      </section>
    </motion.div>
  );
};

export default AboutMe