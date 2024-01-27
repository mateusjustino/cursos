import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/logo.png";

const InputCustom = ({ label, idName, type }) => {
  return (
    <>
      <div className="my-4 w-100">
        <label htmlFor={idName} className="fs-6 fw-bold p-1 w-100">
          {label}
          <br />
          <input
            type={type}
            id={idName}
            name={idName}
            className="p-1 pt-2 fs-6 input-style w-100"
            placeholder="Digite aqui..."
            required
          />
        </label>
      </div>
    </>
  );
};

const TextAreaCustom = ({ id, label1, label2 }) => {
  return (
    <>
      <div className="my-4 w-100">
        <label htmlFor={id} className="p-1 fw-bold fs-6">
          {label1}
        </label>
        <label htmlFor={id} className="p-1 fw-bold fs-6">
          {label2}:
        </label>
        <textarea
          id={id}
          name={id}
          rows="4"
          className="p-2 mx-1 w-100 rounded-3 fs-6"
          placeholder="Digite aqui..."
          required
        ></textarea>
      </div>
    </>
  );
};

const RadioCustom = ({}) => {
  const [radioChecked, setRadioChecked] = useState(null);
  const handleRadioChange = (event) => {
    setRadioChecked(event.target.value);
  };
  return (
    <>
      <div>
        <p className="p-1 fw-bold fs-6 m-0">
          Qual serviço você possui interesse?
        </p>
        <div className="d-flex align-items-center m-2">
          <input
            id="identidade"
            name="servico"
            type="radio"
            value="identidade"
            className="radio-custom"
            required
            checked={radioChecked == "identidade"}
            onChange={handleRadioChange}
          />
          <label htmlFor="identidade" className="ps-2">
            Identidade Visual
          </label>
        </div>

        <div className="d-flex align-items-center m-2">
          <input
            id="idv+gm"
            name="servico"
            type="radio"
            value="idv+gm"
            className="radio-custom"
            required
            checked={radioChecked == "idv+gm"}
            onChange={handleRadioChange}
          />
          <label htmlFor="idv+gm" className="ps-2">
            Identidade Visual + Gestão de Marca
          </label>
        </div>

        <div className="d-flex align-items-center m-2">
          <input
            id="outro"
            name="servico"
            type="radio"
            value="outro"
            className="radio-custom"
            required
            checked={radioChecked == "outro"}
            onChange={handleRadioChange}
          />
          <label htmlFor="outro" className="ps-2">
            Outro:
          </label>
        </div>
        <div className="w-100 ps-5 mb-5">
          <input
            id="outro-servico"
            name="outro-servico"
            type="text"
            className="fs-6 input-style w-100"
            placeholder="Digite aqui..."
            disabled={radioChecked !== "outro"}
            // disabled={radioChecked != "outro" ? "true" : "false"}
          />
        </div>
      </div>
    </>
  );
};

const Contato = () => {
  // envio do form
  const handleSubmit = async (e) => {
    handleClick();
    e.preventDefault(); // Impede o comportamento padrão do formulário (enviar a requisição e recarregar a página)

    const form = e.target; // Obtém a referência ao formulário que acionou o evento
    const formData = new FormData(form); // Cria um objeto FormData para obter os dados do formulário

    try {
      // Realiza uma requisição fetch para o endpoint da API do Basin
      const response = await fetch("https://usebasin.com/f/3cc33622376e", {
        method: "POST", // Método POST para enviar dados ao servidor
        headers: {
          Accept: "application/json", // Define o tipo de conteúdo que esperamos do servidor
        },
        body: formData, // Inclui os dados do formulário no corpo da requisição
      });

      // Verifica o status da resposta
      if (response.status == 200) {
        console.log("Sucesso!"); // Se a resposta htmlFor bem-sucedida (status 200), imprime "Sucesso!"
        notifySucess();
      } else {
        notifyError();
        console.log("Falha!"); // Se a resposta não htmlFor bem-sucedida, imprime "Falha!"
      }
    } catch (error) {
      console.error("Erro:", error); // Se ocorrer um erro durante a requisição, imprime o erro no console
    }
  };
  // fim envio do form

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    // Opcional: Remover a classe após um tempo para permitir futuros cliques com a animação
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
    // handleSubmit();
  };
  const SubmitCustom = () => {
    return (
      <>
        <input
          type="submit"
          value="Enviar"
          className={`align-self-center button-style rounded-3 p-2 px-4 fs-6 ${
            isClicked ? "clicked" : ""
          }`}
          // onClick={handleClick}
        />
      </>
    );
  };

  const notifySucess = () => {
    toast("✅ Enviado com sucesso!", {
      position: "bottom-center",
      // autoClose: 4000,
      autoClose: 1000,

      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: Logo,
      style: {
        background: "#7a71da", // Cor de fundo desejada
      },
      progressStyle: {
        background: "#dece8d",
      },
    });
  };
  const notifyError = () => {
    toast("❌ Erro no envio!", {
      position: "bottom-center",
      // autoClose: 4000,
      autoClose: 1000,

      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: Logo,
      style: {
        background: "#7a71da", // Cor de fundo desejada
      },
      progressStyle: {
        background: "#dece8d",
      },
    });
  };

  return (
    <>
      <Header />
      <main>
        <section className="py-5">
          <div className="container py-1 container-max-width">
            <h1 className="text-center pb-3">
              Se torne protagonista na sua vida!
            </h1>
            <p className="fs-6">
              Esse espaço é o nosso cantinho da descoberta, é aqui que você vai
              escolher o melhor projeto para sua marca, ou até extensão dela!
              Esse será um passo inicial para eu ter um primeiro contato com
              você e em breve entrarei em contato para mais informações!
            </p>
            <p className="fs-6">
              E montando uma proposta comercial exclusiva! Será rapidinho, ok?
              🗣️👋 Bora lá? 🧭
            </p>
            <form
              action="https://usebasin.com/f/3cc33622376e"
              method="POST"
              id="form"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="my-4 p-3 rounded-3 form-style d-flex flex-column"
            >
              <h1 className="text-center">Formulário</h1>
              <InputCustom
                label="Informe seu nome completo:"
                idName="nome"
                type="text"
              />
              <InputCustom
                label="Informe seu celular:"
                idName="celular"
                type="tel"
              />
              <InputCustom
                label="Informe seu e-mail:"
                idName="email"
                type="email"
              />

              <TextAreaCustom
                id="situacao-design"
                label1="Como está a situação atual do design da empresa/negócio? 🎨📊"
                label2="Descreva o que a empresa já tem ou faz em termos de Design hoje em dia"
              />

              <RadioCustom />

              <SubmitCustom />
            </form>
            <button onClick={notifySucess}>Notify sucess!</button>
            <button onClick={notifyError}>Notify error!</button>
            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              // limit={1}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Contato;

{
  /* <div className="row">
                  <div className="col-xxl-4  col-md-6">
                    <InputCustom
                      label="Informe seu nome completo!:"
                      idName="nome"
                      type="text"
                    />
                  </div>
                  <div className="col-xxl-4  col-md-6">
                    <InputCustom
                      label="📱 Qual seu número de celular?"
                      idName="celular"
                      type="tel"
                    />
                  </div>
                  <div className="col-xxl-4 col-md-12">
                    <InputCustom
                      label="📥 E-mail? ( de preferência profissional)"
                      idName="email-profissional"
                      type="email"
                    />
                  </div>
                </div>

                <RadioCustom
                  idName="✨ A identidade visual será feita para a sua empresa?"
                  option1="Sim, e eu sou a/o responsável pelas aprovações e revisões do
            projeto."
                  option2="Sim, eu e minha(meu) sócia (o) seremos responsáveis"
                  option3="Não, eu sou social media ou agência/studio que procura delegar este
                serviço"
                />

                <InputCustom
                  label="🏢💡 Qual é o nome da empresa que terá a identidade visual?"
                  idName="nome-empresa"
                  type="text"
                />

                <InputCustom
                  label="Como está a situação atual do design da empresa/negócio? 🎨📊
                  Descreva o que a empresa já tem ou faz em termos de Design hoje
                  em dia."
                  idName="nome-empresa"
                  type="text"
                />

                <RadioCustom
                  idName="🏢 Quanto tempo a empresa/negócio existe?"
                  option1="Faz pouco tempo (1 à 10 meses)"
                  option2="Uns aninhos já ( + de 2 anos)"
                  option3="Há bastante tempo (+ de 3 anos)"
                />

                <RadioCustom
                  idName="🌱🚀🌐 Qual é o tamanho do porte da sua empresa?"
                  option1="Sou microempreendedor(a) individual"
                  option2="Empresa médio porte"
                  option3="Empresa de grande porte"
                />

                <RadioCustom
                  idName="Quem realizou a identidade visual da sua empresa?"
                  option1="Um designer gráfico que contratei"
                  option2="Você mesma (o) fez sozinha"
                  option3="Não tenho identidade visual"
                  option4="Outra pessoa fora do ramo design, fez pra você"
                />

                <RadioCustomProject /> */
}
