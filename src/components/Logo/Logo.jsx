import "./Logo.scss";
import LogoImg from "../../assets/images/logo.png";
// import { useState } from "react";

export const Logo = ({ secondary, size, ...props }) => {
  const isImg = !secondary ? true : false;
  const text = "Doo Pulp";
  return isImg ? (
    <img src={LogoImg} className="img-fluid w-70" />
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
