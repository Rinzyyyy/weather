import React from "react";
import svg from "../image/404.svg";

const page404 = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "89vh",
        backgroundColor: " rgb(203, 201, 201)",
      }}
    >
      <img
        src={svg}
        alt="404"
        style={{
          width: "50vh",
          height: "50vw",
          position: "absolute",
          top: "3%",
          left: "33%",
        }}
      />
      <p
        style={{
          fontSize: "5rem",
          position: "absolute",
          top: "30.5%",
          left: "42.1%",
        }}
      >
        404
      </p>
    </div>
  );
};

export default page404;
