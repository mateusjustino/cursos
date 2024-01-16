import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

import React, { useState } from "react";

const Contato = () => {
  // envio do form
  const [envioConcluido, setEnvioConcluido] = useState(false);
  const handleSubmit = async (e) => {
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
      if (response.status === 200) {
        console.log("Sucesso!"); // Se a resposta htmlFor bem-sucedida (status 200), imprime "Sucesso!"
        setEnvioConcluido(true);
      } else {
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
    }, 10);
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
          onClick={handleClick}
        />
      </>
    );
  };

  const InputCustom = ({ label, idName, type }) => {
    return (
      <>
        <div className="my-4 w-100 ">
          <label htmlFor="nome" className="fs-6 fw-bold p-1  w-100">
            {label}
            <br />
            <input
              type={type}
              id={idName}
              name={idName}
              className="p-1 pt-2 fs-6 input-style w-100"
              placeholder="Digite aqui..."
            />
          </label>
        </div>
      </>
    );
  };

  const TextAreaCustom = () => {
    return <textarea />;
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
              onSubmit={handleSubmit}
              className="my-5 py-3 px-3 rounded-3 form-style d-flex flex-column"
            >
              <InputCustom
                label="Informe seu nome completo!:"
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
                idName="e-mail"
                type="email"
              />

              <p>
                Como está a situação atual do design da empresa/negócio? 🎨📊
              </p>
              <p>
                Descreva o que a empresa já tem ou faz em termos de Design hoje
                em dia.
              </p>
              <TextAreaCustom />
              <SubmitCustom />
            </form>

            {envioConcluido && (
              <div style={{ color: "green", marginTop: "10px" }}>
                Envio concluído com sucesso!
              </div>
            )}
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
