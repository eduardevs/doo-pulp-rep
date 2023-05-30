import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Section = ({ children, effect="fade-up", ...props }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { marginTop } = props;

  return (
    <div
      data-aos={effect}
      className={`section`}
      style={{ marginTop: marginTop }}
    >
      {children}
    </div>
  );
};
