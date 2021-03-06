import React, { useEffect } from 'react';

import Head from 'next/head';
import styles from '../styles/Skills.module.css';

import { data } from '../data.js';

//aos animation
import Animation from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    Animation.init({ duartion: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Jem Pillora | Skills</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://jempillora.vercel.app/skills" key="ogurl" />
        <meta property="og:site_name" content="Jem Pillora" key="ogsitename" />
        <meta property="og:title" content="Jem Pillora | Skills" key="ogtitle" />
      </Head>
      <div className={styles.main}>
        {
          data.skills.map((skill, idx) =>
            <div  className={styles.main} key={idx}>
              <a data-aos="zoom-in" href={skill.href} target="_blank" rel="noreferrer" className={styles.container} >
                <img className={styles.image} src={skill.images} alt={skill.name}/>
                <div className={styles.skillName}>{skill.name}</div>
              </a>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Skills;
