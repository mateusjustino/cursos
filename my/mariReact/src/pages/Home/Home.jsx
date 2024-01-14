import "./style.css";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import JefairyLogo from "../../assets/Jefairy/logo.svg";
import JefairyImg1 from "../../assets/Jefairy/vela1.jpg";
import JefairyImg2 from "../../assets/Jefairy/bag.jpg";
import JefairyImg3 from "../../assets/Jefairy/quadro.jpg";

import XodotopiaLogo from "../../assets/Xodotopia/logo.svg";
import XodotopiaImg1 from "../../assets/Xodotopia/almofada.jpg";
import XodotopiaImg2 from "../../assets/Xodotopia/placa.png";
import XodotopiaImg3 from "../../assets/Xodotopia/almofada.jpg";

import CovilDoChaLogo from "../../assets/CovilDoCha/logo.svg";
import CovilDoChaImg1 from "../../assets/CovilDoCha/bolsa.png";
import CovilDoChaImg2 from "../../assets/CovilDoCha/avental.jpg";
import CovilDoChaImg3 from "../../assets/CovilDoCha/plaquinha.jpg";

import FAQ from "../../components/FAQ";

const DivProject = ({ id, logo, desc, img1, img2, img3 }) => {
  const idCarousel = `carousel-project${id}`;
  const idSelectedCarousel = `#${idCarousel}`;
  return (
    <>
      <div className="py-5">
        <img src={logo} className="home-container-content-logo-maxwidth" />
        <p className="fs-6 py-4">{desc}</p>

        <div
          id={idCarousel}
          className="carousel slide container-max-width mx-auto"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded-3">
            <div
              className="position-relative rounded-3 overflow-hidden carousel-style carousel-item active"
              data-bs-interval="2000"
            >
              <img src={img1} className="img-style" alt="..." />
            </div>
            <div
              className="position-relative rounded-3 overflow-hidden carousel-style carousel-item"
              data-bs-interval="2000"
            >
              <img src={img2} className="img-style" alt="..." />
            </div>
            <div
              className="position-relative rounded-3 overflow-hidden carousel-style carousel-item"
              data-bs-interval="2000"
            >
              <img src={img3} className="img-style" alt="..." />
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

const DivProject2 = ({ id, logo, desc, img1, img2, img3 }) => {
  // fazer com que se a tela for menor que tal largura exibir menos imagens, isso com o bootstrap
  return (
    <>
      <div className="mb-5 p-2 rounded-3 container-project">
        <div className="row overflow-hidden py-2">
          <div className="col-sm-6 container-row-project container-row-project d-flex justify-content-center align-items-center">
            <img src={logo} className="home-container-content-logo-maxwidth " />
          </div>
          <div className="col-sm-6 container-row-project container-row-project d-flex justify-content-center align-items-center d-none d-sm-block">
            <img src={img2} className="img-fluid img-style rounded-3" />
          </div>
        </div>
        <div className="row overflow-hidden py-2">
          <div className="col-sm-6 container-row-project container-row-project d-flex justify-content-center align-items-center">
            <img src={img1} className="img-fluid img-style rounded-3" />
          </div>
          <div className="col-sm-6 container-row-project container-row-project d-flex justify-content-center align-items-center">
            <p className="fs-6">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home-container-welcome">
          <div className="container">
            <div className="row align-items-center justify-content-center  home-container-welcome-fullvh">
              <div className="home-container-welcome-shadow rounded-3 container-max-width p-4">
                <h1 className="text-center fw-bold">
                  Design para marcas protagonistas
                </h1>

                <p className="fs-6 text-start">
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

        <section id="home-container-content " className="pb-4 pt-5 ">
          <div className="container text-center container-max-width">
            <h1 className="fw-bold mb-5">Projetos de Identidade Visual</h1>

            {/* <DivProject
              id={1}
              logo={JefairyLogo}
              desc="É uma ateliê de artes e acessórios feito a mão, onde a magia se
              torna realidade."
              img1={JefairyImg1}
              img2={JefairyImg2}
              img3={JefairyImg3}
            /> */}
            <DivProject2
              id={1}
              logo={JefairyLogo}
              desc="É uma ateliê de artes e acessórios feito a mão, onde a magia se
              torna realidade."
              img1={JefairyImg1}
              img2={JefairyImg2}
              img3={JefairyImg3}
            />

            {/* <DivProject
              id={2}
              logo={XodotopiaLogo}
              desc="É um espaço focado no bem-estar animal localizado em Araucária - PR. Oferecendo uma ampla gama de serviços, acessórios e cuidados à saúde animal, para que você possa proporcionar o melhor experiência para os tutores e seus filhos!"
              img1={XodotopiaImg1}
              img2={XodotopiaImg2}
              img3={XodotopiaImg3}
            /> */}
            <DivProject2
              id={2}
              logo={XodotopiaLogo}
              desc="É um espaço focado no bem-estar animal localizado em Araucária - PR. Oferecendo uma ampla gama de serviços, acessórios e cuidados à saúde animal, para que você possa proporcionar o melhor experiência para os tutores e seus filhos!"
              img1={XodotopiaImg1}
              img2={XodotopiaImg2}
              img3={XodotopiaImg3}
            />

            {/* <DivProject
              id={3}
              logo={CovilDoChaLogo}
              desc="É uma casa de chá, com um espaço imersivo que funciona com agendamento, adaptando ao rolê de cada pessoa, ressignificando a experiência de tomar chá!"
              img1={CovilDoChaImg1}
              img2={CovilDoChaImg2}
              img3={CovilDoChaImg3}
            /> */}
            <DivProject2
              id={3}
              logo={CovilDoChaLogo}
              desc="É uma casa de chá, com um espaço imersivo que funciona com agendamento, adaptando ao rolê de cada pessoa, ressignificando a experiência de tomar chá!"
              img1={CovilDoChaImg1}
              img2={CovilDoChaImg2}
              img3={CovilDoChaImg3}
            />
          </div>
        </section>

        <section className="container pb-5 container-max-width">
          <h1 className="fw-bold text-center">FAQ</h1>
          <h1 className="fw-bold text-center mb-5">Dúvidas frequentes</h1>

          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Home;
