import { ButtonCta } from "../ButtonCta/ButtonCta";
import { Logo } from "../Logo/Logo";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand position-absolute" href="#">
          <Logo />
        </a>
        <button
          className="navbar-toggler d-none"
          type="button"
          data-bs-toggle=""
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse menu" id="navbarNavDropdown">
          <ul className="navbar-nav mb-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="about">
                A propos
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="facts">
                Le projet
              </a>
            </li>
          </ul>
          <ButtonCta
            text="Nous soutenir"
            href="https://www.kisskissbankbank.com/en/projects/doo-la-pate-a-papier-alternative-francaise"
          />
        </div>
      </div>
    </nav>
  );
};
