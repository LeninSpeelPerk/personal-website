import React from "react";
import Navbar from "../../components/navbar/Navbar";
import header_img from "../../assets/header.png";
import facebook from "../../assets/icons/icons8-facebook-f-24.png";
import instagram from "../../assets/icons/icons8-instagram-24.png";
import twitter from "../../assets/icons/icons8-twitter-24.png";
import youtube from "../../assets/icons/icons8-youtube-24.png";
import github from "../../assets/icons/icons8-github-24.png";

import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="header-content" id="home">
        <div className="header-content_container">
          <p className="header-content_container-greet">Hello, I am</p>
          <h1 className="header-content_container-title">Lenin Speel Perk</h1>
          <p className="header-content_container-designation">
            Creative Web Designer & Full-Stack Developer
          </p>
          <a href="#contact"><button className="header-content_container-btn">HIRE ME</button></a>
          <div className="header-content_container-follow">Follow On</div>
          <p className="header-content_container-icon">
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/lenin_masss/">
              <img src={instagram} alt="" />
            </a>
            <a href="https://twitter.com/PerkSpeel">
              <img src={twitter} alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UChI9vij1d2ZRQHVa0RUePXw">
              <img src={youtube} alt="" />
            </a>
            <a href="https://github.com/LeninSpeelPerk">
              <img src={github} alt="" />
            </a>
          </p>
        </div>
        <div className="header-content_img">
          <img src={header_img} alt="" width="550px" />
        </div>
      </div>
    </div>
  );
};

export default Header;
