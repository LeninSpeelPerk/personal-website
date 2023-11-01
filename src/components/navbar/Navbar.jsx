import React from "react";
import "./navabar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h1>Lenin Speel Perk</h1>
        </div>
        <div className="navbar-links_container">
          <p>
            <a id="active" href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#services">Services</a>
          </p>
          <p>
            <a href="#portfolio">Portfolio</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
