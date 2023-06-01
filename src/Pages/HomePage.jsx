import { BannerCta } from "../components/BannerCta/BannerCta";
import { Values } from "../components/Values/Values";
import { AuthorsContainer } from "../components/Authors/AuthorsContainer";
import { Numbers } from "../components/Numbers/Numbers";
import { About } from "../components/About/About";
import { FactorsContainer } from "../components/Factors/FactorsContainer";
import { Sponsors } from "../components/Sponsors/Sponsors";
import { Footer } from "../components/Footer/Footer";
import { NavBarContainer } from "../components/NavBar/NavBarContainer";
import "./HomePage.scss";
import { Section } from "../Layouts/Section";
import { ButtonUp } from "../components/Buttons/ButtonUp/ButtonUp";

export const HomePage = () => {
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
    <div className="grids" id="homepage">
      <NavBarContainer />
      <Section effect="fade-right" id="bannerCta">
        <BannerCta />
      </Section>
      <Section effect="fade-right" id="numbers">
        <Numbers />
      </Section>
      <Section id="about">
        <About
          subtitle="La pâte à papier"
          subtitle2=" en fibres végétales alternatives"
          title="Doo Pulp"
        />
      </Section>
      <Section id="goals">
        <Values
          principles={valuesProps}
          title="Les objectifs du projet"
          withBgColor={true}
          withList={true}
          extraText={"et... Sauver nos forêts!"}
        />
      </Section>
      <Section id="facts">
        <FactorsContainer />
      </Section>
      <Section id="authors">
        <AuthorsContainer />
      </Section>
      <Section id="values">
        <Values principles={valuesPropsTwo} title="Nos valeurs" />
      </Section>
      <Section id="sponsors">
        <Sponsors />
      </Section>
      <div className="w-100">
        <ButtonUp />
      </div>
      <Footer />
    </div>
  );
};
