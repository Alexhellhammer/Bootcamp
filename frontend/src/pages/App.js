import React, { useEffect } from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = 'es';
    
  console.log("Rendering Header");
  console.log("Rendering Footer");
  }, []);

  console.log("Rendering Header");
  console.log("Rendering Footer");

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

