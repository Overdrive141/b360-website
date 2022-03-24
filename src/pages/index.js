import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import AboutUs from "sections/aboutUs";
import Products from "sections/products";
import Info1 from "sections/info1"
import Info2 from "sections/info2"
import Info3 from "sections/info3"
import Products2 from "sections/products2"
import UserStories from "sections/userStories"
import FAQ from "sections/faq"



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Business 360" />
        <Banner />
        <AboutUs />
        <Info1 />
        <Products/>
        <Info2 />
        <Products2 />
        <Info3 />
        <UserStories />
        <FAQ />
      </Layout>
    </ThemeProvider>
  );
}
