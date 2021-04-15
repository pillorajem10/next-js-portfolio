import styles from '../styles/Layout.module.css';

//images
//import bg from '../public/images/bg.jpg';
//import bg1 from '../public/images/bg1.jpg';
//import bg2 from '../public/images/bg2.jpg';
//import bg3 from '../public/images/bg3.jpg';
import bg4 from '../public/images/bg4.jpg';

//utils-methods
//import { shuffle } from '../utils/methods';

/*
//backgroundImages
const backgroundImg = shuffle([
  bg, bg1, bg2, bg3, bg4,
])[0];
*/

const Layout = ({children}) => {
  return (
      <div style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${bg4})`
      }} className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
  )
}

export default Layout
