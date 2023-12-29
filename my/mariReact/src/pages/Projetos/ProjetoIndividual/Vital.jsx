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
      local="Araucária - Paraná"
      ano="2023"
      paragraphs={[
        {
          id: uniqueID(),
          text: "",
        },
        {
          id: uniqueID(),
          text: "",
        },
      ]}
      traco1="Divertida"
      traco2="Criativa"
      traco3="Minimalista"
      traco4="Carinhosa"
      traco5="Cuidadosa"
      colors={[
        { id: uniqueID(), color: "#b195ed" },
        { id: uniqueID(), color: "#cbb2ff" },
        { id: uniqueID(), color: "#fff7ac" },
        { id: uniqueID(), color: "#f16c3f" },
        { id: uniqueID(), color: "#005541" },
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
