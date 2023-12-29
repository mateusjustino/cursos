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
        <div className="container text-center container-max-width d-flex flex-column align-items-center">
          <p className="fs-6">Studio - Mariana Bonsaglia Designer</p>
          <div className="d-flex ">
            <div className="">
              <a
                href="https://www.instagram.com/marianabonsagliadesigner/"
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <i className="bi bi-instagram icon-color fs-6"></i>
              </a>
            </div>
            <div className="">
              <a
                href="https://br.pinterest.com/marianabonsagliadesigner/"
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <i className="bi bi-pinterest icon-color fs-6"></i>
              </a>
            </div>
            <div className="">
              <a
                href="https://www.behance.net/MarianaBonsaglia"
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <i className="bi bi-behance icon-color fs-6"></i>
              </a>
            </div>
            <div className="">
              <a
                href="https://www.facebook.com/MarianaBonsaglia"
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <i className="bi bi-facebook icon-color fs-6"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ScrollRestoration />
    </>
  );
};

export default Footer;
