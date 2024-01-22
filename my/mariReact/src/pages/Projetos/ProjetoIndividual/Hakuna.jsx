import TemplateProjeto from "../TemplateProjeto";
import Logo from "../../../assets/Hakuna/logo.svg";
import Img1 from "../../../assets/Hakuna/bag.jpg";
import Img2 from "../../../assets/Hakuna/bottons.jpg";
import Img3 from "../../../assets/Hakuna/cartao.jpg";
import Img4 from "../../../assets/Hakuna/etiqueta.jpg";
import Img5 from "../../../assets/Hakuna/fachada.jpg";
import Img6 from "../../../assets/Hakuna/outdoor.jpg";
import uniqueID from "../../../scripts/UniqueId";

const Hakuna = () => {
  return (
    <TemplateProjeto
      logo={Logo}
      ano="2022"
      paragraphs={[
        {
          id: uniqueID(),
          text: "Um projeto fictício para uma marca de moda praiana com cortes exclusivos, transmitindo a energia moderna e viva do verão tropical. Com uma abordagem visando fundir o estilo contemporâneo com elementos tropicais, oferecendo uma identidade única para aqueles que desejam expressar seu estilo de vida à beira-mar através do design de moda.",
        },
      ]}
      traco1="Moderna"
      traco2="Viva"
      traco3="Tropical"
      traco4="Exclusiva"
      traco5="Summer"
      colors={[
        { id: uniqueID(), color: "#0c8b6f" },
        { id: uniqueID(), color: "#ffd36a" },
        { id: uniqueID(), color: "#f26440" },
      ]}
      imgsE={[
        { id: uniqueID(), local: Img6 },
        { id: uniqueID(), local: Img1 },
        { id: uniqueID(), local: Img4 },
      ]}
      imgsD={[
        { id: uniqueID(), local: Img5 },
        { id: uniqueID(), local: Img2 },
        { id: uniqueID(), local: Img3 },
      ]}
    />
  );
};
export default Hakuna;
