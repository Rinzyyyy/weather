import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Layout = ({ option, auther }) => {
  return (
    <div style={option}>
      <Nav />
      <Outlet />
      <Footer auther={auther} />
    </div>
  );
};

export default Layout;
