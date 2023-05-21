import "./About.scss";

export const About = ({ data, title, subtitle, ...props }) => {
  const paragraphs = [
    "Nous souhaitons développer une nouvelle matière première d'origine végétale pour remplacer le bois dans la fabrication industrielle du papier.",
    "Les fibres utilisées pour la fabrication des pâtes à papier seront des dites végétales alternatives (chanvre, bambou, miscanthus, paille de céréales et de colza, canne de maïs et tournesol",
    "Les pâtes à papier seront vendues comme matière première aux usines d’impression de papier hygiénique, d’emballage ou graphique.",
    "Cela sera possible à travers la mise en place d'un site de production de pâte à papier basé sur une démarche complètement locale et écoresponsable.",
  ];

  const Content = paragraphs.map((paragraph, key) => (
    <div key={key}>{paragraph}</div>
  ));

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-4">
          <h1 className="title color-secondary">{title}</h1>
        </div>
        <div className="col-6">
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="card bd-primary row">
        <p>{Content}</p>
      </div>
    </div>
  );
};
