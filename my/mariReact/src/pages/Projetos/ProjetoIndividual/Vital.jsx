import TemplateProjeto from "../TemplateProjeto";
import Logo from "../../../assets/Vital/logo.svg";
import Img1 from "../../../assets/Vital/caderno.jpg";
import Img2 from "../../../assets/Vital/cartao.jpg";
import Img3 from "../../../assets/Vital/copo.jpg";
import Img4 from "../../../assets/Vital/copos.jpg";
import Img5 from "../../../assets/Vital/folder.png";
import Img6 from "../../../assets/Vital/itens.png";
import Img7 from "../../../assets/Vital/placa.png";
import Img8 from "../../../assets/Vital/poster.jpg";

import uniqueID from "../../../scripts/UniqueId";

const Vital = () => {
  return (
    <TemplateProjeto
      logo={Logo}
      ano="2022"
      paragraphs={[
        {
          id: uniqueID(),
          text: "Um projeto fictício para uma cafeteria projetada para quem busca um ambiente para trabalhar enquanto desfruta de um bom café. Priorizei unir a praticidade de um espaço produtivo com uma oferta de alimentos leves e saborosos. Meu objetivo foi criar um local onde o trabalho se funde harmoniosamente com a experiência de uma alimentação saudável",
        },
      ]}
      traco1="Natural"
      traco2="Saudável"
      traco3="Aconchegante"
      traco4="Light"
      colors={[
        { id: uniqueID(), color: "#f8dd80" },
        { id: uniqueID(), color: "#036b67" },
        { id: uniqueID(), color: "#547531" },
        { id: uniqueID(), color: "#260901" },
      ]}
      imgsE={[
        { id: uniqueID(), local: Img1 },
        { id: uniqueID(), local: Img4 },
        { id: uniqueID(), local: Img5 },
        { id: uniqueID(), local: Img6 },
      ]}
      imgsD={[
        { id: uniqueID(), local: Img7 },
        { id: uniqueID(), local: Img2 },
        { id: uniqueID(), local: Img3 },
        { id: uniqueID(), local: Img8 },
      ]}
    />
  );
};
export default Vital;
