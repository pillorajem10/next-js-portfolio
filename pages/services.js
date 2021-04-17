import React, { useEffect } from 'react';
import Head from 'next/head';

//css
import styles from '../styles/Services.module.css'

//data
import { data } from '../data.js';

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
        <title>Jem Pillora | Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://jempillora.vercel.app/services" key="ogurl" />
        <meta property="og:site_name" content="Jem Pillora" key="ogsitename" />
        <meta property="og:title" content="Jem Pillora | Services" key="ogtitle" />
      </Head>
      <div className={styles.main}>
        {
          data.services.map((service, idx) =>
            <div  className={styles.main} key={idx}>
              <a data-aos="zoom-in" href={service.href} target="_blank" rel="noreferrer" className={styles.container} >
                <div className={styles.header}>{service.name}</div>
                <div className={styles.icons}>{service.icon}</div>
                <div>{service.description}</div>
              </a>
            </div>
          )
        }
      </div>
    </>
  )
}

export default About;
