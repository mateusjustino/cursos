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

  // ajuste tamanho do text area
  const [conteudo1, setConteudo1] = useState("");
  const [conteudo2, setConteudo2] = useState("");
  const ajustarAlturaTextArea1 = (event) => {
    const elemento = event.target;
    elemento.style.height = "auto";
    elemento.style.height = `${elemento.scrollHeight}px`;
    setConteudo1(elemento.value);
  };
  const ajustarAlturaTextArea2 = (event) => {
    const elemento = event.target;
    elemento.style.height = "auto";
    elemento.style.height = `${elemento.scrollHeight}px`;
    setConteudo2(elemento.value);
  };
  // fim ajuste tamanho do text area

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

  const SelectCustom = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <>
        <div className="m-1 my-3">
          <label htmlFor="selecao" className="fs-6 fw-bold p-1">
            Escolha uma opção:
            <br />
            <select
              id="selecao"
              name="selecao"
              className="p-1 fs-6 select-style"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>
          </label>
          <p>{selectedOption}</p>
        </div>
      </>
    );
  };

  const RadioCustom = ({ idName, option1, option2, option3, option4 }) => {
    return (
      <>
        <div className="my-4">
          <label className="fs-6 fw-bold p-1">{idName}</label>
          <br />

          <div className="d-flex align-items-center mb-1">
            <input
              type="radio"
              name={idName}
              id={idName + option1}
              value={option1}
              className="ms-3"
            />
            <label className="fs-6 ms-3" htmlFor={idName + option1}>
              {option1}
            </label>
            <br />
          </div>

          <div className="d-flex align-items-center mb-1">
            <input
              type="radio"
              name={idName}
              id={idName + option2}
              value={option2}
              className="ms-3"
            />
            <label className="fs-6 ms-3" htmlFor={idName + option2}>
              {option2}
            </label>
            <br />
          </div>

          <div className="d-flex align-items-center mb-1">
            <input
              type="radio"
              name={idName}
              id={idName + option3}
              value={option3}
              className="ms-3"
            />
            <label className="fs-6 ms-3" htmlFor={idName + option3}>
              {option3}
            </label>
            <br />
          </div>

          {option4 && (
            <>
              <div className="d-flex align-items-center mb-1">
                <input
                  type="radio"
                  name={idName}
                  id={idName + option4}
                  value={option3}
                  className="ms-3"
                />
                <label className="fs-6 ms-3" htmlFor={idName + option4}>
                  {option4}
                </label>
                <br />
              </div>
            </>
          )}
        </div>
      </>
    );
  };

  const RadioCustomProject = () => {
    const IconCheck = () => {
      return (
        <>
          <i class="bi bi-check-lg me-2" style={{ color: "green" }}></i>
        </>
      );
    };
    const IconWrong = () => {
      return (
        <>
          <i class="bi bi-x-lg me-2" style={{ color: "red" }}></i>
        </>
      );
    };
    return (
      <>
        <div className="row my-4 py-3 ">
          <label className="fs-6 fw-bold">
            🌿✨Para alinharmos a melhor fase da sua empresa/negócio, elaborei 3
            pacotes que podem adaptar melhor a sua realidade! <br />
          </label>
          <div className="col-md-4 py-2 ps-2 d-flex flex-column  justify-content-start align-items-start ">
            <div className="div-h1-height d-flex align-items-center">
              <h1 className="ms-3 fw-bold">PACOTE ESSENCIAL</h1>
            </div>
            <ul className="table-pack">
              <li>
                <label htmlFor="option1">
                  <IconCheck />
                  <span>Variações assinaturas (logotipos)</span>
                </label>
              </li>
              <li>
                <label htmlFor="option1">
                  <IconCheck />
                  <span>paleta de cores</span>
                </label>
              </li>
              <li>
                <label htmlFor="option1">
                  <IconCheck />
                  <span>estilo tipográfico</span>
                </label>
              </li>

              <li>
                <label htmlFor="option1">
                  <IconCheck />
                  <span>guia de marca</span>
                </label>
              </li>
              <li>
                <label htmlFor="option1">
                  <IconWrong />
                  <span>Itens Kit papelaria básica</span>
                </label>
              </li>
              <li>
                <label htmlFor="option1">
                  <IconWrong />
                  <span>templates para redes sociais básica</span>
                </label>
              </li>
              <li>
                <label htmlFor="option1">
                  <IconWrong />
                  <span>elementos visuais complementares</span>
                </label>
              </li>
              <li>
                <label htmlFor="option1">
                  <IconWrong />
                  <span>kit redes sociais completas</span>
                </label>
              </li>
              <li>
                <label htmlFor="option1">
                  <IconWrong />
                  <span>mapeamento comunicação da marca</span>
                </label>
              </li>
              <li>
                <label htmlFor="option1">
                  <IconWrong />
                  <span>aplicações extras à sua escolha</span>
                </label>
              </li>
            </ul>
            <input
              type="radio"
              name="🌿✨Para alinharmos a melhor fase da sua empresa/negócio, elaborei 3 pacotes que podem adaptar melhor a sua realidade!"
              value="Pacote Essencial"
              className="align-self-center radio-style"
              id="option1"
            />
          </div>

          <div className="col-md-4 py-2 ps-2 d-flex flex-column  justify-content-start align-items-start ">
            <div className="div-h1-height  d-flex align-items-center">
              <h1 className="ms-3 fw-bold">PACOTE INTERMEDIÁRIO</h1>
            </div>
            <ul className="table-pack">
              <li>
                <label htmlFor="option2">
                  <IconCheck />
                  <span>Variações assinaturas (logotipos)</span>
                </label>
              </li>
              <li>
                <label htmlFor="option2">
                  <IconCheck />
                  <span>paleta de cores</span>
                </label>
              </li>
              <li>
                <label htmlFor="option2">
                  <IconCheck />
                  <span>estilo tipográfico</span>
                </label>
              </li>

              <li>
                <label htmlFor="option2">
                  <IconCheck />
                  <span>guia de marca</span>
                </label>
              </li>
              <li>
                <label htmlFor="option2">
                  <IconCheck />
                  <span>Itens Kit papelaria básica</span>
                </label>
              </li>
              <li>
                <label htmlFor="option2">
                  <IconCheck />
                  <span>templates para redes sociais básica</span>
                </label>
              </li>
              <li>
                <label htmlFor="option2">
                  <IconCheck />
                  <span>elementos visuais complementares</span>
                </label>
              </li>
              <li>
                <label htmlFor="option2">
                  <IconWrong />
                  <span>kit redes sociais completas</span>
                </label>
              </li>
              <li>
                <label htmlFor="option2">
                  <IconWrong />
                  <span>mapeamento comunicação da marca</span>
                </label>
              </li>
              <li>
                <label htmlFor="option2">
                  <IconWrong />
                  <span>aplicações extras à sua escolha</span>
                </label>
              </li>
            </ul>
            <input
              type="radio"
              name="🌿✨Para alinharmos a melhor fase da sua empresa/negócio, elaborei 3 pacotes que podem adaptar melhor a sua realidade!"
              value="Pacote Intermediário"
              className="align-self-center radio-style"
              id="option2"
            />
          </div>

          <div className="col-md-4 py-2 ps-2 d-flex flex-column  justify-content-start align-items-start ">
            <div className="div-h1-height  d-flex align-items-center">
              <h1 className="ms-3 fw-bold">PACOTE PROTAGONISTA TOTAL</h1>
            </div>
            <ul className="table-pack">
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>Variações assinaturas (logotipos)</span>
                </label>
              </li>
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>paleta de cores</span>
                </label>
              </li>
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>estilo tipográfico</span>
                </label>
              </li>

              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>guia de marca</span>
                </label>
              </li>
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>Itens Kit papelaria básica</span>
                </label>
              </li>
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>templates para redes sociais básica</span>
                </label>
              </li>
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>elementos visuais complementares</span>
                </label>
              </li>
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>kit redes sociais completas</span>
                </label>
              </li>
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>mapeamento comunicação da marca</span>
                </label>
              </li>
              <li>
                <label htmlFor="option3">
                  <IconCheck />
                  <span>aplicações extras à sua escolha</span>
                </label>
              </li>
            </ul>
            <input
              type="radio"
              name="🌿✨Para alinharmos a melhor fase da sua empresa/negócio, elaborei 3 pacotes que podem adaptar melhor a sua realidade!"
              value="Pacote Protagonista Total"
              className="align-self-center radio-style"
              id="option3"
            />
          </div>
        </div>
      </>
    );
  };

  const TextAreaCustom = ({ idName }) => {
    return (
      <>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={conteudo1}
          onChange={ajustarAlturaTextArea1}
          placeholder="Digite seu texto aqui..."
          style={{ resize: "none" }}
        ></textarea>
      </>
    );
  };

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
  return (
    <>
      <Header />
      <main>
        <section className="">
          <div className="container py-1 container-max-width">
            <p className="fs-6">
              Oie! Bora agendar uma call para escolher o melhor projeto para sua
              marca? E para primeiro contato
            </p>

            <form
              action="https://usebasin.com/f/3cc33622376e"
              method="POST"
              id="form"
              onSubmit={handleSubmit}
              className="my-5 py-3 px-3 rounded-3 form-style d-flex flex-column"
            >
              <div className="row">
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

              <RadioCustomProject />

              {/* <label>
                🎁✨ Deseja algo a mais ao projeto de identidade visual?
                <br />
                <textarea
                  // rows="1"
                  value={conteudo1}
                  onChange={ajustarAlturaTextArea1}
                  placeholder="Digite seu texto aqui..."
                  style={{ resize: "none" }}
                  name="🎁✨ Deseja algo a mais ao projeto de identidade visual?"
                />
              </label> */}
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
