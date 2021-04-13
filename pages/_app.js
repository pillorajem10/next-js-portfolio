//main layout
import Layout from '../components/Layout';

//components
import Navbar from '../components/Navbar';
import NavbarLowReso from '../components/NavbarLowReso';
import Footer from '../components/Footer';

//material-ui
import { useMediaQuery } from '@material-ui/core';

//css
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const showNavbarLow = useMediaQuery("(max-width: 635px)");

  return (
    <>
      { showNavbarLow ? <NavbarLowReso/> : <Navbar/> }
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
    </>
  )
}

export default MyApp
