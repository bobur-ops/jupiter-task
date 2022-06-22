import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="navbar-logo">
        <div className="navbar-logo__img">
          <img src={require("../../assets/logo.png")} />
        </div>
        <div className="navbar-logo__text">Agency</div>
      </div>
      <div className="navbar-list">
        <nav>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </nav>
      </div>
      <div className="navbar-action">
        <button className="navbar-action__button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
