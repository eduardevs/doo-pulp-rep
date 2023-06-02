import "./Values.scss";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Values = ({
  principles,
  title,
  withBgColor,
  extraText,
  withList,
  ...props
}) => {
  let [isBg, setIsBg] = useState(withBgColor ? true : false);
  let [isList, setIsList] = useState(withList ? true : false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const principlesT = principles.map((principle) => (
    <div className="col-lg-4 col-md-6 col-12 mt-3 text-center d-flex">
      <div
        className={`container-fluid container p-5 ${
          !isList ? "bg-tertiary principleBox" : "fs-4 color-secondary"
        }`}
      >
        {isList ? (
          <ul className="text-bold">
            <li data-aos="fade-right">{principle}</li>
          </ul>
        ) : (
          <h4>{principle}</h4>
        )}
      </div>
    </div>
  ));

  return (
    <div className={`container-fluid p-5 ${isBg ? "" : "bd-tertiary"}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="title">{title}</h2>
        </div>
        <div className="row mt-5">{principlesT}</div>
        {extraText && (
          <div className="text-bold fs-4 text-center color-secondary">
            {extraText}
          </div>
        )}
      </div>
    </div>
  );
};
