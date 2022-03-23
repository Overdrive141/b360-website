import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import AboutUs from "sections/aboutUs";
import Products from "sections/products";
import Info1 from "sections/info1";
import Info2 from "sections/info2";
import Info3 from "sections/info3";
import Products2 from "sections/products2";
import UserStories from "sections/userStories";
import FAQ from "sections/faq";
// import Example from "sections/example";
import { ScrollContainer } from "react-scroll-motion";

import dynamic from "next/dynamic";

import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";
// import useLocoScroll from "hooks/useLocoScroll";
import { SmoothScrollProvider } from "components/scroll";

const AboutUsWithNoSSR = dynamic(() => import("sections/aboutUsAnim"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function IndexPage() {
  return (
    // <SmoothScrollProvider>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Business 360" />
        <Banner />
        {/* <Example /> */}

        <AboutUsWithNoSSR />

        <Info1 />

        <Products />
        <Info2 />
        <Products2 />
        <Info3 />
        <UserStories />
        <FAQ />
      </Layout>
    </ThemeProvider>
    // </SmoothScrollProvider>
  );
}
