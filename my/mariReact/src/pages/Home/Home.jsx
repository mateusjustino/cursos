import "./style.css";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import JefairyLogo from "../../assets/Jefairy/logo.svg";
import JefairyVela from "../../assets/Jefairy/vela.jpg";
import JefairyCaixa from "../../assets/Jefairy/caixa.jpg";
import JefairySacola from "../../assets/Jefairy/sacola.jpg";

import XodotopiaLogo from "../../assets/Xodotopia/logo.svg";
import XodotopiaCartao from "../../assets/Xodotopia/cartao.jpg";
import XodotopiaOutdoor from "../../assets/Xodotopia/outdoor.jpg";
import XodotopiaSacola from "../../assets/Xodotopia/sacola.jpg";

import CovilDoChaLogo from "../../assets/CovilDoCha/logo.svg";
import CovilDoChaCaneca from "../../assets/CovilDoCha/caneca.jpg";
import CovilDoChaPlaca from "../../assets/CovilDoCha/placa.jpg";
import CovilDoChaSacola from "../../assets/CovilDoCha/sacola.jpg";

const Home = () => {
  const DivProject = ({ id, logo, desc, img1, img2, img3 }) => {
    const idCarousel = `carousel-project${id}`;
    const idSelectedCarousel = `#${idCarousel}`;
    return (
      <>
        <div className="container-project">
          <img src={logo} className="img-fluid logo-maxwidth svg-color" />
          <p className="fs-5">{desc}</p>

          <div
            id={idCarousel}
            className="carousel slide container-maxwidth mx-auto"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded-3">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={idSelectedCarousel}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={idSelectedCarousel}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Header />
      <main>
        <section id="myMarca">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center container-full-vh">
              <div className="container-shadow rounded-3 " id="txt-marca">
                <h1 className="display-3">Design para marcas protagonistas</h1>

                <p className="fs-5">
                  Um estúdio de design gráfico especializado em criar
                  identidades visuais únicas para marcas apaixonadas e
                  distintas. Construímos universos visuais que se alinham à
                  essência da sua marca, tornando-a memorável para seus
                  clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container text-center">
            <h2 className="display-3">Projetos de Identidade Visual</h2>

            <DivProject
              id={1}
              logo={JefairyLogo}
              desc="É uma ateliê de artes e acessórios feito a mão, onde a magia se
              torna realidade."
              img1={JefairyVela}
              img2={JefairyCaixa}
              img3={JefairySacola}
            />

            <DivProject
              id={2}
              logo={XodotopiaLogo}
              desc="É uma ateliê de artes e acessórios feito a mão, onde a magia se
              torna realidade."
              img1={XodotopiaCartao}
              img2={XodotopiaOutdoor}
              img3={XodotopiaSacola}
            />

            <DivProject
              id={3}
              logo={CovilDoChaLogo}
              desc="É uma ateliê de artes e acessórios feito a mão, onde a magia se
              torna realidade."
              img1={CovilDoChaCaneca}
              img2={CovilDoChaPlaca}
              img3={CovilDoChaSacola}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Home;
