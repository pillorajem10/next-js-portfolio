import React, { useEffect } from 'react';
import Head from 'next/head';

//css
import styles from '../styles/About.module.css'

//aos animation
import Animation from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Animation.init({ duartion: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Jem Pillora | About</title>
      </Head>
      <div>
        <div data-aos="zoom-in" className={styles.container}>
          <div> 
            <p className={styles.header}>About Me</p>
            <p>
              I am a 20 yr old freshman college of AMA University, I study full-stack web development for it is what I enjoy doing. I aspire to be a web developer in the near future so as to achieve my ever-growing passion for web development, it would also allow me to work in a corporation of my choice.
            </p>
            <p>
              My forte is MERN Stack development (MongoDB, ExpressJS, NodeJS, ReactJS) i use this technologies to create a full stack.
            </p>
            <p>
              I had an experience freelancing in a company as a junior full-stack developer and created my own website for fun and practice
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
