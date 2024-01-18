
import {Typography, Grid, Link } from '@mui/material';
import { Person as PersonIcon} from '@mui/icons-material';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactInfo = () => {
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
     
<section className="PersonalInfo">
            <Typography variant="h4" className="App-section-title">Contact Information</Typography>
            <Grid container spacing={2}>
              <Grid item>
                <PersonIcon />
              </Grid>
              <Grid item>
                <Typography>Phone: (612) 751-9470</Typography>
                <Typography>Email: <Link href="mailto:zacharygarrison97@gmail.com">zacharygarrison97@gmail.com</Link></Typography>
                <Typography>GitHub: <Link href="https://github.com/zenolook123" target="_blank" rel="noopener noreferrer">github.com/zenolook123</Link></Typography>
                <Typography>LinkedIn: <Link href="https://linkedin.com/in/zachary-garrison-4643522" target="_blank" rel="noopener noreferrer">linkedin.com/in/zachary-garrison-4643522</Link></Typography>
              </Grid>
            </Grid>
          </section>

    </motion.div>
  );
};

export default ContactInfo;
