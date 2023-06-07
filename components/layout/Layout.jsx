import React from "react";
import Navbar from "../modules/Navbar/Navbar";
import Footer from "../modules/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="container main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
