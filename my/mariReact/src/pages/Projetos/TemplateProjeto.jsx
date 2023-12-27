import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./TemplateStyle.css";

const TemplateProjeto = ({
  logo,
  local,
  ano,
  traco1,
  traco2,
  traco3,
  traco4,
  traco5,
  traco6,
  colors,
  imgsE,
  imgsD,
}) => {
  const Paleta = ({ colorsPaleta }) => {
    return (
      <>
        <div className="row rounded-3 overflow-hidden">
          {colorsPaleta.map((item) => (
            <div
              className="col paleta-size"
              style={{ background: `${item.color}` }}
              key={item.key}
            />
          ))}
        </div>
      </>
    );
  };

  const BtnImgModal = ({ key, local }) => {
    return (
      <>
        <div data-aos="fade-up">
          <button
            type="button"
            class="btn p-0 my-2"
            data-bs-toggle="modal"
            data-bs-target={`#modalE${key}`}
            key={key}
          >
            <img src={local} className="img-fluid img-thumbnail rounded-3" />
          </button>
        </div>

        <div
          class="modal fade"
          id={`modalE${key}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img src={local} className="img-fluid img-thumbnail rounded-3" />
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
        <section className="py-5 px-2 container container-max-width">
          <section className="text-center">
            <img src={logo} alt="" className="logo-size" />
            <div className="row my-2">
              <div className="col-md-6 py-3 local-ano-size d-flex align-items-center justify-content-center">
                <h3 className="display-6">{ano}</h3>
              </div>
              <div className="col-md-6 py-3 local-ano-size d-flex align-items-center justify-content-center">
                <div>
                  <i class="bi bi-geo-alt-fill"></i>
                  <h3 className="display-6">{local}</h3>
                </div>
              </div>
            </div>
          </section>
          <section>
            <p className="fs-5">
              É um espaço focado no bem-estar animal, oferecendo uma ampla gama
              de serviços, acessórios e cuidados à saúde animal, para que você
              possa proporcionar o melhor experiência para os tutores e seus
              filhos!
            </p>
            <p className="fs-5">
              O projeto foi um rebranding, pela necessidade de realinhamento com
              acomunicação da marca, pela mudança de comando do espaço,e pela
              expansão dos serviços, persona, que precisavam ser alinhados por
              um rebranding, ou seja não somente influênciou claramente no seu
              redesign, mas sim no comportamento e personalidade da marca.
            </p>
            <p className="fs-5">
              E identificamos os seguinte traços de personalidade da marca:
            </p>
            <div className="row text-center">
              <div className="col-sm-6">
                <h3 className="display-6">{traco1}</h3>
              </div>
              <div className="col-sm-6">
                <h3 className="display-6">{traco2}</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-6">
                <h3 className="display-6">{traco3}</h3>
              </div>
              <div className="col-sm-6">
                <h3 className="display-6">{traco4}</h3>
              </div>
            </div>
            <div className="row text-center">
              {traco6 ? (
                <>
                  <div className="col-sm-6">
                    <h3 className="display-6">{traco5}</h3>
                  </div>
                  <div className="col-sm-6">
                    <h3 className="display-6">{traco6}</h3>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-12">
                    <h3 className="display-6">{traco5}</h3>
                  </div>
                </>
              )}
            </div>
          </section>
          <section className="px-2">
            <Paleta colorsPaleta={colors} />

            <div className="row mt-5">
              <div className="col-sm-6 ">
                {imgsE.map((item) => (
                  <BtnImgModal key={item.key} local={item.local} />
                ))}
              </div>
              <div className="col-sm-6 ">
                {imgsD.map((item) => (
                  <BtnImgModal key={item.key} local={item.local} />
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default TemplateProjeto;
