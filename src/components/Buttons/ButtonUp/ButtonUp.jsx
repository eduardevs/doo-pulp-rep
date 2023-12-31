import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./ButtonUp.scss";

export const ButtonUp = () => {
  //   useEffect(() => {
  //     let mybutton = document.getElementById("btn-back-to-top");

  //     // When the user scrolls down 20px from the top of the document, show the button
  //     window.onscroll = function () {
  //       scrollFunction();
  //       mybutton.addEventListener("click", backToTop);
  //     };
  //   }, []);

  //   function scrollFunction() {
  //     if (
  //       document.body.scrollTop > 20 ||
  //       document.documentElement.scrollTop > 20
  //     ) {
  //       mybutton.style.display = "block";
  //     } else {
  //       mybutton.style.display = "none";
  //     }
  //   }
  //   function backToTop() {
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  //   }

  const [scrollTop, setScrollTop] = useState(0);
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    scrollTop > 4000 ? setDisplayButton(true) : setDisplayButton(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  const handleScroll = (event) => {
    setScrollTop(window.scrollY);
  };

  return (
    displayButton && (
      <Link
        to="#homepage"
        className="btn btn-up bd-primary btn-lg"
        //   id="btn-back-to-top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Link>
    )
  );
};
