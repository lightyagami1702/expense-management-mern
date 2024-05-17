import React from "react";
import Headers from "./Headers";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Headers />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
