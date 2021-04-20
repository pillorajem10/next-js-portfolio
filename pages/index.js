import Head from 'next/head';
import styles from '../styles/Home.module.css';

import React, { useEffect } from 'react';

//aos animation
import Animation from 'aos';
import 'aos/dist/aos.css';

//material-ui
import { Button, withStyles } from '@material-ui/core';


// material-ui icons
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

// We can inject some CSS into the DOM.
const buttonStyles = {
  root: {
    borderRadius: 3,
    border: 'solid',
    marginTop: '1rem',
    marginBottom: '1rem',
    color: 'white',
    height: 48,
    width: '15rem',
    padding: 0,
  },
};

const Home = (props) => {
  const { classes } = props;

  useEffect(() => {
    Animation.init({ duartion: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Jem Pillora</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
{  /*      <meta name="description" content="Full-stack developer" />
        <meta name="keywords" content="full-stack developer, MERN stack developer, freelance developer" />
        <meta
          property="og:title"
          content="JemPillora"
          key="title"
        />
        <meta
          property="og:description"
          content="Full-stack developer that can create your website for your business"
          key="description"
        />
        <meta
          property="og:image"
          content="%PUBLIC_URL%/favicon.jpeg"
          key="image"
        />
        <meta
          property="og:site_name"
          content="JemPillora"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jempillora.vercel.app/" key="og:url"/> */}
        <meta property="og:url" content="https://jempillora.vercel.app/" key="ogurl" />
        <meta property="og:site_name" content="Jem Pillora" key="ogsitename" />
        <meta property="og:title" content="Jem Pillora" key="ogtitle" />
      </Head>
      <div data-aos="zoom-in" className={styles.leftContainer}>
        <p className={styles.header}>Hi! My name is Jem Pillora</p>
        <p>Full-stack developer</p>
        <p>
          I am a web developer capable of generating and amplifying websites towards my clients satisfaction.
          I aim towards producing web pages that could bring out the leading aspects of my clients company.
          The technologies I have worked with and mastered are indicated in the skills page of this site.
        </p>
      </div>
      <div data-aos="zoom-in" className={styles.rightContainer}>
        <p className="container-title">Visit my social media accounts</p>
        <a href="https://github.com/pillorajem10" target="_blank" rel="noreferrer">
          <Button startIcon={<GitHubIcon/>} className={classes.root}>
            Github
          </Button>
        </a>
        <a href="https://www.facebook.com/pillorajem7" target="_blank" rel="noreferrer">
          <Button startIcon={<FacebookIcon/>} className={classes.root}>
            facebook
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/jem-pillora-a18794200/" target="_blank" rel="noreferrer">
          <Button startIcon={<LinkedInIcon/>} className={classes.root}>
            Linked-in
          </Button>
        </a>
        <a href="mailto:pillorajem10@gmail.com">
          <Button startIcon={<EmailIcon/>} className={classes.root}>
            pillorajem10@gmail.com
          </Button>
        </a>
      </div>
    </>
  )
}

export default withStyles(buttonStyles)(Home);
