import React, { useEffect } from 'react';
import Image from 'next/image'

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
      </Head>
      <div className={styles.main}>
        {
          data.skills.map(skill =>
            <>
              <div data-aos="zoom-in" className={styles.container}>
                <img className={styles.image} src={skill.images} alt={skill.name}/>
                <div className={styles.skillName}>{skill.name}</div>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default Skills;
