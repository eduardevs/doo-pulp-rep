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
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    if (scrollTop > 400) {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }
    // scrollTop >= 400 ? setDisplayButton(true) : setDisplayButton(false);
    // ! bug il s'affiche pas le button
    console.log(displayButton);

    if (displayButton) {
      // handleButton();
      // setDisplayButton(false);
      console.log('"teqsfdq');
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollTop);

  // const handleButton = () => {};
  console.log(displayButton);
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
