import { Logo } from "../Logo/Logo";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faInstagramSquare,
} from "@fortawesome/free-solid-svg-icons";
import { SignatureEduarDevs } from "../SignatureEduarDevs/SignatureEduarDevs";
import "./Footer.scss";

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
      <li className="nav-link">
        <a
          href={social.link}
          target="_blank"
          className="color-secondary link-social fs-6 text-bold"
        >
          <img src={social.img} alt={social.name} className="logo-social" />
          <span className="ms-2">{social.text}</span>
        </a>
      </li>
    ));

  return (
    <div className="container-fluid bd-tertiary">
      <div className="container">
        <div className="row p-5 mt-5">
          <div className="col-6 col-md-4 ">
            <Logo secondary={true} size="small" />
          </div>
          <div className="col-6 col-md-4">
            <h4 className="text-center color-secondary">Contact :</h4>
            <ul>
              <li className="nav-link ms-2 color-secondary text-bold">
                <a
                  className=" color-secondary link-social fs-6 d-flex align-items-center"
                  href="mailto:doopapier@gmail.com"
                >
                  <FontAwesomeIcon icon={faAddressBook} size="2x" />{" "}
                  <span className="ms-20">doopapier@gmail.com</span>
                </a>
              </li>
              {SocialList && SocialList}
              {/* <FontAwesomeIcon icon={faInstagramSquare} /> */}
            </ul>
          </div>
        </div>
        <SignatureEduarDevs />
      </div>
    </div>
  );
};
