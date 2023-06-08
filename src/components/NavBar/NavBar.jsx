import { ButtonCta } from "../Buttons/ButtonCta/ButtonCta";
import { Logo } from "../Logo/Logo";
import "./NavBar.scss";
import { HashLink as Link } from "react-router-hash-link";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light row w-100">
      <Logo />
      <div
        className="collapse navbar-collapse menu justify-content-center"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav mb-4">
          <li className="nav-item">
            <Link to="#about">A propos</Link>
            {/* <a className="nav-link active" aria-current="page" href="about">
                A propos
              </a> */}
          </li>
          <li className="nav-item ms-5 mb-2">
            <Link to="#facts">Le projet</Link>
            <a className="nav-link" href="facts">
              {/* Le projet */}
            </a>
          </li>
        </ul>
        <div className="mt-5">
          <ButtonCta
            text="Nous soutenir"
            href="https://www.kisskissbankbank.com/en/projects/doo-la-pate-a-papier-alternative-francaise"
          />
        </div>
      </div>
    </nav>
  );
};
