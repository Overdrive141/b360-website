import { useEffect } from 'react';
import Router from 'next/router';
import 'swiper/swiper-bundle.min.css';
import 'assets/css/slick.min.css';
import { initGA, logPageView } from 'analytics';
import 'typeface-dm-sans';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return(
    <ChakraProvider theme={theme} resetCSS={true} portalZIndex={5}>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}
