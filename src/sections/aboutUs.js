/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef, useEffect } from "react";
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  Divider,
} from "theme-ui";
import { backgroundImages, rgba } from "polished";
import bannerIcon1 from "assets/images/banner-icon-1-1.svg";
import bannerIcon2 from "assets/images/banner-icon-1-2.svg";
import bannerIcon3 from "assets/images/banner-icon-1-3.svg";
import bannerIcon4 from "assets/images/banner-icon-1-4.svg";
import bannerIcon5 from "assets/images/banner-icon-1-5.svg";
import bannerIcon6 from "assets/images/banner-icon-1-6.svg";
import bannerIcon7 from "assets/images/dot-pattern.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useControllableState,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import { keyframes } from "@emotion/react";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

export default function UserStories() {
  return (
    <motion.div data-scroll-section>
      <Box as="section" id="products" sx={styles.section}>
        <Container sx={styles.container}>
          <Box sx={{ display: "flex", width: "1590px", height: "1200px" }}>
            <Box
              sx={{
                width: "700px",
                textAlign: "left",
                mt: "45px",
              }}
            >
              <Text
                sx={{
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: "72px",
                  color: "#ffffff",
                }}
              >
                Bring your
                <br /> Business Online
              </Text>
              <Divider
                sx={{
                  width: "600px",
                  mt: "54px",
                  border: "0.5px solid #6C6C6C",
                }}
              />
              <Accordion allowToggle w="600px " allowMultiple>
                <AccordionItem w={500} borderWidth="5">
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        sx={{ fontSize: "26px", color: "#ffffff" }}
                      >
                        Distribution
                      </Box>
                      <AccordionIcon
                        color="#ffffff"
                        ml="300px"
                        // rotate={scale}
                      />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#ffffff">
                    With many customers throughout the retail industry, we have
                    deep experience in working with companies like yours.
                    Business 360 has taken this industry expertise and bundled
                    it into the retail solution to solve the unique business
                    challenges of the manufacturing, wholesale, and retail
                    industries. Combine this industry expertise with the leading
                    practices developed by our retail-dedicated professional
                    services team, we help our customers transform their
                    businesses in consumable stages to develop a competitive
                    advantage in the marketplace
                  </AccordionPanel>
                </AccordionItem>

                <Divider
                  sx={{
                    width: "600px",
                    mt: "24px",
                    border: "0.5px solid #6C6C6C",
                  }}
                />

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        sx={{ fontSize: "26px", color: "#ffffff" }}
                      >
                        Freight
                      </Box>
                      <AccordionIcon color="#ffffff" ml="350px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#ffffff">
                    SubLo is a hyperlocal marketplace that is enabled by
                    Business 360 to provides all the SaaS tools to local
                    businesses so they can transition towards digitization in an
                    On Demand Economy.
                  </AccordionPanel>
                </AccordionItem>
                <Divider
                  sx={{
                    width: "600px",
                    mt: "24px",
                    border: "0.5px solid #6C6C6C",
                  }}
                />
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        sx={{ fontSize: "26px", color: "#ffffff" }}
                      >
                        HVAC
                      </Box>
                      <AccordionIcon color="#ffffff" ml="360px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#ffffff">
                    SubLo is a hyperlocal marketplace that is enabled by
                    Business 360 to provides all the SaaS tools to local
                    businesses so they can transition towards digitization in an
                    On Demand Economy.
                  </AccordionPanel>
                </AccordionItem>
                <Divider
                  sx={{
                    width: "600px",
                    mt: "24px",
                    border: "0.5px solid #6C6C6C",
                  }}
                />
                <AccordionItem w={500} borderWidth="5">
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="left"
                        sx={{ fontSize: "26px", color: "#ffffff" }}
                      >
                        Security
                      </Box>
                      <AccordionIcon color="#ffffff" ml="330px" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#ffffff">
                    SubLo is a hyperlocal marketplace that is enabled by
                    Business 360 to provides all the SaaS tools to local
                    businesses so they can transition towards digitization in an
                    On Demand Economy.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box
              sx={{
                width: "1020px",
                height: "1079px",
                backgroundImages: 'url("/b.jpg")',
              }}
            >
              <Image
                src="/b.jpg"
                sx={{
                  width: "1020px",
                  height: "1079px",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </motion.div>
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
    backgroundColor: "#1B1C1E",
    textAlign: "center",
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
    textAllign: "left",
    letterSpacing: "heading",
    fontColor: "#1B1C1E",
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        fontSize: "70px",
      },
  },
  content: {
    fontSize: "36px",
    fontWeight: 400,
    textAllign: "left",
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
