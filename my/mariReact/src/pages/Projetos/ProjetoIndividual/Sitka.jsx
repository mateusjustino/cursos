import TemplateProjeto from "../TemplateProjeto";
import Logo from "../../../assets/Sitka/logo.svg";
import Img1 from "../../../assets/Sitka/bexiga.png";
import Img2 from "../../../assets/Sitka/cartao.jpg";
import Img3 from "../../../assets/Sitka/chaveiro.jpg";
import Img4 from "../../../assets/Sitka/mug.jpg";
import Img5 from "../../../assets/Sitka/tapete.jpg";
import Img6 from "../../../assets/Sitka/travesseiro.jpg";
import uniqueID from "../../../scripts/UniqueId";

const Sitka = () => {
  return (
    <TemplateProjeto
      logo={Logo}
      local="Santo André - SP"
      ano="2022"
      paragraphs={[
        {
          id: uniqueID(),
          text: "Um núcleo terapêutico especialista em desenvolvimento infantil para crianças neuro atípicas, que necessitava de uma comunicação visual para aproximar a comunicação com os pais dessas crianças!  E fortemente inspirada na nostalgia da fundadora para criar reflexo afetivo e puro da marca!",
        },
        {
          id: uniqueID(),
          text: "Colaboração: Michelly Moreno - Brand marketing",
        },
      ]}
      traco1="Cuidadosa"
      traco2="Proteção"
      traco3="Pureza"
      traco4="Confiança"
      traco5="Carinho"
      colors={[
        { id: uniqueID(), color: "#1b6ca8" },
        { id: uniqueID(), color: "#fefdca" },
        { id: uniqueID(), color: "#a5dde4" },
      ]}
      imgsE={[
        { id: uniqueID(), local: Img1 },
        { id: uniqueID(), local: Img4 },
        { id: uniqueID(), local: Img5 },
      ]}
      imgsD={[
        { id: uniqueID(), local: Img2 },
        { id: uniqueID(), local: Img3 },
        { id: uniqueID(), local: Img6 },
      ]}
    />
  );
};
export default Sitka;
