import TemplateProjeto from "../TemplateProjeto";
import Logo from "../../../assets/Xodotopia/logo.svg";
import Img1 from "../../../assets/Xodotopia/teste/1.jpg";
import Img2 from "../../../assets/Xodotopia/teste/2.png";
import Img3 from "../../../assets/Xodotopia/teste/3.jpg";
import Img4 from "../../../assets/Xodotopia/teste/4.PNG";
import Img5 from "../../../assets/Xodotopia/teste/5.jpg";

const Xodotopia = () => {
  console.log(self.crypto.randomUUID());
  return (
    <TemplateProjeto
      logo={Logo}
      local="Araucária - Paraná"
      ano="2023"
      traco1="Divertida"
      traco2="Criativa"
      traco3="Minimalista"
      traco4="Carinhosa"
      traco5="Cuidadosa"
      colors={[
        { key: self.crypto.randomUUID(), color: "#b195ed" },
        { key: self.crypto.randomUUID(), color: "#cbb2ff" },
        { key: self.crypto.randomUUID(), color: "#fff7ac" },
        { key: self.crypto.randomUUID(), color: "#f16c3f" },
        { key: self.crypto.randomUUID(), color: "#005541" },
      ]}
      imgsE={[
        { key: self.crypto.randomUUID(), local: Img1 },
        { key: self.crypto.randomUUID(), local: Img2 },
        { key: self.crypto.randomUUID(), local: Img3 },
      ]}
      imgsD={[
        { key: self.crypto.randomUUID(), local: Img4 },
        { key: self.crypto.randomUUID(), local: Img5 },
      ]}
    />
  );
};
export default Xodotopia;
