import TemplateProjeto from "../TemplateProjeto";
import Logo from "../../../assets/Xodotopia/logo.svg";
import Img1 from "../../../assets/Xodotopia/almofada.jpg";
import Img2 from "../../../assets/Xodotopia/bag.jpg";
import Img3 from "../../../assets/Xodotopia/carimbo.jpg";
import Img4 from "../../../assets/Xodotopia/cartaoCarrosel.jpg";
import Img5 from "../../../assets/Xodotopia/outdoor1.jpg";
import Img6 from "../../../assets/Xodotopia/outdoor2.jpg";
import Img7 from "../../../assets/Xodotopia/placa.png";

import uniqueID from "../../../scripts/UniqueId";

const Xodotopia = () => {
  return (
    <TemplateProjeto
      logo={Logo}
      local="Araucária - PR"
      ano="2023"
      paragraphs={[
        {
          id: uniqueID(),
          text: "É um espaço focado no bem-estar animal, oferecendo uma ampla gama de serviços, acessórios e cuidados à saúde animal, para que você possa proporcionar o melhor experiência para os tutores e seus filhos!",
        },
        {
          id: uniqueID(),
          text: "O projeto foi um rebranding, pela necessidade de realinhamento com acomunicação da marca, pela mudança de comando do espaço,e pela expansão dos serviços, persona, que precisavam ser alinhados por um rebranding, ou seja não somente influênciou claramente no seu redesign, mas sim no comportamento e personalidade da marca.",
        },
        {
          id: uniqueID(),
          text: "E identificamos os seguinte traços de personalidade da marca:",
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
        { id: uniqueID(), local: Img7 },
      ]}
      imgsD={[
        { id: uniqueID(), local: Img2 },
        { id: uniqueID(), local: Img3 },
        { id: uniqueID(), local: Img6 },
      ]}
    />
  );
};
export default Xodotopia;
