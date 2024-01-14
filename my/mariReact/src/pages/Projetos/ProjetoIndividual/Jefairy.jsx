import TemplateProjeto from "../TemplateProjeto";
import Logo from "../../../assets/Jefairy/logo.svg";
import Img1 from "../../../assets/Jefairy/avental.jpg";
import Img2 from "../../../assets/Jefairy/bag.jpg";
import Img3 from "../../../assets/Jefairy/cracha.jpg";
import Img4 from "../../../assets/Jefairy/moca.png";
import Img5 from "../../../assets/Jefairy/quadro.jpg";
import Img6 from "../../../assets/Jefairy/vela1.jpg";
import Img7 from "../../../assets/Jefairy/vela2.jpg";

import uniqueID from "../../../scripts/UniqueId";

const Jefairy = () => {
  return (
    <TemplateProjeto
      logo={Logo}
      local="Bauru - SP"
      ano="2023"
      paragraphs={[
        {
          id: uniqueID(),
          text: "Uma ateliê de artes e acessórios feitos à mão, convida as pessoas a descobrirem a própria magia interior através de criações únicas, permitindo cada pessoa expressar sua singularidade em cada peça artística!",
        },
        {
          id: uniqueID(),
          text: "O projeto foi inédito, onde a marca procurava uma comunicação com público juvenil, mas śerio e conectados com a espiritualidade  e gostam de expressar sua autentênticidade!",
        },
      ]}
      traco1="Jovem"
      traco2="Criativa"
      traco3="Séria"
      traco4="Mística"
      traco5="Pacífica"
      colors={[
        { id: uniqueID(), color: "#9bcbb2" },
        { id: uniqueID(), color: "#dcdddd" },
        { id: uniqueID(), color: "#f26440" },
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
      ]}
    />
  );
};
export default Jefairy;
