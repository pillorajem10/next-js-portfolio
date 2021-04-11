//main layout
import Layout from '../components/Layout';

//navbar
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//css
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
    </>
  )
}

export default MyApp
