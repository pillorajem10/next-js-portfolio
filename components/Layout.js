import styles from '../styles/Layout.module.css';

//images
import bg from '../public/images/bg.jpg';
import bg1 from '../public/images/bg1.jpg';
import bg2 from '../public/images/bg2.jpg';
import bg3 from '../public/images/bg3.jpg';
import bg4 from '../public/images/bg4.jpg';

//function for background-img shuffle
const shuffle = (arr) => {
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

//backgroundImg
const backgroundImg = shuffle([
  bg, bg1, bg2, bg3, bg4
])[0];

const Layout = ({children}) => {
  return (
      <div style={{backgroundImage: `url(${backgroundImg})`}} className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
  )
}

export default Layout
