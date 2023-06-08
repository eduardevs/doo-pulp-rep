import "./About.scss";
// import { Logo } from "../Logo/Logo";
// import "aos/dist/aos.css";

export const About = ({ data="data", title="example", subtitle="test1", subtitle2= "test2", ...props }) => {
  const paragraphs = [
    "Nous souhaitons développer une nouvelle matière première d'origine végétale pour remplacer le bois dans la fabrication industrielle du papier.",
    "Les fibres utilisées pour la fabrication des pâtes à papier seront des dites végétales alternatives (chanvre, bambou, miscanthus, paille de céréales et de colza, canne de maïs et tournesol",
    "Les pâtes à papier seront vendues comme matière première aux usines d’impression de papier hygiénique, d’emballage ou graphique.",
    "Cela sera possible à travers la mise en place d'un site de production de pâte à papier basé sur une démarche complètement locale et écoresponsable.",
  ];

  const Content = paragraphs.map((paragraph, key) => (
    <div className="m-4" key={key}>
      {paragraph}
    </div>
  ));

  return (
    <div className="container mt-7">
      <div className="row">
        <div className="col-12 col-lg-4">
          {/* <Logo secondary={true} /> */}
        </div>
        <div className="col-12 col-lg-6 p-3 ms-md-5">
          <h2 className="subtitle ms-lg-4 ms-xl-0 fs-1">{subtitle}</h2>
          <span className="d-block subtitle fs-1 text-bold">{subtitle2}</span>
        </div>
      </div>
      <div className="card bd-primary row p-3 m-4 fs-4 bold paragraph">
        <p>{Content}</p>
      </div>
    </div>
  );
};
