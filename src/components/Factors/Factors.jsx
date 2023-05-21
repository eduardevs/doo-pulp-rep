// import "./Authors.scss";
import { useState } from "react";

export const Factors = ({ data, title, ...props }) => {
  const [lastItem, setLastItem] = useState(
    data.filter((fact, index, array) => index === array.length - 1)
  );
  // const [lastItemObj, setLastItemObj] = useState(...lastItem);
  const copyLastItem = { ...lastItem };
  console.log(copyLastItem);
  console.log(lastItem[0].title, lastItem[0].descriptions[0]);

  const factDivs =
    data &&
    data.map((fact, index, array) => (
      <div className="row">
        {fact.img && (
          <div className={`order-${index == 0 ? 1 : 0} col-md-6`}>
            <img className="img-fluid" src={fact.img} />
          </div>
        )}
        <div
          className={`order-${index} ${
            index === array.length - 1 ? "last-item" : "col-md-6"
          } `}
        >
          {index !== array.length - 1 && (
            <li className="">
              <h2>{index !== array.length - 1 && fact.title}</h2>
              {index !== array.length - 1 &&
                fact.descriptions.map((li, i, arr) => (
                  <div className="fw-bold fs-5">{li}</div>
                ))}
            </li>
          )}
          {index === array.length - 2 && (
            <li className="">
              <h2>{lastItem[0].title}</h2>
              {lastItem[0].descriptions.map((li, i, arr) => (
                <div className="fw-bold fs-5">{li}</div>
              ))}
            </li>
          )}
        </div>
      </div>
    ));
  return (
    <div className="container-fluid bd-tertiary p-5">
      <div>
        <h1>{title}</h1>
      </div>
      {factDivs && <ul className="">{factDivs}</ul>}
    </div>
  );
};
