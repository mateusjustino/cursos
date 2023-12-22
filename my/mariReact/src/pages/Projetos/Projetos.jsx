import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

import LogoXodotopia from "../../assets/Xodotopia/logo.svg";
import ImgXodotopia from "../../assets/Xodotopia/cartao.jpg";

import LogoCovil from "../../assets/CovilDoCha/logo.svg";
import ImgCovil from "../../assets/CovilDoCha/caneca.jpg";

import LogoJefairy from "../../assets/Jefairy/logo.svg";
import ImgJefairy from "../../assets/Jefairy/vela.jpg";

const Projetos = () => {
  const EachProject = ({ logo, img }) => {
    return (
      <>
        {/* <div className="position-relative rounded-3 overflow-hidden text-center d-flex align-items-center justify-content-center border h-100 p-3 one-project"> */}
        <div className="h-100 p-3">
          <div className="position-relative rounded-3 overflow-hidden one-project">
            <img className="img-fluid d-block logo" src={img} alt="Logo" />
            <div className="d-flex flex-column align-items-center justify-content-center position-absolute p-3 one-project-text">
              <img className="d-block w-50" src={logo} alt="Logo" />

              <p className="fs-5">Conheça este Universo!</p>
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
        <section className="text-center py-5">
          <div>
            <h1 className="display-3">Título para Projetos</h1>
            <p className="fs-5">Aqui estarão todos os projetos</p>
          </div>
          <div className="container container-max-width ">
            <div className="row">
              <div className="col-sm-6">
                <EachProject logo={LogoXodotopia} img={ImgXodotopia} />
              </div>
              <div className="col-sm-6">
                <EachProject logo={LogoCovil} img={ImgCovil} />
              </div>
            </div>
          </div>
          <div className="container container-max-width ">
            <div className="row">
              <div className="col-sm-6">
                <EachProject logo={LogoJefairy} img={ImgJefairy} />
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
