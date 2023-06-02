import "./Numbers.scss";
import { useEffect, useState, useRef } from "react";

export const Numbers = ({ ...props }) => {
  const textRight = "Avec une nouvelle pâte à papier nous pouvons les sauver";
  // const numbers = "220000";
  const textLeft = "arbres sont abattus par jour";
  // let [formatOn, setFormatOn] = useState(false);
  let [numbers, setNumbers] = useState("270");

  const myRef = useRef();
  const [refNumbers, setRefNumbers] = useState();
  // console.log(refNumbers);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setRefNumbers(entry.isIntersecting);
      if (entry) {
        handleCounter();
        observer.unobserve(myRef.current);
      }

      // console.log({ entry });
    });
    observer.observe(myRef.current);
  }, []);

  // use effects
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   scrollPosition >= 400 && scrollPosition <= 405
  //     ? setCounterExec(true)
  //     : setCounterExec(false);

  //   if (counterExec) {
  //     handleCounter();
  //     setCounterExec(false);
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition]);

  // useEffect(() => {
  //   if (formatOn) {
  //     setNumbers(currencyFormatDE(numbers));
  //   } else {
  // setFormatOn(false);
  //   }

  //   if (counterExec) {
  //     handleCounter();
  //   }
  // }, []);

  //functions

  const handleCounter = () => {
    let valueDisplays = document.querySelectorAll(".numbers");
    let interval = 3000;
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };

  return (
    <div className="container-fluid p-5 pt-2">
      <div className="row">
        <div className="col-md-6">
          <div className="bg-numbers">
            <span
              className="numbers text-numbers"
              data-val={numbers}
              ref={myRef}
            ></span>
            <div className="text-black text-numbers fs-1">{textLeft}</div>
          </div>
        </div>
        <div className="col-md-6 bd-tertiary row rectangle d-flex justify-content-center">
          <div className="col-6 text-center d-flex align-items-center ms-auto text-right">
            <div className="text-right">
              <h1>{textRight}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
