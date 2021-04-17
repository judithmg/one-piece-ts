import React from "react";
import { Link } from "react-router-dom";
import Toggle from "../../components/Toggle";
import { imgUrls } from "../../constants";
import Back from "../../components/BackIcon";

import "../../styles/Aside.scss";

export default function Aside() {
  return (
    <article className="chardetail__side" data-aos="fade-in">
      <div className="chardetail__top">
        <div className="back-btn">
          <Link to="/">
            <Back />
          </Link>
        </div>
        <Toggle />
      </div>
      <div className="chardetail__imgs">
        <img src={imgUrls.units} alt="logo" className="filter-chars_img"></img>
      </div>
    </article>
  );
}
