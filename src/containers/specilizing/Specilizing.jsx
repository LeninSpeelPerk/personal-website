import React from "react";
import "./specilizing.css";
import ui_design from "../../assets/icons/icons8-ui-design-45.png";
import graphic_design from "../../assets/icons/icons8-graphic-45.png";
import web_design from "../../assets/icons/icons8-web-design-45.png";
import brand_stratergy from "../../assets/icons/icons8-strategy-45.png";
import product_design from "../../assets/icons/icons8-product-design-45.png";
import interactive_design from "../../assets/icons/icons8-interactive-45.png";

const Specilizing = () => {
  return (
    <div className="specilizing-content" id="specilizing">
      <p className="specilizing-content_title">WHAT I DO</p>
      <p className="specilizing-content_heading">Specilizing In</p>
      <div className="specilizing-content_container">
        <div className="specilizing-content_container-item">
          <div>
            <img src={ui_design} alt="" />
            <p className="specilizing-content_container-item-name">
              UI/UX Design
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod magna aliqua tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="specilizing-content_container-item">
          <div>
            <img src={graphic_design} alt="" />
            <p className="specilizing-content_container-item-name">
              Grapic Design
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod magna aliqua tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="specilizing-content_container-item">
          <div>
            <img src={web_design} alt="" />
            <p className="specilizing-content_container-item-name">
              Web Design
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod magna aliqua tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="specilizing-content_container-item">
          <div>
            <img src={brand_stratergy} alt="" />
            <p className="specilizing-content_container-item-name">
              Brand Stratergy
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod magna aliqua tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="specilizing-content_container-item">
          <div>
            <img src={product_design} alt="" />
            <p className="specilizing-content_container-item-name">
              Product Design
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod magna aliqua tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="specilizing-content_container-item">
          <div>
            <img src={interactive_design} alt="" />
            <p className="specilizing-content_container-item-name">
              Interactive Design
            </p>
          </div>
          <p className="specilizing-content_container-item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod magna aliqua tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specilizing;
