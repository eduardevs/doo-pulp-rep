import { Authors } from "./Authors";
import Author1 from "../../assets/images/daniela.png";
import Author2 from "../../assets/images/theodore.png";

export const AuthorsContainer = () => {
  const authorsProps = [
    {
      id: 1,
      name: "Daniela",
      description:
        "originaire du Venezuela, passionnée de la création et de la conservation de la forêt et sa biodiversité. Designer de produits ecoresponsables et étudiante en Master 2 Entrepreneuriat à l'IAE de Lille.",
      img: Author1,
    },
    {
      id: 2,
      name: "Théodore",
      description:
        "un enfant du Nord, passionné de sciences et très sensible aux enjeux environnementaux. Diplômé d’un master d’intelligence stratégique en R&D et innovation.",
      img: Author2,
    },
  ];
  //  how to pass data without using this syntax, just props passing props like {...authorsProps}
  return <Authors data={[...authorsProps]} title="Qui derrière ce projet ?" />;
};
