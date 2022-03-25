import { useEffect } from 'react';
import Router from 'next/router';
import 'swiper/swiper-bundle.min.css';
import 'assets/css/slick.min.css';
import { initGA, logPageView } from 'analytics';
import 'typeface-dm-sans';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

export default function CustomApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return(
    <ChakraProvider theme={theme} resetCSS={true} portalZIndex={5}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  ) 
}
