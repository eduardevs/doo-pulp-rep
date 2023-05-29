import "./NavBarMobile.scss";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ButtonCta } from "../ButtonCta/ButtonCta";
import { Logo } from "../Logo/Logo";

export const NavBarMobile = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="navb">
      <div className="nav-container">
        <div className={`${navOpen ? "bd-tertiary" : "bg-white"}  navbr`}>
          <div className="logo">
            <Logo />
          </div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span className={navOpen ? "" : "lineMiddle"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className={`nav-overlay ${navOpen ? "bd-tertiary" : "bg-white"}`}
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-itm" onClick={() => setNavOpen(!navOpen)}>
              <Link to="#about">A propos</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-itm" onClick={() => setNavOpen(!navOpen)}>
              <Link to="#facts">Le project</Link>

              <div className="nav-item-wrapper"></div>
            </li>
            <li>
              <ButtonCta
                mobile={true}
                text="Nous soutenir"
                href="https://www.kisskissbankbank.com/en/projects/doo-la-pate-a-papier-alternative-francaise"
              />
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
