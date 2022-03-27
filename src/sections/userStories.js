/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image, Divider } from "theme-ui";
import { rgba } from "polished";
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
} from '@chakra-ui/react'

import { keyframes } from "@emotion/react";

export default function UserStories() {

  return (
    <Box as="section" id="userStories" sx={styles.section}>
      <Container sx={styles.container}>
      
        <Box sx={styles.contentBox}>
            <Box sx={styles.box} >
                <Text sx={styles.title}>Success Stories</Text>
                <Divider sx={styles.divider} />
                <Accordion allowToggle  >
                    <AccordionItem  >
                        <h2>
                        <AccordionButton>
                            <Box flex='1' sx={{              
                            "@media only screen and (max-width: 768px)":
                            {
                              width:"100%",
                            }}}>
                              <Text 
                                  sx={styles.accordianTitle}
                                >Pure Water Delivery (water company)</Text>
                                
                            </Box>
                            <AccordionIcon flex="right" />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}  >
                          <Text
                            sx={styles.contentAccordian}
                          >
                            <b>Problem:</b> Pure Water Company is a hyperlocal Mineral water delivery company that operates in Islamabad and Rawalpindi, their primary clientele consists of residential and commercial consumers. Managers at Pure Water Company were looking for more transparency and efficiency in both internal and field operations alongside a digital touchpoint for generating online orders.<br /><br />
                            <b>Solution:</b> Business 360 provided pure water company with a customized solution that consisted of a Web-Application for online order generation. Once an order is generated, its notification with delivery information lands in the vendor portal for approval. Web App implementation showed a 35% increase in the company's total new orders. Both online and offline orders are listed in order management giving managers full visibility. <br /><br />
                            Once an order is accepted by the vendor, inventory is automatically adjusted and the order is allocated to the allotted employee. Moreover, Business 360 allowed Pure Water to evaluate a pool of orders, and determine the optimal transportation mode, route, and carrier to minimize expenses within the required customer service level constraints.<br /><br />
                            Field Service Management then allows the managers to allow the order to the listed employee which can then be managed and live tracked through the vendor portal until its delivery.
                          </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <Divider sx={styles.divider} />

                    <AccordionItem>
                        <h2>
                        <AccordionButton textAlign="left">
                            <Box flex='1' sx={{textAlign:  "left"}}>
                                <Text 
                                  sx={styles.accordianTitle}
                                >Safe Home Solutions (HVAC)</Text>
                            </Box>
                            <AccordionIcon mt={20} />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mr="10%">
                        <b>Problem:</b> Managing field service-based industries such as HVAC is very difficult. Most of the companies are switching to these cloud-based ERPs to get the solutions to all problems in one place. Managers at Safe Home Solutions were also finding it difficult to track their orders and employees operating in the field, they were looking for a more remote and transparent solution that provides them with full visibility of their business operations both infield and internally. They were also looking to increase their orders as currently, they were only getting offline orders.<br /><br />
                        <b>Solution:</b> Business 360 Field Workforce Management solved all operational difficulties by providing end-to-end digitization from order generation to order management and finally order delivery. Managers could exactly track all their assets in the field including employees, vehicles, equipment, etc. This helped them to decrease any time wastage in service provision and increase efficiency by 46%. <br /><br />
                        In order to increase the online orders, a user-friendly Web Application was generated for Safe Home Solutions that allowed customers to order from anywhere anytime, resulting in 67% increase in total orders. 

                        </AccordionPanel>
                    </AccordionItem>
                    <Divider sx={styles.divider} />
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              <Text 
                                  sx={styles.accordianTitle}
                                >Velocity Movers and Packers (Freight)</Text>
                            </Box>
                            <AccordionIcon mt={20} />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mr="10%">
                            <b>Problem:</b>Velocity Movers and Packers were using an ERP system but it required the managers to input data manually in every step of the process, moreover; their system wasn't logging the data entries hence they couldn't see any insights about the business. Managers at the company also wanted efficiency and decreased inventory cycle. <br /><br />
                            <b>Solution:</b> With Business 360, Velocity Movers and Packers managed inventories on a personalized dashboard, letting them view orders, sales, and deliveries from one centralized location. This allows for better decision-making: managers could make predictions about future orders based on previous sales trends. B360 also expedites distribution times. Research shows Business 360 speeds up order-to-shipment times for distributors by 23%.<br /><br />
                            Business 360 comes with real-time data analytics that provides companies with valuable business intelligence. Managers use these programs to identify out-of-stock inventory, handle inbound orders from suppliers, and execute outbound orders for customers. This can be accomplished on a desktop or a smartphone. <br /><br />
                            Business 360 also allowed Velocity Movers and Packers to improve their distribution management flow, from product fulfillment to transportation. These programs gather datasets from multiple sources — in-house records, the internet, social media, etc. — and display information through maps, charts, and graphs
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            <Box sx={{
                width:"1020px",
                "@media only screen and (max-width: 1024px)" :{
                  width:"900px",
                }
            }} >
                <Image src="/userStories.png" 
                  sx={styles.image} />
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
    backgroundColor: "#fffff",
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
    textAlign:"left",
    letterSpacing: "heading",
    fontColor:"#1B1C1E",
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        fontSize: "70px",
      },
  },
  title:{
    fontSize:"48px",
    fontWeight:400,
    lineHeight:"72px",
    color: "#1B1C1E",
    "@media only screen and (max-width: 1024px) ":{
      fontSize:"35px",
      fontWeight:400,
      lineHeight:"52px",
    },
    "@media only screen and (max-width: 768px) ":{
      fontSize:"30px",
      fontWeight:400,
      lineHeight:"52px",
    }
  },
  image:{
    height:"1080px", width:"1025px", float:"right",
    "@media only screen and (max-width: 1024px)" :{
      width:"700px",
      height:"900px",
    },
    "@media only screen and (max-width: 768px)" :{
      display:"none"
    }
  },
  box:{
    width:"700px",
    textAlign:"left",
    "@media only screen and (max-width: 1024px) ":{
      width:"600px",
    },
    "@media only screen and (max-width: 768px) ":{
      width:"4000px",
    },
    "@media only screen and (max-width: 425px) ":{
      width:"700px",
    },
  },
  contentAccordian:{
    "@media only screen and (max-width: 768px) ":{
      width:"550px",
      fontSize:"12px",
      mt:"12px",
      textAlign:"center",
      alignSelf:"center"

    },
    

  },
  divider:{
    width:"600px",
    mt:"24px",
    border: "0.5px solid #6C6C6C",
    "@media only screen and (max-width: 1024px) ":{
      width:"350px",
      mt:"16px",
    },
    "@media only screen and (max-width: 768px) ":{
      width:"700px",
      mt:"16px",
    },
  },
  accordianTitle:{
    fontSize:"26px",
    "@media only screen and (max-width: 1024px) ":{
      fontSize:"20px ",
    },
    "@media only screen and (max-width: 768px) ":{
      fontSize:"15px ",
      ml:"35px"
    }
  },
  contentBox:{
    display:"flex",width:"1590px",height:"1200px",
    "@media only screen and (max-width: 1024px) ":{
      width:"1000px",height:"1200px"
    },
    "@media only screen and (max-width: 768px) ":{
      width:"700px",height:"1400px",  
    }
  },
  content:{
    fontSize: "36px",
    fontWeight: 400,
    textAlign:"left",
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