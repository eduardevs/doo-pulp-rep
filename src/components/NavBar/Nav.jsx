// import "./nav.css";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo"></div>
          <div className="menu-toggle">
            <div className="hamBox">
              <span className="lineTop"></span>
              <span className="lineBottom"></span>
            </div>
          </div>
        </div>
        <div className="nav-overlay"></div>
      </div>
    </div>
  );
};
