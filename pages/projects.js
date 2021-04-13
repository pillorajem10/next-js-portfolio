import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Project.module.css';

//aos animation
import Animation from 'aos';
import 'aos/dist/aos.css';

//material-ui
import { Button, withStyles } from '@material-ui/core';

//images
import rbook from '../public/images/recipebook.png';
import rptgen from '../public/images/logo.png';

// We can inject some CSS into the DOM.
const buttonStyles = {
  root: {
    borderRadius: 3,
    border: 'solid',
    marginTop: '1rem',
    marginBottom: '1rem',
    color: 'white',
    height: 48,
    maxWidth: '15rem',
    padding: '1rem',
  },
};

const Page = (props) => {
  const { classes } = props;

  useEffect(() => {
    Animation.init({ duartion: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Jem Pillora | Projects</title>
      </Head>
      <div className={styles.main}>
        <div data-aos="zoom-in" className={styles.container}>
          <p className={styles.image}>Rptgen-v2 (Revamp)</p>
          <div className={styles.imageBg}><img className={styles.image} src={rptgen} alt="Rptgen revamp"/></div>
          <p>A report generating tool (PTP, DFR, RFA, PR2, etc). Developed by pillo, kula, colditz.</p>
          <a href="https://rptgen.net/revamp/login" target="_blank" rel="noreferrer">
            <Button className={classes.root}>
              Check it out
            </Button>
          </a>
        </div>
        <div data-aos="zoom-in" className={styles.container}>
          <p className="container-title">PH Recipebook</p>
          <img className={styles.image} src={rbook} alt="PH recipebook"/>
          <p>Check recipes here, cook and share with your family and friends!</p>
          <a href="https://phrecipebook.org/" target="_blank" rel="noreferrer">
            <Button className={classes.root}>
              Check it out
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default withStyles(buttonStyles)(Page);
