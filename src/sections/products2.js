/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Divider } from "theme-ui";
import { rgba } from "polished";
import Image from "components/bgImage";
import { keyframes } from "@emotion/react";

export default function Products2() {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container sx={styles.container}>
            <Box sx={styles.box}>
                <Box>
                    <Text sx={styles.number}>01</Text>
                </Box>
                <Box sx={styles.titleBox}>
                    <Text sx={styles.title}>Delta Insights</Text>
                    <Box>
                        <ul>
                            <li
                                sx={styles.list}
                            >Data Discovery</li>
                            <li
                                sx={styles.list}
                            >Data Silos and Insights</li>
                            <li
                                sx={styles.list}
                            >Data Vulnerability</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.box}>
                <Box>
                    <Text sx={styles.number}>02</Text>
                </Box>
                <Box sx={styles.titleBox}>
                    <Text sx={styles.title}>Chatbot Builder</Text>
                    <Box>
                        <ul>
                            <li
                                sx={styles.list}
                            >Powerful NLP</li>
                            <li
                                sx={styles.list}
                            >Diaglogue Management</li>
                            <li
                                sx={styles.list}
                            >Knowledge Base</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.box}>
                <Box>
                    <Text sx={styles.number}>03</Text>
                </Box>
                <Box sx={styles.titleBox}>
                    <Text sx={styles.title}>Odyssey</Text>
                    <Box>
                        <ul>
                            <li
                                sx={styles.list}
                            >Detection</li>
                            <li
                                sx={styles.list}
                            >Sentiment Analysis</li>
                            <li
                                sx={styles.list}
                            >Tracing and Object Detection</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.box}>
                <Box>
                    <Text sx={styles.number}>04</Text>
                </Box>
                <Box sx={styles.titleBox}>
                    <Text sx={styles.title}>Centrum</Text>
                    <Box>
                        <ul>
                            <li
                                sx={styles.list}
                            >Automated inventory replenishment</li>
                            <li
                                sx={styles.list}
                            >Inventory listing</li>
                            <li
                                sx={styles.list}
                            >Track your inventory</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.box}>
                <Box>
                    <Text sx={styles.number}>05</Text>
                </Box>
                <Box sx={styles.titleBox}>
                    <Text sx={styles.title}>Omni Channel</Text>
                    <Box>
                        <ul>
                            <li
                                sx={styles.list}
                            >Automated inventory replenishment</li>
                            <li
                                sx={styles.list}
                            >Inventory listing</li>
                            <li
                                sx={styles.list}
                            >Track your inventory</li>
                        </ul>
                    </Box>
                </Box>
            </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    overflow: "hidden",
    backgroundColor: "#1B1C1E",
    textAlign: "center",
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
    background: "#1B1C1E",
    ".imageBackground":{
        width: "1270px",
        height: "1079px",
        left: "1009px",
        top: "1px",
    }  
  },
  box:{
    mt:"61px",
    mb:"40px",
    display:"flex",
    "@media only screen and (max-width: 768px) ":{
        mt:"41px",
        mb:"40px"
    },
    "@media only screen and (max-width: 425px) ":{
        mt:"21px",
        mb:"20px",
        width:"500px"
    }
  },
  titleBox:{
    mt:"73px", textAlign:"left",
    "@media only screen and (max-width: 768px) ":{
        mt:"41px",
    },
    "@media only screen and (max-width: 425px) ":{
        mt:"1px",
        //mb:"20px"
    }

  },
  number:{
    fontWeight:400,
    fontSize:"250px",
    letterSpacing: "0.15em",
    lineHeight:"375px",
    color:"#ffffff",
    "@media only screen and (max-width: 1024px) ":{
        fontSize:"150px",
        letterSpacing: "0.10em",
        lineHeight:"275px",
    },
    "@media only screen and (max-width: 768px) ":{
        fontSize:"100px",
        letterSpacing: "0.10em",
        lineHeight:"175px",
        mt:"20px"
    },
    "@media only screen and (max-width: 425px) ":{
        fontSize:"40px",
        letterSpacing: "10px",
        lineHeight:"45px",
        
    }
  },
  title:{
    ml:"205px",
    mb:"0px",
    fontSize:"50px",
    letterSpacing: "0.15em",
    lineHeight:"105px",
    color:"#ffffff",
    "@media only screen and (max-width: 1024px) ":{
        fontSize:"40px",
        letterSpacing: "0.15em",
        lineHeight:"105px",
    },
    "@media only screen and (max-width: 768px) ":{
        fontSize:"30px",
        letterSpacing: "0.15em",
        lineHeight:"85px",
    },
    "@media only screen and (max-width: 425px) ":{
        fontSize:"15px",
        letterSpacing: "0.01em",
        lineHeight:"55px",ml:"105px",
    },
  },
  list:{
    ml:"265px",
    textAlign:"left",
    opacity:"0.5",
    color: "#ffffff",
    fontSize:"26px",
    lineHeight:"39px",
    "@media only screen and (max-width: 1024px) ":{
        fontSize:"18px",
        lineHeight:"29px",
    },
    "@media only screen and (max-width: 768px) ":{
        fontSize:"15px",
        lineHeight:"25px",
    },
    "@media only screen and (max-width: 425px) ":{
        fontSize:"12px",
        lineHeight:"15px",
        ml:"130px",
    },
    "@media only screen and (max-width: 400px) ":{
        fontSize:"12px",
        lineHeight:"15px",
        ml:"80px",
    },
    
  },  
};
