import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
