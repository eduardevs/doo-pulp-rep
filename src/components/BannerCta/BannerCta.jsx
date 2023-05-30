import "./BannerCta.scss";
import Background from "../../assets/images/bg-mountain.png";

export const BannerCta = () => {
  return (
    <div className="container-fluid" id="bannerCta">
      <div className="row bd-tertiary banner-cta h-2"></div>
      <div className="position-relative block-banner text-center">
        <h1 className="title">Faisons du papier sans arbres !</h1>
        <h3>
          Sauvons les poumons verts de la planète avec la pâte à papier
          alternative Doo
        </h3>
        <div className="bg-banner">
          <img src={Background} className="img-fluid bg-img" />
        </div>
      </div>
    </div>
  );
};
