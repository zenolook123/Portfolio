import {Typography} from '@mui/material';

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
  Welcome to my portfolio! I am a passionate web developer with expertise in front-end technologies.
  Let me tell you a bit about myself...
</Typography>
</section>
    </motion.div>
  );
};

export default AboutMe