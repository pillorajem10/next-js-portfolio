import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Project.module.css';

//aos animation
import Animation from 'aos';
import 'aos/dist/aos.css';

//material-ui
import { Button, withStyles } from '@material-ui/core';

//images
import rbook from '../public/images/rbook_all.png';
import rptgen from '../public/images/rptpage.png';

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://jempillora.vercel.app/projects" key="ogurl" />
        <meta property="og:site_name" content="Jem Pillora" key="ogsitename" />
        <meta property="og:title" content="Jem Pillora | Projects" key="ogtitle" />
      </Head>
      <div className={styles.main}>
        <a href="https://rptgen.net/revamp/login" target="_blank" rel="noreferrer" data-aos="zoom-in" className={styles.container}>
          <p className={styles.image}>Rptgen-v2 (Revamp)</p>
          <div className={styles.imageBg}><img className={styles.image} src={rptgen} alt="Rptgen revamp"/></div>
          <p>A document generating tool (PTP, DFR, RFA, PR2) for healthcare, insurance and other legal purposes.</p>
        </a>
        <a href="https://phrecipebook.org/" target="_blank" rel="noreferrer" data-aos="zoom-in" className={styles.container}>
          <p className="container-title">PH Recipebook</p>
          <div className={styles.imageBg1}><img className={styles.image} src={rbook} alt="PH recipebook"/></div>
          <p>A website for beginner cooks to learn easy recipe dishes to share for their family and friends</p>
        </a>
      </div>
    </>
  )
}

export default withStyles(buttonStyles)(Page);
