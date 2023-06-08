import "./Logo.scss";
import LogoImg from "../../assets/images/logo-original.png";
// import { useState } from "react";

export const Logo = ({ secondary, size, ...props }) => {
  const isImg = !secondary ? true : false;
  const text = "Doo Pulp";
  return isImg ? (
    <div className="logo-container">
      <a href="/">
        <img src={LogoImg} className="img-fluid" />
      </a>
    </div>
  ) : (
    <div>
      <h2
        className={`${size === "small" ? "fs-small" : "fs-large"} title-logo`}
      >
        {text}
      </h2>
    </div>
  );
};
