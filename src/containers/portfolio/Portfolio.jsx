import React from "react";
import design1 from "../../assets/portfolio-design-1.jpg";
import design2 from "../../assets/portfolio-design-2.jpg";
import design3 from "../../assets/portfolio-design-3.jpg";
import design4 from "../../assets/portfolio-design-4.jpg";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-content" id="portfolio">
      <p className="portfolio-content_title">MY WORKS</p>
      <p className="portfolio-content_heading">Latest Portfolio</p>
      <div className="portfolio-content_container">
        <div className="portfolio-content_container-box">
          <img src={design1} alt="" />
          <p className="portfolio-content_container-box-name">
            Project Name 01
          </p>
          <p className="portfolio-content_container-box-design">Design</p>
        </div>
        <div className="portfolio-content_container-box">
          <img src={design2} alt="" />
        </div>
        <div className="portfolio-content_container-box">
          <img src={design3} alt="" />
        </div>
        <div className="portfolio-content_container-box">
          <img src={design4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
