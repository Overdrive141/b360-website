/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from "theme-ui";
import { rgba } from "polished";
import bannerIcon1 from "assets/images/banner-icon-1-1.svg";
import bannerIcon2 from "assets/images/banner-icon-1-2.svg";
import bannerIcon3 from "assets/images/banner-icon-1-3.svg";
import bannerIcon4 from "assets/images/banner-icon-1-4.svg";
import bannerIcon5 from "assets/images/banner-icon-1-5.svg";
import bannerIcon6 from "assets/images/banner-icon-1-6.svg";
import bannerIcon7 from "assets/images/dot-pattern.svg";

import { keyframes } from "@emotion/react";

export default function Info3() {

  return (
    <Box as="section" id="products" sx={styles.section}>
      <Container sx={styles.container}>
      
        <Box sx={{mt:"79px", mb:"52px",textAlign:"justify"}}>
            <Heading as="h1" sx={styles.heroTitle}>
                AI First Platform
            </Heading>
        </Box>
        <Box sx={{mb:"263px",textAlign:"justify"}}>
            <Text sx={styles.content}>
                Business360 brings Sales, Operations, Inventory, Finance, and HR together whilst equipping your automation with the latest AI and Data Analytics tools.<br /><br /><br /> Business360 was built for any type of business within any industry, those looking to scale up, scale down, looking for integrations with existing technologies, or looking for specified features.
            </Text>
        </Box>
      </Container>
    </Box>
  );
}

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

const styles = {
  section: {
    // background: `url(${bannerBg}) no-repeat center top / cover`,
    // backgroundSize: ["100%", null, null, null, "cover"],

    overflow: "hidden",
    backgroundColor: "#ffffff",
    textAlign: "center",
    borderLeft:"1px black solid",
    borderRight:"1px black solid",
    ml:"5%",
    mr:"5%",
    // pt: ["110px", null, null, null, "130px"],
    h2: {
      fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 700,
      width: "100%",
      maxWidth: ["100%", null, null, "55%", "500px", "640px", "851px"],
      mx: "auto",
      mt: "30px",
      mb: ["40px", null, null, "65px"],
    },
  },
  container: {
    position: "relative",
    ".bannerIcon": {
      position: "absolute",
      display: ["none", null, null, null, "block"],
    },
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: [null, null, null, null, "50vh", "100vh"],
  },
  heroTitle: {
    fontSize: "70px",
    fontWeight: 400,
    textAlign:"left",
    letterSpacing: "heading",
    fontColor:"#1B1C1E",
    "@media only screen and (max-width: 1024px) ":{
      fontSize:"60px",
      // letterSpacing: "0.15em",
      // lineHeight:"105px",
    },
    "@media only screen and (max-width: 768px) ":{
      fontSize:"50px",
      // letterSpacing: "0.15em",
      // lineHeight:"105px",
    }
  },
  content:{
    fontSize: "30px",
    fontWeight: 400,
    textAlign:"left",
    "@media only screen and (max-width: 1024px) ":{
        fontSize:"20px",  
    },
    "@media only screen and (max-width: 768px) ":{
      fontSize:"15px",  
    },
    "@media only screen and (max-width: 500px) ":{
      fontSize:"12px",  
    }
  },
  bannerIcon1: {
    top: "10%",
    left: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: "10%",
    right: "10%",
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: "40px",
    right: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: "130px",
    left: "-120px",
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: "40%",
    left: "60%",
  },
  bannerIcon6: {
    bottom: "-65px",
    left: "0px",
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: "30%",
    right: "70%",
  },
};