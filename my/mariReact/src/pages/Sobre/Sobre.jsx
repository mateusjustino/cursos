import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

import ImgBussola from "../../assets/Mari/bussola.jpg";

const Sobre = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div
            className="vh-custom d-flex flex-column align-items-center justify-content-center img-back"
            id="img-back-1"
          >
            <div className="content-opacity py-3 px-5 rounded-3">
              <h1 className="fw-bold text-center">O que somos?</h1>
            </div>
          </div>
          <div className="container container-max-width p-5 rounded-3">
            <p className="fs-6">
              Oie! Muito prazer! Eu sou a Mariana, no momento sou um Studio de
              Design independente, focada em projetos de identidade visual
              destinada para empresas/negócios apaixonados no que fazem, e por
              aqui trabalhamos com um design autoral, não-convencional
              (criativo), construindo um universo visual de sua marca, alinhado
              com a expressão de seu negócio.
            </p>
          </div>
        </section>
        <section>
          <div
            className="vh-custom d-flex flex-column align-items-center justify-content-center img-back"
            id="img-back-2"
          >
            <div className="content-opacity py-3 px-5 rounded-3">
              <h1 className="fw-bold text-center">Missão</h1>
            </div>
          </div>
          <div className="container container-max-width p-5 rounded-3">
            <p className="fs-6">
              <ul>
                <li>
                  Ser referência na américa latina, e expandir ao mundo, em ser
                  um studio de design autoral
                </li>
                <li>Combater réplicas de marcas</li>
                <li>Tornar um mundo menos desbotado</li>
                <li>Tornar marcas protagonistas em seus próprios nichos</li>
                <li>
                  Construir uma equipe diversificada e apaixonada por criar, e
                  desfrutar dos seus resultados
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section>
          <div
            className="vh-custom d-flex flex-column align-items-center justify-content-center img-back"
            id="img-back-1"
          >
            <div className="content-opacity py-3 px-5 rounded-3">
              <h1 className="fw-bold text-center">Valores</h1>
            </div>
          </div>
          <div className="container container-max-width p-5 rounded-3">
            <p className="fs-6">
              <ul>
                <li>
                  Acredito que toda ideia é valiosa e pode ser experimentada
                </li>
                <li>
                  Todo mundo é extremamente único e diferente, ninguém andará ou
                  fará o mesmo caminho exatamente como você
                </li>
                <li>
                  Todo erro pra nós é um XP no seu jogo e oportunidade de dar um
                  upgrade
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section>
          <div
            className="vh-custom d-flex flex-column align-items-center justify-content-center img-back"
            id="img-back-2"
          >
            <div className="content-opacity py-3 px-5 rounded-3">
              <h1 className="fw-bold text-center">
                Um pouco de minha história
              </h1>
            </div>
          </div>
          <div className="container container-max-width p-5 rounded-3">
            <p className="fs-6">
              Desde que me conheço, sempre tive uma sensibilidade criativa
              dentro de mim. Desde pequena adorava mexer no computador e jogar
              vídeo game, e curiosa em como criar coisas novas, desde vídeos,
              montagens, que na fase adulta consequentemente virou meu trabalho
              e permaneço amando o que faço!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Sobre;

{
  /* <div className="container pb-1 container-max-width">
  <section>
    <div className="py-3">
      <h1 className="fw-bold text-center">O que somos?</h1>
      <p className="fs-6">
        Oie! Muito prazer! Eu sou a Mariana, no momento sou um Studio de Design
        independente, focada em projetos de identidade visual destinada para
        empresas/negócios apaixonados no que fazem, e por aqui trabalhamos com
        um design autoral, não-convencional (criativo), construindo um universo
        visual de sua marca, alinhado com a expressão de seu negócio.
      </p>
    </div>

    <div className="py-3">
      <h1 className="fw-bold text-center">Missão</h1>
      <p className="fs-6">
        <ul>
          <li>
            Ser referência na américa latina, e expandir ao mundo, em ser um
            studio de design autoral
          </li>
          <li>Combater réplicas de marcas</li>
          <li>Tornar um mundo menos desbotado</li>
          <li>Tornar marcas protagonistas em seus próprios nichos</li>
          <li>
            Construir uma equipe diversificada e apaixonada por criar, e
            desfrutar dos seus resultados
          </li>
        </ul>
      </p>
    </div>

    <div className="caixa1 parallax rounded-3 overflow-hidden">
      <div className="p-5 opacity-custom">
        <h1 className="fw-bold text-center">Valores</h1>
        <p className="fs-6">
          <ul>
            <li>Acredito que toda ideia é valiosa e pode ser experimentada</li>
            <li>
              Todo mundo é extremamente único e diferente, ninguém andará ou
              fará o mesmo caminho exatamente como você
            </li>
            <li>
              Todo erro pra nós é um XP no seu jogo e oportunidade de dar um
              upgrade
            </li>
          </ul>
        </p>
      </div>
    </div>
    <div className="py-3">
      <h1 className="fw-bold text-center">Valores</h1>
      <p className="fs-6">
        <ul>
          <li>Acredito que toda ideia é valiosa e pode ser experimentada</li>
          <li>
            Todo mundo é extremamente único e diferente, ninguém andará ou fará
            o mesmo caminho exatamente como você
          </li>
          <li>
            Todo erro pra nós é um XP no seu jogo e oportunidade de dar um
            upgrade
          </li>
        </ul>
      </p>
    </div>

    <div className="py-3">
      <h1 className="fw-bold text-center">Um pouco de minha história</h1>
      <p className="fs-6">
        Desde que me conheço, sempre tive uma sensibilidade criativa dentro de
        mim. Desde pequena adorava mexer no computador e jogar vídeo game, e
        curiosa em como criar coisas novas, desde vídeos, montagens, que na fase
        adulta consequentemente virou meu trabalho e permaneço amando o que
        faço!
      </p>
    </div>
  </section>
</div>; */
}
