/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Container, Heading, Text, Button, Image } from "theme-ui";
import { Box,  ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { rgba } from "polished";
import bannerIcon1 from "assets/images/banner-icon-1-1.svg";
import bannerIcon2 from "assets/images/banner-icon-1-2.svg";
import bannerIcon3 from "assets/images/banner-icon-1-3.svg";
import bannerIcon4 from "assets/images/banner-icon-1-4.svg";
import bannerIcon5 from "assets/images/banner-icon-1-5.svg";
import bannerIcon6 from "assets/images/banner-icon-1-6.svg";
import bannerIcon7 from "assets/images/dot-pattern.svg";
import {useDisclosure} from "@chakra-ui/react"
import NewBusinessForm from "components/forms/MultiStepBusinessForm/index";
import { useState } from 'react'

import { Modal } from 'antd';
import { keyframes } from "@emotion/react";




export default function Banner() {

  let [isOpen, setIsOpen] = useState(false)
  let [isClose, setIsClose] = useState(false)
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddClick = () => {
    // open modal

    setIsOpen(true)
    //onOpen();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting...");
  };

  return (
    <>
    <Box as="section" id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <Image
          sx={styles.bannerIcon1}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon1}
        />
        <Image
          sx={styles.bannerIcon2}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon2}
        />
        {/* <Image
          sx={styles.bannerIcon3}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon3}
        /> */}
        {/* <Image
          sx={styles.bannerIcon4}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon4} 
        />*/}
        <Image
          sx={styles.bannerIcon5}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon5}
        />
        <Image
          sx={styles.bannerIcon6}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon6}
        />
        <Image
          sx={styles.bannerIcon7}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon7}
        />

        <Box sx={styles.contentWrapper}>
          <Box
            sx={{
              width:"1270px",
              textAlign:"left"
            }}
          >
            <Heading as="h1" sx={styles.heroTitle}>
              Build for <br/>local <br />Businesses
            </Heading>
          </Box>

          <Box display={["column","column","row","row",]} sx={styles.bannerContent}>
            <Text as="p" sx={styles.desc}>
              Thousands of Successful businesses trust Business 360 as their
              technical partner.
            </Text>
            <Box  sx={{mt:"86px"}}>
              <Button  sx={styles.button} variant="primary" onClick={handleAddClick}>
                <Text sx={{
                  fontSize:"22px",
                  fontWeight:400,
                  lineHeight:"49px",
                  color:"#1B1C1E"
                }}>Start your free trial</Text>
              </Button>
            </Box>
            <Box
              sx={{
                mt:"16px",
                mb:"31px",
              }}
            >
              <Text sx={{
                fontSize:"14px",
                fontWeight:400,
                lineHeight:"21px",
                color:"#ffffff",
              }}>
                Try Business 360 free for 30 days, no credit card required.
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>

    </Box>

      <Modal title="Basic Modal" visible={isOpen} width={700} footer={null} closable={false}>
        <NewBusinessForm />
      </Modal>
    </>
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
    backgroundColor: "#F9FBFD",
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
  bannerContent: {
    backgroundColor: rgba("#000", 0.93),
    boxShadow: [
      "0px 10px 16px rgba(52, 61, 72, 0.12)",
      null,
      null,
      null,
      "none",
    ],
    // widht:"481px",
    // height:"581px",
    textAlign:"left",
    padding: [
      "20px",
      "30px",
      null,
      null,
      null,
      "30px 50px 60px",
      "50px 60px 90px",
    ],
    borderRadius: "10px",
    borderWidth: 1,
    borderColor: "black",
    m: ["110px 0 0", null, null, "110px auto 0", "60px 0 0", null, 0],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        maxWidth: 515,
        mt: 70,
        padding: "30px 50px 65px",
      },
  },
  heroTitle: {
    fontSize: "130px",
    fontWeight: 400,
    lineHeight:"195px", 
    letterSpacing: "heading",
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        fontSize: 40,
      },
  },
  desc: {
    fontSize: "31px",
    lineHeight: "46px",
    fontWeight: 500,
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    color: rgba("#fff", 1),
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        mt: 15,
      },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ["auto", "auto", "initial"],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: "100%",
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ":focus": {
      outline: "0 none",
    },
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
