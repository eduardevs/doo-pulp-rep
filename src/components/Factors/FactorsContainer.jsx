// import "./Authors.scss";

import { Factors } from "./Factors";
import Environment from "../../assets/images/nature-path.jpg";
import Social from "../../assets/images/france-flag.jpg";

export const FactorsContainer = () => {
  const facts = [
    {
      title: "Environnemental",
      descriptions: [
        "Réduction de l’utilisation de bois dans la fabrication du papier industriel",
        "Valorisation de biodéchets des grandes cultures agricoles",
        "Réduction de la consommation d’eau et d’énergie à travers l’amélioration du procédé industrie",
      ],
      img: Environment,
    },
    {
      title: "Social",
      descriptions: [
        "Création de l’emploi local dans l’Economie Sociale et Solidaire à travers la création d’une usine de pâte à papier dans                 les Hauts-de-France",
      ],
      img: Social,
    },
    {
      title: "Économique",
      descriptions: [
        "Participer dans la transition écologique de l’industrie de la France",
      ],
    },
  ];

  return (
    <Factors
      data={[...facts]}
      title="Comment le projet Doo pourra générer de l'impact positif ?"
    />
  );
};
