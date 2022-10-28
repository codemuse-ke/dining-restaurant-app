import React from "react";
import { images } from "../../constants";

import "./index.css";

const AboutUs = () => (
  <div className="app_aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about ">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">
          Dine Masters serves spirited, Italian-influenced food that reflects a
          longstanding commitment to local agriculture and sustainability. Our
          menu celebrates our relationships with area farmers, tradition-based
          artisans, agricultural-based Italian importers, and winemakers.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_about ">
        <h1 className="headtext__cormorant">Our history</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">
          While the experience at Dine masterss showcases our focus on procuring
          the highest quality food and wine, we are, above all, committed to
          making our industry a more equitable and sustainable home for all of
          those who work in it.
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);
export default AboutUs;
