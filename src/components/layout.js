/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import React from "react";
import Header from "./header/header";
import Footer from "./footer";
export default function Layout({ children, ...props }) {
  return (
    <React.Fragment>
      <Header />
      <main
        sx={{
          variant: "layout.main",
        }}
        {...props}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
