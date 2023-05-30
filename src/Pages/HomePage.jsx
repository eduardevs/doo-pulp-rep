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
import { Section } from "../Layouts/Section";

export const HomePage = () => {
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
    <div className="grids">
      <NavBarContainer />
      <Section effect="fade-up">
        <BannerCta />
      </Section>
      <Section effect="fade-right">
        <Numbers />
      </Section>
      <Section>
        <About
          subtitle="La pâte à papier"
          subtitle2=" en fibres végétales alternatives"
          title="Doo Pulp"
        />
      </Section>
      <Section>
        <Values
          principles={valuesProps}
          title="Les objectifs du projet"
          withBgColor={true}
          withList={true}
          extraText={"et... Sauver nos forêts!"}
        />
      </Section>
      <Section>
        <FactorsContainer />
      </Section>
      <Section>
        <AuthorsContainer />
      </Section>
      <Section>
        <Values principles={valuesPropsTwo} title="Nos valeurs" />
      </Section>
      <Section>
        <Sponsors />
      </Section>
      <Footer />
    </div>
  );
};
