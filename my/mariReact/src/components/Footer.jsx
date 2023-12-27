import IconInstagram from "../assets/socialIcon/instagram.svg";
import IconPinterest from "../assets/socialIcon/pinterest.svg";
import IconBehance from "../assets/socialIcon/behance.svg";
import IconFacebook from "../assets/socialIcon/facebook.svg";
import "./FooterStyle.css";

import { ScrollRestoration } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark d-flex">
        <div className="container text-center container-max-width">
          <p className="fs-5">Studio - Mariana Bonsaglia Designer</p>
          <a
            href="https://www.instagram.com/marianabonsagliadesigner/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="img-fluid bi bi-instagram icon-color"></i>
          </a>
          <a
            href="https://br.pinterest.com/marianabonsagliadesigner/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="img-fluid bi bi-pinterest icon-color"></i>
          </a>
          <a
            href="https://www.behance.net/MarianaBonsaglia"
            target="_blank"
            rel="noreferrer"
          >
            <i className="img-fluid bi bi-behance icon-color"></i>
          </a>
          <a
            href="https://www.facebook.com/MarianaBonsaglia"
            target="_blank"
            rel="noreferrer"
          >
            <i className="img-fluid bi bi-facebook icon-color"></i>
          </a>

          {/* testeeeeeeeeeee */}
          <i class="d-none d-lg-inline fas fa-3x fa-smile"></i>

          <i class="d-inline d-lg-none fas fa-2x fa-smile"></i>
        </div>
      </footer>
      <ScrollRestoration />
    </>
  );
};

export default Footer;
