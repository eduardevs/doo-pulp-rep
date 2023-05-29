import { useState } from "react";
// import "./Values.scss";
import sponsor1 from "../../assets/images/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor2.png";
import sponsor3 from "../../assets/images/sponsor3.png";
import sponsor4 from "../../assets/images/sponsor4.png";
import sponsor5 from "../../assets/images/sponsor5.png";
import sponsor6 from "../../assets/images/sponsor6.png";
import sponsor7 from "../../assets/images/sponsor7.png";

export const Sponsors = ({ ...props }) => {
  const title = "Ils nous soutiennent";
  const data = [
    {
      name: "enactus",
      img: sponsor1,
    },
    {
      name: "Université de Lille",
      img: sponsor2,
    },
    {
      name: "Kiss Kiss Bank Bank",
      img: sponsor3,
    },
    {
      name: "Metropole Europeenne de Lille",
      img: sponsor4,
    },
    {
      name: "Pépite",
      img: sponsor5,
    },
    {
      name: "IMT Nord Europe",
      img: sponsor6,
    },
    {
      name: "IAE Lille",
      img: sponsor7,
    },
  ];

  const sponsors =
    data &&
    data.map((sponsor) => (
      <div className="col-12 col-md-6 col-lg-4 justify-content-center d-flex mt-5">
        <img src={sponsor.img} className="" alt={sponsor.name} />
      </div>
    ));

  return (
    <div className={`container-fluid p-5 container`}>
      <div className="text-center">
        <h2 className="title">{title}</h2>
      </div>
      <div className="row mt-5 justify-content-around">{sponsors}</div>
    </div>
  );
};
