import { Logo } from "../Logo/Logo";

export const Footer = () => {
  const ListEl = [""];
  const SocialNetworks = [
    {
      name: "Instagram",
      link: "",
      img: "",
    },
    {
      name: "Linkedin",
      link: "",
      img: "",
    },
    {
      name: "Facebook",
      link: "",
      img: "",
    },
  ];
  return (
    <div className="container-fluid bd-tertiary banner-cta">
      <div className="container">
        <div className="row text-center p-5">
          <div className="col-8 col-md-4 ">
            <Logo secondary={true} size="small" />
          </div>

          <div className="col-6 col-md-4">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
