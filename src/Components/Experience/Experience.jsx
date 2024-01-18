import {Typography,Link } from '@mui/material';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css'


const Experience = () => {
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
      <section className="Experience">
  <Typography variant="h4" className="App-section-title">Experience</Typography>

  <div className="Job">
    <Typography variant="h5">Software Engineer & Backend Project Manager</Typography>
    <Typography variant="subtitle1">HireMe!/Devdog & Code Cat - 11/2023-Present</Typography>
    <ul>
      <li>Collaborated on a project to help new software developers get hired, utilizing Typescript, Jest, Supertest, Angular, and more.</li>
      {/* Add more details about your responsibilities and achievements */}
    </ul>
  </div>

  <div className="Job">
    <Typography variant="h5">Software Engineer</Typography>
    <Typography variant="subtitle1">Digital Edge LLC – Prior Lake, MN 11/2022-11/2023</Typography>
    <ul>
      <li>Developed the UI-Kit idle game project "Sat Stacker," available on the app store, powered by Google Firebase and integrated with Google AdMob.</li>
      {/* Add more details about your responsibilities and achievements */}
    </ul>
    <Link href="https://apps.apple.com/app/sat-stacker/id6449438848" target="_blank" rel="noopener noreferrer">View Project</Link>
  </div>

  <div className="Job">
    <Typography variant="h5">Software Engineering Student</Typography>
    <Typography variant="subtitle1">Prime Digital Academy – Minneapolis, MN 5/1/2023-9/15/23</Typography>
    <ul>
      <li>Contributed to the development of Cause-Cart.com, an app utilizing MUI, React-Redux, Sagas, Dropbox API, Multer, XLSX, Passport, SweetAlert2, BcryptJS, and more.</li>
      <li>Developed "Next Stop," a car meet app using React and Material-UI.</li>
      {/* Add more details about your responsibilities and achievements */}
    </ul>
    <Link href="https://nextstop-94a064bbc643.herokuapp.com/#/home" target="_blank" rel="noopener noreferrer">View Project</Link>
  </div>

  <div className="Job">
    <Typography variant="h5">Territory Manager</Typography>
    <Typography variant="subtitle1">Midas International/Hendrickson Enterprises – Minneapolis, MN 8/2017-1/2023</Typography>
    <ul>
      <li>Provided training and support to staff, earning promotions from General Service Technician to Territory Manager.</li>
      {/* Add more details about your responsibilities and achievements */}
    </ul>
  </div>

</section>
    </motion.div>
  );
};

export default Experience;