import TemplateProjeto from "../TemplateProjeto";
import Logo from "../../../assets/CovilDoCha/logo.svg";
import Img1 from "../../../assets/CovilDoCha/avental.jpg";
import Img2 from "../../../assets/CovilDoCha/bolsa.png";
import Img3 from "../../../assets/CovilDoCha/caneca.jpg";
import Img4 from "../../../assets/CovilDoCha/placa.jpg";
import Img5 from "../../../assets/CovilDoCha/plaquinha.jpg";
import Img6 from "../../../assets/CovilDoCha/sacola.jpg";

import uniqueID from "../../../scripts/UniqueId";

const Covil = () => {
  return (
    <TemplateProjeto
      logo={Logo}
      ano="2023"
      paragraphs={[
        {
          id: uniqueID(),
          text: "Um projeto fictício para uma casa de chá, com um espaço imersivo que funciona com agendamento, adaptando ao rolê de cada pessoa, ressignificando a experiência de tomar chá!",
        },
        {
          id: uniqueID(),
          text: "O projeto precisou de uma comunicação visual para alcançar e conectar mais com um público jovem que procuram experiências novas e gostem de locais mais alternativos.",
        },
      ]}
      traco1="Jovem"
      traco2="Ousada"
      traco3="Corajosa"
      traco4="Criativa"
      traco5="Extrovertida"
      colors={[
        { id: uniqueID(), color: "#b195ed" },
        { id: uniqueID(), color: "#cbb2ff" },
        { id: uniqueID(), color: "#fff7ac" },
        { id: uniqueID(), color: "#f16c3f" },
        { id: uniqueID(), color: "#005541" },
      ]}
      imgsE={[
        { id: uniqueID(), local: Img1 },
        { id: uniqueID(), local: Img2 },
        { id: uniqueID(), local: Img3 },
      ]}
      imgsD={[
        { id: uniqueID(), local: Img4 },
        { id: uniqueID(), local: Img5 },
        { id: uniqueID(), local: Img6 },
      ]}
    />
  );
};
export default Covil;
