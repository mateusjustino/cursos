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

import FAQ from "../../components/FAQ";

const Home = () => {
  const DivProject = ({ id, logo, desc, img1, img2, img3 }) => {
    const idCarousel = `carousel-project${id}`;
    const idSelectedCarousel = `#${idCarousel}`;
    return (
      <>
        <div className="py-5">
          <img
            src={logo}
            className="img-fluid home-container-content-logo-maxwidth"
          />
          <p className="fs-5 py-4">{desc}</p>

          <div
            id={idCarousel}
            className="carousel slide container-max-width mx-auto"
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
        <section id="home-container-welcome">
          <div className="container">
            <div className="row align-items-center justify-content-center  home-container-welcome-fullvh">
              <div className="home-container-welcome-shadow rounded-3 container-max-width p-4">
                <h1 className="text-center display-3">
                  Design para marcas protagonistas
                </h1>

                <p className="fs-5 text-start">
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
            <h3 className="display-3">Projetos de Identidade Visual</h3>

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
              desc="É um espaço focado no bem-estar animal localizado em Araucária - PR. Oferecendo uma ampla gama de serviços, acessórios e cuidados à saúde animal, para que você possa proporcionar o melhor experiência para os tutores e seus filhos!"
              img1={XodotopiaCartao}
              img2={XodotopiaOutdoor}
              img3={XodotopiaSacola}
            />

            <DivProject
              id={3}
              logo={CovilDoChaLogo}
              desc="É uma casa de chá, com um espaço imersivo que funciona com agendamento, adaptando ao rolê de cada pessoa, ressignificando a experiência de tomar chá!"
              img1={CovilDoChaCaneca}
              img2={CovilDoChaPlaca}
              img3={CovilDoChaSacola}
            />
          </div>
        </section>

        <section className="container pb-5 pt-3 container-max-width">
          <h3 className="display-3  text-center">FAQ</h3>
          <h3 className="display-3  text-center">Dúvidas frequentes</h3>

          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Home;
