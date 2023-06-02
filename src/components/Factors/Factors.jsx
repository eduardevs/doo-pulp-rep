import "./Factors.scss";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Factors = ({ data, title, ...props }) => {
  const [lastItem, setLastItem] = useState(
    data.filter((fact, index, array) => index === array.length - 1)
  );
  // const [lastItemObj, setLastItemObj] = useState(...lastItem);
  // const copyLastItem = { ...lastItem };
  // console.log(copyLastItem);
  // console.log(lastItem[0].title, lastItem[0].descriptions[0]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const factDivs =
    data &&
    data.map((fact, index, array) => (
      <div className="row">
        {fact.img && (
          <div
            className={`order-1 order-lg-${index == 0 ? 1 : 0} col-12 col-lg-6`}
          >
            <img className="img-fluid w-80" src={fact.img} />
          </div>
        )}
        <div
          className={`order-lg-${index} ${
            index === array.length - 1 ? "" : "col-12 col-lg-6"
          } p-5`}
        >
          {index !== array.length - 1 && (
            <li data-aos="fade-right" className="">
              <h2>{index !== array.length - 1 && fact.title}</h2>
              {index !== array.length - 1 &&
                fact.descriptions.map((li, i, arr) => (
                  <div className="fw-bold fs-5">{li}</div>
                ))}
            </li>
          )}
          {index === array.length - 2 && (
            <li data-aos="fade-right" className=" mt-5">
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
      <div className="container">
        <div className="mb-5">
          <h1 className="title fs-1">{title}</h1>
        </div>
        {factDivs && <ul className="">{factDivs}</ul>}
      </div>
    </div>
  );
};
