import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { Link } from "react-router-dom";

import LogoXodotopia from "../../assets/Xodotopia/logo.svg";
import ImgXodotopia from "../../assets/Xodotopia/outdoor1.jpg";

import LogoCovil from "../../assets/CovilDoCha/logo.svg";
import ImgCovil from "../../assets/CovilDoCha/caneca.jpg";

import LogoJefairy from "../../assets/Jefairy/logo.svg";
import ImgJefairy from "../../assets/Jefairy/vela1.jpg";

import LogoSitka from "../../assets/Sitka/logo.svg";
import ImgSitka from "../../assets/Sitka/bexiga.png";

import LogoHakuna from "../../assets/Hakuna/logo.svg";
import ImgHakuna from "../../assets/Hakuna/bottons.jpg";

import LogoVital from "../../assets/Vital/logo.svg";
import ImgVital from "../../assets/Vital/copos.jpg";

const Projetos = () => {
  const EachProject = ({ logo, img }) => {
    return (
      <>
        <div className="h-100 p-3">
          <div className="position-relative rounded-3 overflow-hidden one-project">
            {/* <div className="one-project"> */}
            <img className="img-style" src={img} alt="Logo" />
            <div className="d-flex flex-column align-items-center justify-content-center position-absolute p-1 one-project-text">
              <img className="d-block h-50 w-50" src={logo} alt="Logo" />
              <p className="fs-6">Conheça este Universo!</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      <main>
        <section className="py-5 container container-max-width">
          <div>
            <h1 className="fw-bold text-center">Marcas Protagonistas</h1>
            <p className="fs-6">
              Explore minha coleção de projetos de identidade visual, cada
              projeto é uma expressão única e memorável, refletindo o
              comprometimento em destacar marcas de maneira inesquecível.
            </p>
          </div>
          <div className="container container-max-width">
            <div className="row">
              <div className="col-sm-6">
                <Link to="/projetos/xodotopia" className="nav-link fs-6">
                  <EachProject logo={LogoXodotopia} img={ImgXodotopia} />
                </Link>
              </div>
              <div className="col-sm-6">
                <Link to="/projetos/covil-do-cha" className="nav-link fs-6">
                  <EachProject logo={LogoCovil} img={ImgCovil} />
                </Link>
              </div>
            </div>
          </div>
          <div className="container container-max-width ">
            <div className="row">
              <div className="col-sm-6">
                <Link to="/projetos/jefairy" className="nav-link fs-6">
                  <EachProject logo={LogoJefairy} img={ImgJefairy} />
                </Link>
              </div>
              <div className="col-sm-6">
                <Link to="/projetos/sitka" className="nav-link fs-6">
                  <EachProject logo={LogoSitka} img={ImgSitka} />
                </Link>
              </div>
            </div>
          </div>
          <div className="container container-max-width ">
            <div className="row">
              <div className="col-sm-6">
                <Link to="/projetos/hakuna" className="nav-link fs-6">
                  <EachProject logo={LogoHakuna} img={ImgHakuna} />
                </Link>
              </div>
              <div className="col-sm-6">
                <Link to="/projetos/vital" className="nav-link fs-6">
                  <EachProject logo={LogoVital} img={ImgVital} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Projetos;
