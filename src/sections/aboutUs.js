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

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
  Collapse,
} from "@chakra-ui/react";

import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  useMotionValue,
  motion,
  useTransform,
  useElementScroll,
  useViewportScroll,
} from "framer-motion";

import { keyframes } from "@emotion/react";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

const MotionAccordion = motion(AccordionItem);

/**
 * const x = useMotionValue(0)
const input = [-200, 0, 200]
const output = [0, 1, 0]
const opacity = useTransform(x, input, output)
 */

export default function UserStories() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState("");
  // const { scrollYProgress } = useElementScroll(ref)

  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(
    scrollYProgress,
    [0.5, 0.2, 0.66, 1],
    [0.5, 0.75, 0.5, 1]
  );

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  scrollYProgress.onChange(setProgress);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      console.log(latest);
    });
  }, []);

  useEffect(() => {
    console.log("selected-->", selected);
  }, [selected]);

  return (
    <Box as="section" id="aboutUs" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.contentBox}>
          <Box
            sx={styles.box}
            //mt:"45px"
          >
            <Text sx={styles.title}>
              Bring your
              <br /> Business Online
            </Text>
            <Divider sx={styles.divider} />
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <Box
                    onClick={() => setSelected("distribution")}
                    sx={styles.accordianBox}
                  >
                    <AccordionButton>
                      <Box flex="1" sx={{ color: "#ffffff" }}>
                        <Text sx={styles.accordianTitle}>Distribution</Text>
                      </Box>
                      <Box sx={styles.iconDistribution}>
                        <AccordionIcon color="#ffffff" mt={20} />
                        {/* <Icon as={BsArrowUpCircle} /> */}
                        {/* <FontAwesomeIcon icon="fa-thin fa-circle-arrow-down" color="#fffff" /> */}
                      </Box>
                    </AccordionButton>
                  </Box>
                </h2>
                <AccordionPanel pb={4} color="#ffffff" mr="10%">
                  Wholesale distributors have had to adapt to rapid and
                  significant change and will need to stay agile in order to
                  remain competitive. Using Business 360, distributors can run
                  their businesses on a single, unified platform reducing IT
                  costs and gaining comprehensive, real-time visibility across
                  their organizations. Run your entire business on a single,
                  true cloud platform. Rid yourself of multiple, disparate
                  applications and bring all your data into a single,
                  customizable system, accessible from anywhere. Know your
                  operations like never before. Gain insight from data gathered
                  across your organization and empower your employees with the
                  information they need.
                </AccordionPanel>
              </AccordionItem>

              <Divider sx={styles.divider} />
              <AccordionItem>
                <h2>
                  <Box
                    onClick={() => setSelected("freight")}
                    sx={styles.accordianBox}
                  >
                    <AccordionButton>
                      <Box flex="1" sx={{ color: "#ffffff" }}>
                        <Text sx={styles.accordianTitle}>Freight</Text>
                      </Box>
                      <Box sx={styles.iconFreight}>
                        <AccordionIcon color="#ffffff" mt={20} />
                      </Box>
                    </AccordionButton>
                  </Box>
                </h2>
                <AccordionPanel pb={4} color="#ffffff" mr="10%">
                  Globalization makes our world smaller every day. With
                  intensely competitive international markets comes an increased
                  pressure to deliver timely service while keeping costs low.
                  Behind the simplistic idea of moving products from point, A to
                  B is a complex set of challenges that must be faced
                  head-on—inventory management, supply chain visibility,
                  compliance, and accounting workflows. To overcome these
                  obstacles, transportation and logistics companies need to be
                  able to process information faster and act immediately on
                  results. Whether you move goods via air, land, or sea,
                  Business 360’s cloud-based business management suite enables
                  your business to improve visibility, minimize complexity and
                  remain agile in the face of massive change
                </AccordionPanel>
              </AccordionItem>

              <Divider sx={styles.divider} />

              <AccordionItem>
                <h2>
                  <Box
                    onClick={() => setSelected("hvac")}
                    sx={styles.accordianBox}
                  >
                    <AccordionButton>
                      <Box flex="1" sx={{ color: "#ffffff" }}>
                        <Text sx={styles.accordianTitle}>HVAC</Text>
                      </Box>
                      <Box sx={styles.iconHvac}>
                        <AccordionIcon color="#ffffff" mt={20} />
                      </Box>
                    </AccordionButton>
                  </Box>
                </h2>
                <AccordionPanel pb={4} color="#ffffff" mr="10%">
                  Whether it is drafting equipment proposals, managing
                  customers, calculating flat-rate pricing, boosting sales, or
                  performing a range of other business functions, Business 360
                  has got you covered! It is a one-point solution that manages
                  everything through a web-based system. It will supplement your
                  sales team’s efforts by providing a ready comparison chart of
                  the various models within seconds. With Business 360 your
                  customers will have access to online, real-time scheduling.
                  They can instantly schedule appointments for the required
                  services, from the comfort of their home. Even spikes in
                  seasonal demand for spring and fall tune-ups can be easily and
                  conveniently managed. Additionally, Business 360 can help you
                  manage your Field Worker's timesheets and payroll so they’re
                  paid on time.
                </AccordionPanel>
              </AccordionItem>
              <Divider sx={styles.divider} />
              <AccordionItem>
                <h2>
                  <Box
                    onClick={() => setSelected("retail")}
                    sx={styles.accordianBox}
                  >
                    <AccordionButton>
                      <Box flex="1" sx={{ color: "#ffffff" }}>
                        <Text sx={styles.accordianTitle}>Retail</Text>
                      </Box>
                      <Box sx={styles.iconRetail}>
                        <AccordionIcon color="#ffffff" mt={20} />
                      </Box>
                    </AccordionButton>
                  </Box>
                </h2>
                <AccordionPanel pb={4} color="#ffffff" mr="10%">
                  With many customers throughout the retail industry, we have
                  deep experience in working with companies like yours. Business
                  360 has taken this industry expertise and bundled it into the
                  retail solution to solve the unique business challenges of the
                  manufacturing, wholesale, and retail industries. Combine this
                  industry expertise with the leading practices developed by our
                  retail-dedicated professional services team, we help our
                  customers transform their businesses in consumable stages to
                  develop a competitive advantage in the marketplace
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box
            sx={{
              width: "1020px",
              "@media only screen and (max-width: 1024px)": {
                width: "900px",
              },
              "@media only screen and (max-width: 768px)": {
                width: "700px",
              },
            }}
          >
            {selected === "distribution" ? (
              <Image src="/distribution.jpg" sx={styles.image} />
            ) : selected === "freight" ? (
              <Image src="/freight.jpg" sx={styles.image} />
            ) : selected === "hvac" ? (
              <Image src="/hvac.jpg" sx={styles.image} />
            ) : selected === "retail" ? (
              <Image src="/b.jpg" sx={styles.image} />
            ) : null}
          </Box>
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
    textAlign: "left",
    letterSpacing: "heading",
    fontColor: "#1B1C1E",
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        fontSize: "70px",
      },
  },
  title: {
    fontSize: "48px",
    fontWeight: 400,
    lineHeight: "72px",
    fontColor: "#fffff",
    "@media only screen and (max-width: 1024px) ": {
      fontSize: "35px",
      fontWeight: 400,
      lineHeight: "52px",
    },
    "@media only screen and (max-width: 768px) ": {
      fontSize: "30px",
      fontWeight: 400,
      lineHeight: "42px",
    },
  },
  image: {
    height: "580px",
    width: "1025px",
    float: "right",
    mt: "22%",
    "@media only screen and (max-width: 1024px)": {
      mt: "26%",
      width: "550px",
      height: "680px",
    },
    "@media only screen and (max-width: 768px)": {
      width: "500px",
      height: "800px",
      display: "none",
    },
  },
  box: {
    width: "700px",
    textAlign: "left",
    color: "#ffffff",
    mt: "45px",
    "@media only screen and (max-width: 1024px) ": {
      width: "600px",
    },
    "@media only screen and (max-width: 768px) ": {
      width: "4000px",
    },
    "@media only screen and (max-width: 425px) ": {
      width: "700px",
    },
  },
  divider: {
    width: "600px",
    mt: "1px",
    border: "0.5px solid #6C6C6C",
    "@media only screen and (max-width: 1024px) ": {
      width: "420px",
      mt: "16px",
    },
    "@media only screen and (max-width: 768px) ": {
      width: "700px",
      mt: "14px",
    },
    "@media only screen and (max-width: 425px) ": {
      width: "400px",
      mt: "14px",
    },
  },
  accordianTitle: {
    fontSize: "26px",
    color: "#fffff",
    "@media only screen and (max-width: 1024px) ": {
      fontSize: "20px ",
    },
    "@media only screen and (max-width: 768px) ": {
      fontSize: "18px ",
      ml: "50px",
    },
  },
  contentBox: {
    display: "flex",
    width: "1590px",
    height: "1200px",
    "@media only screen and (max-width: 1024px) ": {
      width: "1000px",
    },
    "@media only screen and (max-width: 768px) ": {
      width: "400px",
      height: "900px",
    },
    "@media only screen and (max-width: 500px) ": {
      width: "400px",
    },
    "@media only screen and (max-width: 400px) ": {
      width: "300px",
      height: "1600px",
    },
  },
  accordianBox: {
    width: "600px",
    "@media only screen and (max-width: 1024px) ": {
      width: "420px",
    },
    "@media only screen and (max-width: 768px) ": {
      width: "600px",
    },
    "@media only screen and (max-width: 500px) ": {
      width: "300px",
    },
    "@media only screen and (max-width: 400px) ": {
      width: "300px",
    },
  },
  iconDistribution: {
    ml: "65%",
    "@media only screen and (max-width: 1024px) ": {
      ml: "65%",
    },
    "@media only screen and (max-width: 768px) ": {
      ml: "65%",
    },
    "@media only screen and (max-width: 500px) ": {
      ml: "35%",
    },
  },
  iconFreight: {
    ml: "75%",
    "@media only screen and (max-width: 1024px) ": {
      ml: "75%",
    },
    "@media only screen and (max-width: 768px) ": {
      ml: "71.5%",
    },
    "@media only screen and (max-width: 500px) ": {
      ml: "48%",
    },
  },
  iconHvac: {
    ml: "77%",
    "@media only screen and (max-width: 1024px) ": {
      ml: "77%",
    },
    "@media only screen and (max-width: 768px) ": {
      ml: "72.5%",
    },
    "@media only screen and (max-width: 500px) ": {
      ml: "50%",
    },
  },
  iconRetail: {
    ml: "77%",
    "@media only screen and (max-width: 1024px) ": {
      ml: "77%",
    },
    "@media only screen and (max-width: 768px) ": {
      ml: "72.5%",
    },
    "@media only screen and (max-width: 500px) ": {
      ml: "50%",
    },
  },
  content: {
    fontSize: "36px",
    fontWeight: 400,
    textAlign: "left",
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
