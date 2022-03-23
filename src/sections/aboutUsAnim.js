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
  Divider
} from "theme-ui";
import { backgroundImages, rgba } from "polished";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useControllableState
} from "@chakra-ui/react";

import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  useMotionValue,
  motion,
  useTransform,
  useElementScroll,
  useViewportScroll
} from "framer-motion";

import { keyframes } from "@emotion/react";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import { useRefScrollProgress } from "hooks/useRefScrollProgress";

const MotionAccordion = motion(AccordionItem);
const MotionBox = motion(Box);

import { useLocomotiveScroll } from "react-locomotive-scroll";
import useOnScreen from "hooks/useOnScreen";
import { BusinessAccordion } from "components/accordion/BusinessAccordion";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

/**
 * const x = useMotionValue(0)
const input = [-200, 0, 200]
const output = [0, 1, 0]
const opacity = useTransform(x, input, output)
 */

export default function UserStories({
  colorStart = "#333399",
  colorEnd = "#663399",
  fadeIn = true,
  fadeOut = true,
  showProgress = false,
  title
}) {
  // you need a state and updater to change the value

  const [currentFeature, setCurrentFeature] = useState(0);

  const [value, setValue] = useState([]);

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue
  });

  const divRef = useRef(null);

  const { scrollYProgress } = useViewportScroll();
  // const { scrollYProgress } = useElementScroll(divRef);

  const { ref, start, end } = useRefScrollProgress(divRef);

  // const scale = useTransform(
  //   scrollYProgress,
  //   [0.5, 0.2, 0.66, 1],
  //   [0.5, 0.75, 0.5, 1]
  // );

  const scale = useTransform(scrollYProgress, [start, end], [1, 5]);

  // const scale = useTransform(scrollYProgress, [0, 1], [0, 200], {
  //   clamp: true,
  // });
  // scrollYProgress.onChange(setProgress);

  useEffect(() => {
    scrollYProgress.onChange(latest => {
      // console.log(latest);
      // console.log("Start & End", start, end);
    });
  }, []);

  // Fade background from start to finish.
  // const bg = useTransform(progress, [0, 1], [colorStart, colorEnd]);

  // Fade title in halfway and out at the end.
  // const title1Opacity = useTransform(
  //   progress,
  //   [0, 0.5, 1],
  //   [fadeIn ? 0 : 1, 1, fadeOut ? 0 : 1]
  // );
  // const accordionStates = useTransform(progress, [0,0.5,1], [
  //   internalValue
  // ])
  // const title1Rotation = useTransform(
  //   progress,
  //   [0, 0.5, 1],
  //   [0, "180deg", "360deg"]
  // );
  // const title2Opacity = useTransform(
  //   progress,
  //   [0, 0.5, 1],
  //   [fadeIn ? 0 : 1, 1, fadeOut ? 0 : 1]
  // );
  // const title3Opacity = useTransform(
  //   progress,
  //   [0, 0.5, 1],
  //   [fadeIn ? 0 : 1, 1, fadeOut ? 0 : 1]
  // );
  // const title4Opacity = useTransform(
  //   progress,
  //   [0, 0.5, 1],
  //   [fadeIn ? 0 : 1, 1, fadeOut ? 0 : 1]
  // );

  // Locomotive
  //   const { scroll } = useLocomotiveScroll();

  // const bgProgress = useTransform(progress, [0, 1], ["100% 0%", "100% 100%"]);

  //   const ref = useRef(null);

  //   const onScreen = useOnScreen(ref);

  //   useEffect(() => {
  //     if (onScreen) {
  //     }
  //   });

  const featureSlides = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1615617396130-db493d04e2c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100",
      title: "Distribution",
      description:
        "With many customers throughout the retail industry, we have deep experience in working with companies like yours. Business 360 has taken this industry expertise and bundled it into the retail solution to solve the unique business challenges of the manufacturing, wholesale, and retail industries. Combine this industry expertise with the leading practices developed by our retail-dedicated professional services team, we help our customers transform their businesses in consumable stages to develop a competitive advantage in the marketplace"
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1561532089-cb18d10f86b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100",
      title: "Freight",
      description:
        "SubLo is a hyperlocal marketplace that is enabled by Business 360 to provides all the SaaS tools to local businesses so they can transition towards digitization in an On Demand Economy."
    },
    {
      imageUrl:
        "https://lh3.googleusercontent.com/e6W12HucjyEIRg_nLzpW489zhl65yttWZZlU6IvG5CJe3wURC9tmcBCoHh8TU3-L0MmjGysnXYIG-dgyLsPFPMrzJIq0V3GmeKq03w=s0",
      title: "Security",
      description:
        "SubLo is a hyperlocal marketplace that is enabled by Business 360 to provides all the SaaS tools to local businesses so they can transition towards digitization in an On Demand Economy."
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100",
      title: "HVAC",
      description:
        "SubLo is a hyperlocal marketplace that is enabled by Business 360 to provides all the SaaS tools to local businesses so they can transition towards digitization in an On Demand Economy."
    }
  ];

  const [activeFeatureIndex, setFeatureIndex] = useState(0);

  const featureSliderRef = useRef(null);
  const featureImageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const stopTrigger = () => {
      let tl = gsap.timeline();
      tl.to(featureImageRef.current, {
        scrollTrigger: {
          //   scroller: "#smooth-scroll",
          trigger: featureImageRef.current,
          start: "top top", // top of element and top of viewport
          end: () => `${featureSliderRef.current.offsetHeight}`,
          /**
           * start: "top top" triggers when the orange element's top edge
           * hits the top of the viewport.
           * end: "bottom 150px" stops pinning
           * when the bottom of the orange element hits 150px down
           * from the top of the viewport (measurements are relative to the top
           */
          //   end: "bottom 100%",
          scrub: true,
          pin: true,
          markers: true,
          pinSpacing: false
          //   onUpdate: getCurrentSection,
        }
      }).to(".class-of-business", {
        scrollTrigger: {
          trigger: ".class-of-business",
          start: "top 80px",
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          pin: true,
          scrub: true,
          pinSpacing: false
        }
      });

      //   contentMarkers.forEach((marker) => {
      //     marker.content = document.querySelector(
      //       `#${marker.dataset.markerContent}`
      //     );

      //     console.log("marker, marker.content", marker.dataset.markerContent);
      //     // if (marker.content.tagName === "h2") {
      //     gsap.set(marker.content, { transformOrigin: "center" });
      //     marker.content.enter = function () {
      //       gsap.fromTo(
      //         marker.content,
      //         { autoAlpha: 0, rotateY: -30 },
      //         { duration: 0.3, autoAlpha: 1, rotateY: 0 }
      //       );
      //       //   };
      //     };
      //   else if(marker.content.tagName === "BLOCKQUOTE") {
      //     gsap.set(marker.content, {transformOrigin: "left center"});

      //     marker.content.enter = function() {
      //       gsap.fromTo(marker.content, {autoAlpha: 0, rotateY: 50}, {duration: 0.3, autoAlpha: 1, rotateY: 0});
      //     }

      //     marker.content.leave = function () {
      //       gsap.to(marker.content, { duration: 0.1, autoAlpha: 0 });
      //     };
      //   });

      // Handle the updated position
      //   let lastContent;
      //   function getCurrentSection() {
      //     let newContent;
      //     const currScroll = scrollY;

      //     // Find the current section
      //     contentMarkers.forEach((marker) => {
      //       if (currScroll > marker.offsetTop) {
      //         newContent = marker.content;
      //       }
      //     });

      //     // If the current section is different than that last, animate in
      //     if (
      //       newContent &&
      //       (lastContent == null || !newContent.isSameNode(lastContent))
      //     ) {
      //       // Fade out last section
      //       if (lastContent) {
      //         lastContent.leave();
      //       }

      //       // Animate in new section
      //       newContent.enter();

      //       lastContent = newContent;
      //     }
      //   }

      return tl;
    };

    const imageScroll = () => {
      const featureImages = gsap.utils.toArray(featureImageRef.current);

      console.log("featureImg", featureImages);

      const tl = featureImages.forEach(effect => {
        // gsap.to(effect, {
        //   y: "-=50",
        //   scrollTrigger: {
        //     trigger: effect,
        //     start: "top bottom",
        //     scrub: 2,
        //     markers: true,
        //   },
        // });
        gsap.fromTo(
          effect,
          { autoAlpha: 0, rotateY: -30 },
          { duration: 0.3, autoAlpha: 1, rotateY: 0 }
        );
      });

      return tl;
    };

    const featureScroll = () => {
      const contentMarkers = gsap.utils.toArray(".feature-parent");

      const tl = contentMarkers.forEach((effect, idx) => {
        gsap.fromTo(
          effect,
          {
            //   y: "-=50",
            opacity: 1,
            duration: 1,
            autoAlpha: 0
            // snap: {
            //   snapTo: 1 / 10, // progress increment
            //   // or "labels" or function or Array
            //   duration: 0.5,
            //   //   directional: true,
            //   ease: "power3",
            //   // onComplete: callback,
            //   // other callbacks: onStart, onInterrupt
            // },
            //   },
          },
          {
            opacity: 0,
            stagger: 0.5,
            delay: idx * 0.3,
            duration: 0.3,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: effect,
              start: "top 250px",
              end: "bottom 10px",
              pin: true,
              scrub: true,
              markers: true,

              //   pinType: "transform",
              //   preventOverlaps: true, // or arbitrary string
              onEnter: () =>
                gsap.to(effect, {
                  //   y: 0,
                  opacity: 1,
                  stagger: -0.2
                }),
              onLeave: () =>
                gsap.to(effect, {
                  //   y: -50,
                  opacity: 0,
                  stagger: 0.2
                }),
              onEnterBack: () =>
                gsap.to(effect, {
                  //   y: 0,
                  opacity: 1,
                  stagger: -0.2
                }),
              onLeaveBack: () =>
                gsap.to(effect, {
                  //   y: 50,
                  opacity: 0,
                  stagger: -0.2
                })
            }
          }
        );
        // gsap.fromTo(
        //   effect,
        //   { autoAlpha: 0, rotateY: -30 },
        //   { duration: 0.3, autoAlpha: 1, rotateY: 0 }
        // );
      });

      return tl;
    };

    const master = gsap.timeline();
    master.add(stopTrigger());
    master.add(featureScroll());
    master.add(imageScroll());
  }, []);

  return (
    <motion.div data-scroll-section className="feature-slides-container">
      <Box
        as="section"
        id="products"
        sx={styles.section}
        ref={featureSliderRef}
      >
        <Box sx={styles.container}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "100%",
                textAlign: "left",
                mt: "45px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Box sx={{ width: "40%", paddingRight: "25px" }}>
                <Box className="class-of-business" sx={{ width: "100%" }}>
                  <Text
                    sx={{
                      fontSize: "48px",
                      fontWeight: 400,
                      lineHeight: "72px",
                      color: "#ffffff",
                      display: "block",
                      transition: "transform 5s ease"
                    }}
                  >
                    Bring your
                    <br /> Business Online
                  </Text>
                  <Divider
                    sx={{
                      border: "0.5px solid #6C6C6C"
                    }}
                  />
                </Box>
                <Accordion
                  allowToggle
                  w="100%"
                  allowMultiple
                  // index={[internalValue]}
                  index={[0, 1, 2, 3]}
                >
                  {featureSlides.map((val, idx) => (
                    <BusinessAccordion
                      key={val.title}
                      index={idx}
                      title={val.title}
                      description={val.description}
                      updateActiveFeature={setFeatureIndex}
                    />
                  ))}
                </Accordion>
              </Box>

              <Box
                sx={{
                  width: "60%",
                  transform: "translateY(-45px)"
                  //   height: "1079px",
                  //   backgroundImages: 'url("/b.jpg")',
                }}
                className="feature-images-parent"
                ref={featureImageRef}
              >
                {/* {featureSlides.map(({ imageUrl }, index) => (
                  
                  
                  <Image
                    className={
                      activeFeatureIndex === index
                        ? "image as-primary"
                        : "image"
                    }
                    key={imageUrl}
                    src={}
                    sx={{
                      // width: "1020px",
                      height: "100vh",
                      opacity: activeFeatureIndex === index ? 0.6 : 0
                    }}
                  />
                ))} */}
                <Image
                  // className={
                  //   activeFeatureIndex === index
                  //     ? "image as-primary"
                  //     : "image"
                  // }
                  // key={featureSlides[activeFeatureIndex]}
                  src={featureSlides[activeFeatureIndex].imageUrl}
                  sx={{
                    // width: "1020px",
                    height: "100vh",
                    // opacity: activeFeatureIndex === index ? 0.6 : 0
                    opacity: 0.6
                  }}
                />
              </Box>
            </Box>
            {/* <Box
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
            </Box> */}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

const styles = {
  section: {
    // background: `url(${bannerBg}) no-repeat center top / cover`,
    // backgroundSize: ["100%", null, null, null, "cover"],
    height: "auto",
    // overflow: "hidden",
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
      mb: ["40px", null, null, "65px"]
    }
  },
  container: {
    // position: "relative",
    height: "400vh",
    // width: "100vw",
    paddingLeft: "150px"
    // paddingRight: "150px",
  }
};
