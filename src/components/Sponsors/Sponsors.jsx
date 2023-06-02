import sponsor1 from "../../assets/images/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor2.png";
import sponsor3 from "../../assets/images/sponsor3.png";
import sponsor4 from "../../assets/images/sponsor4.png";
import sponsor5 from "../../assets/images/sponsor5.png";
import sponsor6 from "../../assets/images/sponsor6.png";
import sponsor7 from "../../assets/images/sponsor7.png";
import "./Sponsors.scss";
import "aos/dist/aos.css";

export const Sponsors = ({ ...props }) => {
  const title = "Ils nous soutiennent";
  const data = [
    {
      name: "enactus",
      img: sponsor1,
      link: "https://enactus.fr/",
    },
    {
      name: "Université de Lille",
      img: sponsor2,
      link: "https://www.univ-lille.fr/",
    },
    {
      name: "Kiss Kiss Bank Bank",
      img: sponsor3,
      link: "https://www.kisskissbankbank.com/fr",
    },
    {
      name: "Metropole Europeenne de Lille",
      img: sponsor4,
      link: "https://www.lillemetropole.fr/",
    },
    {
      name: "Pépite",
      img: sponsor5,
      link: "https://pepite.univ-lille.fr",
    },
    {
      name: "IMT Nord Europe",
      img: sponsor6,
      link: "https://imt-nord-europe.fr/",
    },
    {
      name: "IAE Lille",
      img: sponsor7,
      link: "https://iaelille.fr/",
    },
  ];

  const sponsors =
    data &&
    data.map((sponsor) => (
      <div
        data-aos="fade-right"
        className="col-12 col-md-6 col-lg-4 mt-5 sponsor"
      >
        <a
          href={sponsor.link}
          className="justify-content-center d-flex align-items-center"
          target="_blank"
        >
          <img src={sponsor.img} className="h-custom" alt={sponsor.name} />
        </a>
      </div>
    ));

  return (
    <div className={`container-fluid p-5 container mt-5`}>
      <div className="text-center">
        <h2 className="title">{title}</h2>
      </div>
      <div className="row mt-5 justify-content-around">{sponsors}</div>
    </div>
  );
};
