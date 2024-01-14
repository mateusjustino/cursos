import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Sobre = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container pb-1 container-max-width">
          <section>
            <div className="py-3">
              <h1 className="fw-bold text-center">O que somos?</h1>
              <p className="fs-6">
                Oie! Muito prazer! Eu sou a Mariana, momento sou um Studio de
                Design independente, focada em projetos de identidade visual
                destinada para empresas/negócios apaixonados no que fazem, e por
                aqui trabalhamos com um design autoral, não-convencional
                (criativo), construindo um universo visual de sua marca,
                alinhado com a expressão de seu negócio.
              </p>
            </div>

            <div className="py-3">
              <h1 className="fw-bold text-center">Missão</h1>
              <p className="fs-6">
                Ser referência na américa latina, e expandir ao mundo, em ser um
                studio de design autoral Combater réplicas de marcas Tornar um
                mundo menos desbotado Tornar marcas protagonistas em seus
                próprios nichos Construir uma equipe diversificada e apaixonada
                por criar, e desfrutar dos seus resultados
              </p>
            </div>

            <div className="py-3">
              <h1 className="fw-bold text-center">valores</h1>
              <p className="fs-6">
                Acredito que toda ideia é valiosa e pode ser experimentada Todo
                mundo é extremamente único e diferente, ninguém andará ou fará o
                mesmo caminho exatamente como você Todo erro pra nós é um XP no
                seu jogo e oportunidade de dar um upgrade
              </p>
            </div>

            <div className="py-3">
              <h1 className="fw-bold text-center">
                Um pouco de minha história
              </h1>
              <p className="fs-6">
                desde que me conheço, sempre tive uma sensibilidade criativa
                dentro de mim. Desde pequena adorava mexer no computador e jogar
                vídeo game, e curiosa em como criar coisas novas, desde vídeos,
                montagens, que na fase adulta consequentemente virou meu
                trabalho e permaneço amando o que faço!
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Sobre;
