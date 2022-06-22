import React from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header-content container">
        <div className="header-content__title">Portfolio</div>
        <div className="header-content__subtitle">
          Agency provides a full service range including technical skills,
          design, business understanding.
        </div>
      </div>
    </div>
  );
};

export default Header;
