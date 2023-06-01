import { Logo } from "../Logo/Logo";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";

export const Footer = () => {
  const ListEl = [""];
  const socialNetworks = [
    {
      name: "instagram",
      link: "https://www.instagram.com/doopapier/",
      img: Instagram,
      text: "doopapier",
    },
    // {
    //   name: "Linkedin",
    //   link: "",
    //   img: "",
    // },
    // {
    //   name: "Facebook",
    //   link: "",
    //   img: "",
    // },
  ];

  const SocialList =
    socialNetworks &&
    socialNetworks.map((social) => (
      <li class="nav-link">
        <a href={social.link} target="_blank">
          <img src={social.img} alt={social.name} />
          <span className="color-secondary">{social.text}</span>
        </a>
      </li>
    ));

  return (
    <div className="container-fluid bd-tertiary banner-cta">
      <div className="container">
        <div className="row text-center p-5">
          <div className="col-8 col-md-4 ">
            <Logo secondary={true} size="small" />
          </div>

          <div className="col-6 col-md-4">
            <ul>
              <li class="nav-link color-secondary text-bold">
                Contact : doopapier@gmail.com
              </li>
              {SocialList && SocialList}
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <ul></ul>
          </div>
        </div>
        <div className="text-center p-2 color-secondary">
          Site web fait par Eduardevs
        </div>
      </div>
    </div>
  );
};
