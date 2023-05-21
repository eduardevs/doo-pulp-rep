import { useState } from "react";
import "./Values.scss";

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

  const principlesT = principles.map((principle) => (
    <div className="col-lg-4 col-md-6 col-12 text-center d-flex">
      <div
        className={`container-fluid p-5 ${
          !isList ? "bg-tertiary principleBox" : "fs-4 color-secondary"
        }`}
      >
        {isList ? (
          <ul>
            <li>{principle}</li>
          </ul>
        ) : (
          <h4>{principle}</h4>
        )}
      </div>
    </div>
  ));

  return (
    <div className={`container-fluid p-5 ${isBg ? "" : "bd-tertiary"}`}>
      <div className="text-center">
        <h2 className="title">{title}</h2>
      </div>
      <div className="row mt-5">{principlesT}</div>
      {extraText && (
        <div className="bold fs-4 text-center color-secondary">
          {" "}
          {extraText}{" "}
        </div>
      )}
    </div>
  );
};
