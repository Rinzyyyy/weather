import React from "react";

const Footer = ({ auther }) => {
  return (
    <div className="foot">
      <p>
        Data from OpenWeather by API
        <br />
        Background-image from pexels by {auther}
      </p>
    </div>
  );
};

export default Footer;
