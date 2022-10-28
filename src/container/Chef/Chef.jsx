import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nobis nulla voluptatum ex corrupti minus possimus odit, alias quos
            mollitia magnam delectus necessitatibus facere excepturi sint autem,
            ab earum temporibus?
          </p>
        </div>
        <p className="p__opensans">
          esse sed, quisquam nihil eveniet explicabo delectus corrupti veniam.
          Molestiae dignissimos nam accusantium ab dolor quos debitis commodi
          nostrum necessitatibus.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Taurell Nay</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
