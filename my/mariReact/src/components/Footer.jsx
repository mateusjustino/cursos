import IconInstagram from "../assets/socialIcon/instagram.svg";
import IconPinterest from "../assets/socialIcon/pinterest.svg";
import IconBehance from "../assets/socialIcon/behance.svg";
import IconFacebook from "../assets/socialIcon/facebook.svg";
import "./FooterStyle.css";
const Footer = () => {
  return (
    <footer className="bg-dark d-flex">
      <div className="container text-center" style={{ color: "white" }}>
        <p>Studio - Mariana Bonsaglia Designer</p>
        <a
          href="https://www.instagram.com/marianabonsagliadesigner/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IconInstagram}
            alt="ícone facebook"
            width="25"
            className="icon-footer"
          />
        </a>
        <a
          href="https://br.pinterest.com/marianabonsagliadesigner/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IconPinterest}
            alt="ícone pinterest"
            width="25"
            className="icon-footer"
          />
        </a>
        <a
          href="https://www.behance.net/MarianaBonsaglia"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IconBehance}
            alt="ícone behance"
            width="25"
            className="icon-footer"
          />
        </a>
        <a
          href="https://www.facebook.com/MarianaBonsaglia"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IconFacebook}
            alt="ícone facebook"
            width="25"
            className="icon-footer"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <footer className="bg-dark d-flex">
  <div className="container text-center" style="color: white">
    <p>Studio - Mariana Bonsaglia Designer</p>
    <a
      href="https://www.instagram.com/marianabonsagliadesigner/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="img/icons/instragram.svg"
        alt=""
        width="25"
        className="icon-footer"
      />
    </a>
    <a
      href="https://br.pinterest.com/marianabonsagliadesigner/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="img/icons/pinterest.svg"
        alt=""
        width="25"
        className="icon-footer"
      />
    </a>
    <a
      href="https://www.behance.net/MarianaBonsaglia"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="img/icons/behance.svg"
        alt=""
        width="25"
        className="icon-footer"
      />
    </a>
    <a
      href="https://www.facebook.com/MarianaBonsaglia"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="img/icons/facebook.svg"
        alt=""
        width="25"
        className="icon-footer"
      />
    </a>
  </div>
</footer>; */
}
