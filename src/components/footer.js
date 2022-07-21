/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Text, Container } from "theme-ui";
import { Link } from "components/link";
import Logo from "components/logo";
import { rgba } from "polished";
import { IconButton } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {AiFillLinkedin} from "react-icons/ai"

const navItems = [
  {
    id: 1,
    link: "#home",
    title: "Home",
  },
  {
    id: 2,
    link: "#aboutUs",
    title: "About",
  },
  {
    id: 3,
    link: "#products",
    title: "Products",
  },
  {
    id: 4,
    link: "#userStories",
    title: "Use Cases",
  },
];

export default function Footer() {
  return (
    <Box>
    <Box as="footer" sx={styles.footer}>
    <Flex as="ul" sx={styles.nav}>
        {navItems?.map((item) => (
          <li key={item.id} sx={styles.list}>
            <Link path={item.link}>{item.title}</Link>
          </li>
        ))}
      </Flex>
      <Container sx={styles.container}>
        <Flex sx={styles.content}>
          <Flex sx={styles.copyright}>
            <Logo white />
            <Text as="span">
              All right reserved - Powered by Workcycle Technologies
            </Text>
          </Flex>

          <Flex as="ul" sx={styles.icons}>

          {/* <a href="">
            <IconButton 
              color="#fff"
              w="30px"
              h="28px"
              m={3}
              aria-label='Send email'
              icon={<FaFacebook />}
            />
          </a> */}
          <a href="https://www.instagram.com/business360pk/?igshid=YmMyMTA2M2Y%3D">
            <IconButton 
              color="#fff"
              w="30px"
              h="28px"
              m={3}
              aria-label='Send email'
              icon={<FiInstagram />}
            />
          </a>
          <a href="https://www.linkedin.com/company/business-360pk/about/">
            <IconButton 
              color="#fff"
              w="30px"
              h="28px"
              m={3}
              aria-label='Send email'
              icon={<AiFillLinkedin />}
            />
          </a>

          </Flex>
        </Flex>
      </Container>
    </Box>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1B1C1E",
  },
  content: {
    alignItems: "center",
    borderTop: `1px solid ${rgba("#fff", 0.15)}`,
    display: ["block", null, null, null, "flex"],
    justifyContent: "space-between",
    paddingTop: "20px",
    paddingBottom: "60px",
    textAlign: ["center", null, null, null],
    "@media only screen and (max-width: 400px)": {
      pb: 50,
    },
  },
  copyright: {
    display: ["block", "flex"],
    alignItems: "center",
    justifyContent: ["center", null, null, null],
    span: {
      fontSize: "14px",
      lineHeight: [1.8, null, null, 1.29],
      color: rgba("#FFFFFF", 0.7),
      marginTop: 1,
      display: "inline-flex",
    },
    "@media only screen and (max-width: 1024px) ":{
      span: {
        fontSize: "10px",
      },
    }
  },
  icons: {
    listStyle: "none",
    alignItems: "center",
    padding: 0,
    // display: ['flex'],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, null, null],
    mt: [5, null, null, null, 0],
    li: {
      "+ li": {
        marginLeft: [4],
      },
      "@media only screen and (max-width: 400px)": {
        mb: 4,
      },
      a: {
        color: "white",
        display: "inline-flex",
        textAlign: "right",
        textDecoration: "none",
      },
    },
  },
  nav: {
    listStyle: "none",
    alignItems: "center",
    padding: 0,
    mb:"40.5px",
    ml:"155.5px",
    mr:"55.5px",
    "@media only screen and (max-width: 1024px) ":{
      mb:"25.5px",
    },
    "@media only screen and (max-width: 500px) ":{
      display:"none"
    },
    // display: ['flex'],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, null, null],
    mt: [5, null, null, null, 0],
    li: {
      "+ li": {
        marginLeft: [4],
      },
      "@media only screen and (max-width: 400px)": {
        mb: 4,
      },
      a: {
        color: "white",
        display: "inline-flex",
        textAlign: "right",
        textDecoration: "none",
      },
    },
  },
  list:{
    ml:"245.5px",
    mr:"245.5px",
    "@media only screen and (max-width: 1024px) ":{
      ml:"145.5px",
      mr:"145.5px",
    },
  },
};
