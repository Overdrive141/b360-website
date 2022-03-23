import { useEffect, useRef, useState } from "react";
import Router, { useRouter } from "next/router";
import "swiper/swiper-bundle.min.css";
import "assets/css/slick.min.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "assets/css/main.css";
import { initGA, logPageView } from "analytics";
import "typeface-dm-sans";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";
// import useLocoScroll from "hooks/useLocoScroll";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  const { asPath } = useRouter();
  const containerRef = useRef(null);

  // const [preloader, setPreload] = useState(true);
  // useLocoScroll(!preloader);

  // useEffect(() => {
  //   if (!preloader && containerRef) {
  //     if (typeof window === "undefined" || !window.document) {
  //       return;
  //     }
  //   }
  // }, [preloader]);

  // const [timer, setTimer] = React.useState(3);

  // const id = React.useRef(null);

  // const clear = () => {
  //   window.clearInterval(id.current);
  //   setPreload(false);
  // };

  // useEffect(() => {
  //   id.current = window.setInterval(() => {
  //     setTimer((time) => time - 1);
  //   }, 1000);
  //   return () => clear();
  // }, []);

  // useEffect(() => {
  //   if (timer === 0) {
  //     clear();
  //   }
  // }, [timer]);

  // if (typeof window === "undefined" || !window.document) {
  //   return null;
  // }

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {/* <RLSProvider
        options={{ smooth: true, lerp: 0.05 }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        location={asPath}
        // onLocationChange={(scroll) =>
        //   scroll.scrollTo(0, { duration: 0, disableLerp: true })
        // }
        containerRef={containerRef}
      > */}
      {/* <div
        data-scroll-container
        ref={containerRef}
        className="main-class"
        id="main-class"
      > */}
      <Component {...pageProps} />
      {/* </div> */}
      {/* </RLSProvider> */}
    </ChakraProvider>
  );
}
