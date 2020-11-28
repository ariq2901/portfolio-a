import { motion } from "framer-motion";
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/css/all.css';
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps, router }) {
  const pageAnim = {
    pageInitial: {
      x: -100,
      opacity: 0
    },
    pageAnimate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: .1,
        duration: .5
      }
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={pageAnim}>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp
