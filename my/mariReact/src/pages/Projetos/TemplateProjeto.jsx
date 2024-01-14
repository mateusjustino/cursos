import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./TemplateStyle.css";

const Paleta = ({ colorsPaleta }) => {
  return (
    <>
      <div className="row rounded-3 overflow-hidden mt-5 mx-1">
        {colorsPaleta.map((item) => (
          <div
            className="col paleta-size"
            style={{ background: `${item.color}` }}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};

const BtnImgModal = ({ item }) => {
  return (
    <>
      <div data-aos="fade-up">
        <button
          type="button"
          className="btn p-0 my-2"
          data-bs-toggle="modal"
          data-bs-target={`#modal${item.id}`}
        >
          <img src={item.local} className="img-fluid img-thumbnail rounded-3" />
        </button>
      </div>

      <div
        className="modal fade"
        id={`modal${item.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <img
              src={item.local}
              className="img-fluid img-thumbnail rounded-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const TemplateProjeto = ({
  logo,
  local,
  ano,
  paragraphs,
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
  return (
    <>
      <Header />
      <main>
        <section className="py-5 container container-max-width">
          <section className="text-center">
            <img src={logo} alt="" className="logo-size" />
            <div className="row my-2">
              <div className="col-md-6 py-3 local-ano-size d-flex align-items-center justify-content-center">
                <h1 className="fw-bold">{ano}</h1>
              </div>
              <div className="col-md-6 py-3 local-ano-size d-flex align-items-center justify-content-center">
                <div>
                  <i className="bi bi-geo-alt-fill fs-5"></i>
                  <h1 className="fw-bold">{local}</h1>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="my-2">
              {paragraphs.map((item) => (
                <p key={item.id} className="fs-6">
                  {item.text}
                </p>
              ))}
            </div>
          </section>
          <section>
            <div className="row text-center">
              <div className="col-6">
                <h1 className="fw-bold my-2">{traco1}</h1>
              </div>
              <div className="col-6">
                <h1 className="fw-bold my-2">{traco2}</h1>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-6">
                <h1 className="fw-bold my-2">{traco3}</h1>
              </div>
              <div className="col-6">
                <h1 className="fw-bold my-2">{traco4}</h1>
              </div>
            </div>
            <div className="row text-center">
              {traco6 ? (
                <>
                  <div className="col-6">
                    <h1 className="fw-bold my-2">{traco5}</h1>
                  </div>
                  <div className="col-6">
                    <h1 className="fw-bold my-2">{traco6}</h1>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-12">
                    <h1 className="fw-bold my-2">{traco5}</h1>
                  </div>
                </>
              )}
            </div>
            <Paleta colorsPaleta={colors} />
          </section>
          <section className="">
            <div className="row mt-5">
              <div className="col-sm-6 ">
                {imgsE.map((item) => (
                  <div key={item.id}>
                    <BtnImgModal item={item} />
                  </div>
                ))}
              </div>
              <div className="col-sm-6 ">
                {imgsD.map((item) => (
                  <div key={item.id}>
                    <BtnImgModal item={item} />
                  </div>
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
