// import Logo from "../../assets/images/logo.png";
// import "./NavBar.scss";

// export const NavBar = () => {
//   return (
//     <nav className="navbar navbar-light navbar-expand-lg bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand position-absolute" href="#">
//           <img src={Logo} className="img-fluid logo" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse menu" id="navbarNavDropdown">
//           <ul className="navbar-nav mb-4">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 A propos
//               </a>
//             </li>
//             <li className="nav-item ms-5">
//               <a className="nav-link" href="#">
//                 Le projet
//               </a>
//             </li>
//           </ul>
//           <div className="block-cta w-auto mt-5">
//             <a className="d-flex btn btn-primary btn-cta">Nous soutenir</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import "./navb.scss";
import { useState } from "react";

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="navb">
      <div className="nav-container">
        <div className="navbr">
          <div className="logo">Doo Pulp</div>
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
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-itm" onClick={() => setNavOpen(!navOpen)}>
              <a>qsfsqd</a>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-itm" onClick={() => setNavOpen(!navOpen)}>
              <a>qsfsqd</a>

              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-itm" onClick={() => setNavOpen(!navOpen)}>
              <a>qsfsqd</a>

              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
