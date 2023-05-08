import Logo from "../assets/logo.png";
import "./NavBar.scss";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Banner />
    </>
  );
};

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand position-absolute" href="#">
          <img src={Logo} className="img-fluid logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse menu" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                A propos
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#">
                Le projet
              </a>
            </li>
          </ul>
          <div className="w-auto mt-5">
            <a className="d-flex btn btn-primary btn-cta">Nous soutenir</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Banner = () => {
  return <>banner</>;
};
