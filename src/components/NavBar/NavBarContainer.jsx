import { useEffect, useState } from "react";
import { NavBarMobile } from "./NavBarMobile";
import { NavBar } from "./NavBar";

export const NavBarContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 991);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div>{isMobile ? <NavBarMobile /> : <NavBar />}</div>;
};
