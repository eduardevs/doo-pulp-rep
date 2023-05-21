import "./Numbers.scss";
import { useEffect, useState } from "react";

export const Numbers = ({ ...props }) => {
  const textRight = "Avec une nouvelle pâte à papier nous pouvons les sauver";
  // const numbers = "220000";
  const textLeft = "arbres sont abattus par jour.";
  let [formatOn, setFormatOn] = useState(false);
  let [numbers, setNumbers] = useState("220");
  let [counterExec, setCounterExec] = useState(false);

  let [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // use effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    scrollPosition >= 400 && scrollPosition <= 405
      ? setCounterExec(true)
      : setCounterExec(false);

    if (counterExec) {
      handleCounter();
      setCounterExec(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    if (formatOn) {
      setNumbers(currencyFormatDE(numbers));
    } else {
      setFormatOn(false);
    }

    if (counterExec) {
      handleCounter();
    }
  }, []);

  //functions

  const handleCounter = () => {
    let valueDisplays = document.querySelectorAll(".numbers");
    let interval = 5000;
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        setFormatOn(true);
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };

  function currencyFormatDE(num) {
    return (
      num
        .toFixed(2) // always two decimal digits
        .replace(".", ",") // replace decimal point character with ,
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " €"
    ); // use . as a separator
  }

  // console.log(completeNumbers);

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-6">
          <div className="bg-numbers">
            <span className="text-numbers" data-val={numbers}>
              {/* ! TODO: EFFECT DE 000 A 220 */}
              220
            </span>
            <div className="text-black text-numbers fs-1 font-serif">{textLeft}</div>
          </div>
        </div>
        <div className="bd-tertiary row rectangle">
          <div className="col-6"></div>
          <div className="col-6 text-center d-flex align-items-center">
            <div className="text-right">
              <h1>{textRight}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
