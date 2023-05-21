import "./BannerCta.scss";
import Background from "../../assets/images/bg-mountain.png";

export const BannerCta = () => {
  return (
    <div className="container-fluid banner-cta">
      <div className="text-center">
        <h1 className="title">Faisons du papier sans arbres !</h1>

        <h3>
          Sauvons les poumons verts de la planète avec la pâte à papier
          alternative Doo
        </h3>
      </div>
      <div className="bg-banner">
        <img src={Background} className="img-fluid banner-background" />
      </div>
    </div>
  );
};
