import { NavBarMobile } from "../components/NavBar/NavBarMobile";
import { BannerCta } from "../components/BannerCta/BannerCta";
import { Values } from "../components/Values/Values";
import { AuthorsContainer } from "../components/Authors/AuthorsContainer";
import { Numbers } from "../components/Numbers/Numbers";
import { About } from "../components/About/About";
import { FactorsContainer } from "../components/Factors/FactorsContainer";
import { Sponsors } from "../components/Sponsors/Sponsors";
import { Footer } from "../components/Footer/Footer";
import { NavBarContainer } from "../components/NavBar/NavBarContainer";
import { useRef, useEffect } from "react";
import "./HomePage.scss";

export const HomePage = () => {
  // effects
  // const sectionRef1 = useRef();
  // const sectionRef2 = useRef();
  // const sectionRef3 = useRef();
  // const sectionRef4 = useRef();
  // const sectionRef5 = useRef();
  // const sectionRef6 = useRef();
  // const sectionRef7 = useRef();
  // const sectionRef8 = useRef();

  // useEffect(() => {
  //   observerRef(sectionRef1);
  //   observerRef(sectionRef2);
  //   observerRef(sectionRef3);
  //   observerRef(sectionRef4);
  //   observerRef(sectionRef5);
  //   observerRef(sectionRef6);
  //   observerRef(sectionRef7);
  //   observerRef(sectionRef8);

  //   // const hiddenElements =
  //   // console.log(sectionRef);
  // }, []);
  // const observerRef = (referenceItem) => {
  //   const observer = new IntersectionObserver((entries) => {
  //     // entries.forEach((entry) => {
  //     if (entries[0].isIntersecting) {
  //       referenceItem.current.classList.add("active");
  //       observer.unobserve(referenceItem.current);
  //     }
  //     // else {
  //     //   entry.current.classList.remove("active");
  //     // }
  //     // });
  //   });
  //   observer.observe(referenceItem.current);
  // };
  //Passer ceci dans un container
  const valuesPropsTwo = [
    "Ecologie",
    "Economie Circulaire et Locale",
    "Bien-être",
  ];

  const valuesProps = [
    "Proposer une alternative au bois pour la fabrication du papier à l’échelle industrielle.",
    "Proposer une pâte à papier française dans le marché de l’industrie papetière française.",
    "Créer une nouvelle usine avec une démarche basée sur l’économie circulaire et locale.",
  ];

  return (
    <>
      <NavBarContainer />
      <section className="section">
        {/* <section ref={sectionRef1} className="section"> */}

        <BannerCta />
      </section>
      <section className="section">
        <Numbers />
      </section>
      <section className="section">
        <About
          subtitle="La pâte à papier"
          subtitle2=" en fibres végétales alternatives"
          title="Doo Pulp"
        />
      </section>
      <section className="section">
        <Values
          principles={valuesProps}
          title="Les objectifs du projet"
          withBgColor={true}
          withList={true}
          extraText={"et... Sauver nos forêts!"}
        />
      </section>
      <section className="section">
        <FactorsContainer />
      </section>
      <section className="section">
        <AuthorsContainer />
      </section>
      <section className="section">
        <Values principles={valuesPropsTwo} title="Nos valeurs" />
      </section>
      <section className="section">
        <Sponsors />
      </section>
      <Footer />
    </>
  );
};
