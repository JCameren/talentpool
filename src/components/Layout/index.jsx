import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

import React from "react";

const Layout = ({ user, setUser, children }) => {
  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
