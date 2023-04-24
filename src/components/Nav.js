import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <Link to="/weather">Home</Link>
      <Link to="/manual">Manual</Link>
    </nav>
  );
};

export default Nav;
