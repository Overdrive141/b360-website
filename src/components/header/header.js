/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button } from "theme-ui";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Sticky from "react-stickynode";
import Logo from "components/logo";
import { NavLink } from "components/link";
import menuItems from "./header.data";
import {
  Menu,
  MenuButton as MenuB,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          as="header"
          sx={styles.header}
          className={mobileMenu ? "is-mobile-menu" : ""}
        >
          <Container>
            <Box sx={styles.headerInner}>
              <Logo />

              <Flex
                as="nav"
                sx={styles.navbar}
                className={mobileMenu ? "navbar active" : "navbar"}
              >
                <Box
                  as="ul"
                  sx={styles.navList}
                  className={mobileMenu ? "active" : ""}
                >
                  {menuItems.map(({ path, label }, i) => (
                    // <li key={i}>
                    <NavLink
                      key={i}
                      path={path}
                      label={label}
                      onClick={closeMobileMenu}
                    />
                    // </li>
                  ))}
                  <a href="https://beta.sublo.co/" target="_blank" rel="noopener noreferrer">Login</a>
                </Box>
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose onClick={closeMobileMenu} size="20px" />
                </Button>
              ) : (
                <MenuButton
                  aria-label="Toggle Menu"
                  onClick={toggleMobileMenu}
                />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: "transparent",
    ".is-sticky": {
      header: {
        backgroundColor: "#fff",
        boxShadow: "0 6px 13px rgba(38, 78, 118, 0.1)",
        py: [10],
      },
    },
  },
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    py: [20],
    transition: "all 0.3s ease-in-out 0s",
    "&.is-mobile-menu": {
      backgroundColor: "#fff",
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@media only screen and (max-width: 1440px)": {
      ".navbar": {
        position: "absolute",
        top: "100%",
        backgroundColor: "#fff",
        width: "100%",
        left: 0,
        p: "20px 30px",
        display: "block",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        opacity: 0,
        visibility: "hidden",
        transition: "all 0.3s ease-in-out 0s",
        "&.active": {
          opacity: 1,
          visibility: "visible",
        },
        ul: {
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',

          "li + li": {
            marginTop: 5,
          },
        },
        button: {
          marginTop: 8,
          width: "100%",
        },
      },
    },
  },
  navbar: {
    alignItems: "flex-end",
    flexGrow: 1,
    justifyContent: "flex-end",
    //flexDirection: mobileMenu ? 'column' : 'row'
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    marginLeft: "auto",
    "@media only screen and (max-width: 425px) ":{
      display:"block"
    },
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: "0 20px",
      "@media only screen and (min-width: 427px) and (max-width: 768px)":{
        fontSize:"35px"
      },
      "@media only screen and (min-width: 768px) and (max-width: 1440px)":{
        fontSize:"40px"
      }
    },
    ".active": {
      color: "primary",
    },
  },
  joinNow: {
    marginLeft: "auto",
  },
  closeButton: {
    height: "32px",
    padding: "4px",
    minHeight: "auto",
    width: "32px",
    ml: "3px",
  },
};
