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

export default function Products() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting...");
  };

  return (
    <Box as="section" id="products" sx={styles.section}>
      <Box sx={styles.boxContainer}>
      <Container sx={styles.container}>
        <Box sx={styles.productInfo}>
          <Box
            sx={styles.imageBox}
          >
            <Image src="/TrackOrder.png" sx={styles.image} />
          </Box>
          <Box
            sx={styles.numberBox}
          >
            <Text sx={styles.number}>1</Text>
          </Box>
          <Box
            sx={styles.contentBox}
          >
            <Text sx={styles.productTitle}>Field Service Management</Text>
            <Box>
              <ul>
                <li
                  sx={styles.list}
                >Field Service Management</li>
                <li
                  sx={styles.list}
                >Dispatch Orders to Employees</li>
                <li
                  sx={styles.list}
                >Manage Schedules and Bookings</li>
                <li
                  sx={styles.list}
                >Employee Tracking</li>
                <li
                  sx={styles.list}
                >Order Status</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.productInfo}>
          <Box
            sx={styles.imageBox}
          >
            <Image src="/VendorInventory.png" sx={styles.image} />
          </Box>
          <Box
            sx={styles.numberBox}
          >
            <Text sx={styles.number}>2</Text>
          </Box>
          <Box
            sx={styles.contentBox}
          >
            <Text sx={styles.productTitle}>Inventory Management</Text>
            <Box>
              <ul>
                <li
                  sx={styles.list}
                >Inventory Tracking Automated</li>
                <li
                  sx={styles.list}
                >Inventory Replenishment</li>
                <li
                  sx={styles.list}
                >Inventory Stock Notifications</li>
                <li
                  sx={styles.list}
                >Advanced Orders Control</li>
                <li
                  sx={styles.list}
                >Anaytics Interlinked Service</li>
                <li
                  sx={styles.list}
                >Delivery</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.productInfo}>
          <Box
            sx={styles.imageBox}
          >
            <Image src="/VendorEmployees.png" sx={styles.image} />
          </Box>
          <Box
            sx={styles.numberBox}
          >
            <Text sx={styles.number}>3</Text>
          </Box>
          <Box
            sx={styles.contentBox}
          >
            <Text sx={styles.productTitle}>Employee Management</Text>
            <Box>
              <ul>
                <li
                  sx={styles.list}
                >Employee Attendance</li>
                <li
                  sx={styles.list}
                >Employee Database</li>
                <li
                  sx={styles.list}
                >Employee Chat</li>
                <li
                  sx={styles.list}
                >Employee Tracking</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.productInfo}>
          <Box
            sx={styles.imageBox}
          >
            <Image src="/VendorEquipment.png" sx={styles.image} />
          </Box>
          <Box
            sx={styles.numberBox}
          >
            <Text sx={styles.number}>4</Text>
          </Box>
          <Box
            sx={styles.contentBox}
          >
            <Text sx={styles.productTitle}>Equipment  Management</Text>
            <Box>
              <ul>
                <li
                  sx={styles.list}
                >Asset Tracking</li>
                <li
                  sx={styles.list}
                >Bookings Overview</li>
                <li
                  sx={styles.list}
                >Equipment Maintenance</li>
                <li
                  sx={styles.list}
                >Equipment Booking</li>
                <li
                  sx={styles.list}
                >Equipment Reports</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.productInfo}>
          <Box
            sx={styles.imageBox}
          >
            <Image src="/Procurement.png" sx={styles.image} />
          </Box>
          <Box
            sx={styles.numberBox}
          >
            <Text sx={styles.number}>5</Text>
          </Box>
          <Box
            sx={styles.contentBox}
          >
            <Text sx={styles.productTitle}>Procurement Management</Text>
            <Box>
              <ul>
                <li
                  sx={styles.list}
                >Supplier Portal</li>
                <li
                  sx={styles.list}
                >Purchase Reciepts and Invoices</li>
                <li
                  sx={styles.list}
                >Purchase Orders</li>
                <li
                  sx={styles.list}
                >Stock Entry</li>
                <li
                  sx={styles.list}
                >Barcodding and Scanning</li>
                <li
                  sx={styles.list}
                >Unlimited Warehouses</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.productInfo}>
          <Box
            sx={styles.imageBox}
          >
            <Image src="/VendorOrders.png" sx={styles.image} />
          </Box>
          <Box
            sx={styles.numberBox}
          >
            <Text sx={styles.number}>6</Text>
          </Box>
          <Box
            sx={styles.contentBox}
          >
            <Text sx={styles.productTitle}>Order Management</Text>
            <Box>
              <ul>
                <li
                  sx={styles.list}
                >Order Listing</li>
                <li
                  sx={styles.list}
                >Order Status</li>
                <li
                  sx={styles.list}
                >Capacity Status</li>
                <li
                  sx={styles.list}
                >Centralized View</li>
                <li
                  sx={styles.list}
                >Quotation Management</li>
                <li
                  sx={styles.list}
                >Order Modification</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.productInfo}>
          <Box
            sx={styles.imageBox}
          >
            <Image src="/Access.png" sx={styles.image} />
          </Box>
          <Box
            sx={styles.numberBox}
          >
            <Text sx={styles.number}>7</Text>
          </Box>
          <Box
             sx={styles.contentBox}
          >
            <Text sx={styles.productTitle}>Access Control</Text>
            <Box>
              <ul>
                <li
                  sx={styles.list}
                >Limit Access to Employees</li>
                <li
                  sx={styles.list}
                >Creating Seperate Accesses</li>
                <li
                  sx={styles.list}
                >Control Employee’s Portal View</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Container>
      </Box>
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
  boxContainer:{
    
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
    textAlign:"center",
    letterSpacing: "heading",
    fontColor:"#1B1C1E",
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ":
      {
        fontSize: "70px",
      },
  },
  productInfo:{
    mt:"101px",
    mb: "73px",
  
    display:"flex",
    "@media only screen and (max-width: 500px) ":{
      width:"100%",
      display:"block"
    },

  },
  number:{
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: "75px",
    color: "#1B1C1E",
    "@media only screen and (max-width: 1024px) ":{
      fontSize: "30px",
      lineHeight: "55px",
    },
    "@media only screen and (max-width: 768px) ":{
      fontSize: "25px",
      lineHeight: "35px",
    },
    "@media only screen and (max-width: 500px) ":{
      fontSize: "25px",
      lineHeight:"25px"
    },
  },

  productTitle:{
    fontStyle: "normal",
    letterSpacing: "heading",
    justifyContent: "space-between",
    fontWeight: 600,
    fontSize: "35px",
    textAlign:"left",
    color: "#1B1C1E",
    "@media only screen and (max-width: 1024px) ":{
      fontSize: "25px",
    },
    "@media only screen and (max-width: 768px) ":{
      fontSize: "20px",
    },
    "@media only screen and (max-width: 500px) ":{
      fontSize: "20px",
    },
  },
  list:{
    textAlign:"left",
    opacity:"0.5",
    color: "#1B1C1E",
    fontSize:"26px",
    lineHeight:"39px",
    ml:"60px",
    "@media only screen and (max-width: 1024px) ":{
      fontSize: "20px",
      ml:"40px",
      lineHeight:"33px",
    },
    "@media only screen and (max-width: 768px) ":{
      fontSize: "15px",
      ml:"30px",
      lineHeight:"23px",
    },
    "@media only screen and (max-width: 500px) ":{
      fontSize: "13px",
      ml:"40px",
      lineHeight:"20px",
    }
  },
  imageBox:{
    padding: [
      "20px",
      "30px",
      null,
      null,
      null,
      "30px 50px 60px",
      "50px 60px 90px",
    ],
    maxWidth:"580px",
    maxHeight:"430px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "@media only screen and (max-width: 1024px) ":{
      maxWidth:"500px",
      maxHeight:"310px",
    },
    "@media only screen and (max-width: 768px) ":{
      maxWidth:"320px",
      maxHeight:"270px",
    },
    "@media only screen and (max-width: 500px) ":{
      maxWidth:"0px",
      maxHeight:"70px",
      border:"3px orange solid",
      display:"none"
    }
  },
  image:{
    maxWidth:"480px",
    maxHeight:"370px",
    //border: "1px solid #1B1C1E",
    boxSizing: "border-box",
    borderRadius: "3px",
    //clipPath: "polygon(0% 0%, 80% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 86%, 0% 20%)",
    "@media only screen and (max-width: 1024px) ":{
      mt:"40px",
      maxWidth:"300px",
      maxHeight:"270px",
    },
    "@media only screen and (max-width: 768px) ":{
      mt:"40px",
      maxWidth:"200px",
      maxHeight:"170px",
    },
    "@media only screen and (max-width: 500px) ":{
      maxWidth:"180px",
      maxHeight:"70px",
      //display:"none"
    }
  },
  numberBox:{
    padding: [
      "20px",
      "30px",
      null,
      null,
      null,
      "30px 50px 60px",
      "50px 60px 90px",
    ],
    maxWidth:"62px",
    maxHeight:"171px",
    ml:"104px",
    mr:"19px",
    "@media only screen and (max-width: 1024px) ":{
      mt:"30px",
    },
    "@media only screen and (max-width: 768px) ":{
      mt:"35px",
    },
    "@media only screen and (max-width: 500px) ":{
      mt:"35px",
      mr:"20px",
      width:"500px",
    }
  },
  contentBox:{
    padding: [
      "30px 50px 60px",
      "50px 1px 90px",
    ],
    mt:"10px",
    
    "@media only screen and (max-width: 1024px) ":{
      mt:"15px",
      textAlign:"left "
    },
    "@media only screen and (max-width: 768px) ":{
      mt:"15px",
      textAlign:"left "
    },
    "@media only screen and (max-width: 500px) ":{
      mr:"15px",
      textAlign:"left "
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