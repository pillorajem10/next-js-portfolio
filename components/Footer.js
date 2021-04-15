import React from 'react'
import styles from '../styles/Footer.module.css'

//hooks
import useWindowSize from '../hooks/useWindowSize';

const Footer = () => {
  const size = useWindowSize();

  return (
    <div className={styles.footer} >[©2021 JemPillora] [W: {size.width} H: {size.height}]</div>
  )
}

export default Footer;
