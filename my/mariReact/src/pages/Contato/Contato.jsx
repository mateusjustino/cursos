import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

import React, { useState } from "react";

const Contato = () => {
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
        console.log("Sucesso!"); // Se a resposta for bem-sucedida (status 200), imprime "Sucesso!"
        setEnvioConcluido(true);
      } else {
        console.log("Falha!"); // Se a resposta não for bem-sucedida, imprime "Falha!"
      }
    } catch (error) {
      console.error("Erro:", error); // Se ocorrer um erro durante a requisição, imprime o erro no console
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="">
          <div>
            <h1>Contato</h1>
          </div>

          <div className="container border">
            <form
              action="https://usebasin.com/f/3cc33622376e"
              method="POST"
              id="form"
              onSubmit={handleSubmit}
              className="d-flex flex-column justify-content-center align-items-start py-5 border"
            >
              <label for="email"> Email: </label>
              <input type="email" id="email" name="email" />
              <br />

              <label for="nome"> 🌸 Informe seu nome completo! : </label>
              <input type="nome" id="nome" name="nome" />
              <br />

              <label for="cidade"> 📱 Qual seu número de celular?</label>
              <input type="cidade" id="cidade" name="cidade" />
              <br />

              <label for="cidade">
                📥 E-mail? ( de preferência profissional)
              </label>
              <input type="cidade" id="cidade" name="cidade" />
              <br />

              <label>
                ✨ A identidade visual será feita para a sua empresa?
              </label>
              <label>
                <input
                  type="radio"
                  name="A identidade visual será feita para a sua empresa?"
                  value="Sim, e eu sou a/o responsável pelas aprovações e revisões do projeto."
                />
                Sim, e eu sou a/o responsável pelas aprovações e revisões do
                projeto.
              </label>
              <label>
                <input
                  type="radio"
                  name="A identidade visual será feita para a sua empresa?"
                  value="Sim, eu e minha(meu) sócia (o) seremos responsáveis"
                />
                Sim, eu e minha(meu) sócia (o) seremos responsáveis
              </label>
              <label>
                <input
                  type="radio"
                  name="A identidade visual será feita para a sua empresa?"
                  value="Não, eu sou social media ou agência/studio que procura delegar este serviço"
                />
                Não, eu sou social media ou agência/studio que procura delegar
                este serviço
              </label>
              <br />

              <label for="nome">
                {" "}
                🏢💡 Qual é o nome da empresa que terá a identidade visual?{" "}
              </label>
              <input type="nome" id="nome" name="nome" />
              <br />

              <label>🏢 Quanto tempo a empresa/negócio existe?</label>
              <label>
                <input
                  type="radio"
                  name="🏢 Quanto tempo a empresa/negócio existe?"
                  value="Faz pouco tempo (1 à 10 meses)"
                />
                Faz pouco tempo (1 à 10 meses)
              </label>
              <label>
                <input
                  type="radio"
                  name="🏢 Quanto tempo a empresa/negócio existe?"
                  value="Uns aninhos já ( + de 2 anos)"
                />
                Uns aninhos já ( + de 2 anos)
              </label>
              <label>
                <input
                  type="radio"
                  name="🏢 Quanto tempo a empresa/negócio existe?"
                  value="Há bastante tempo (+ de 3 anos)"
                />
                Há bastante tempo (+ de 3 anos)
              </label>
              <br />

              <label>🌱🚀🌐 Qual é o tamanho do porte da sua empresa?</label>
              <label>
                <input
                  type="radio"
                  name="🌱🚀🌐 Qual é o tamanho do porte da sua empresa?"
                  value="Sou microempreendedor(a) individual"
                />
                Sou microempreendedor(a) individual
              </label>
              <label>
                <input
                  type="radio"
                  name="🌱🚀🌐 Qual é o tamanho do porte da sua empresa?"
                  value="Empresa médio porte"
                />
                Empresa médio porte
              </label>
              <label>
                <input
                  type="radio"
                  name="🌱🚀🌐 Qual é o tamanho do porte da sua empresa?"
                  value="Empresa de grande porte"
                />
                Empresa de grande porte
              </label>
              <br />

              <label for="nome">
                Como está a situação atual do design da empresa/negócio? 🎨📊
                Descreva o que a empresa já tem ou faz em termos de Design hoje
                em dia.
              </label>
              <input type="nome" id="nome" name="nome" />
              <br />

              <label>Quem realizou a identidade visual da sua empresa?</label>
              <label>
                <input
                  type="radio"
                  name="Quem realizou a identidade visual da sua empresa?"
                  value="Um designer gráfico que contratei"
                />
                Um designer gráfico que contratei
              </label>
              <label>
                <input
                  type="radio"
                  name="Quem realizou a identidade visual da sua empresa?"
                  value="Outra pessoa fora do ramo design, fez pra você"
                />
                Outra pessoa fora do ramo design, fez pra você
              </label>
              <label>
                <input
                  type="radio"
                  name="Quem realizou a identidade visual da sua empresa?"
                  value="Você mesma (o) fez sozinha"
                />
                Você mesma (o) fez sozinha
              </label>
              <label>
                <input
                  type="radio"
                  name="Quem realizou a identidade visual da sua empresa?"
                  value="Não tenho identidade visual"
                />
                Não tenho identidade visual
              </label>
              <label>
                <input
                  type="radio"
                  name="Quem realizou a identidade visual da sua empresa?"
                  value="Outro:"
                />
                Outro: (aqui vai ter uma caixa de texto)
              </label>
              <br />

              <label>
                🌿✨Para alinharmos a melhor fase da sua empresa/negócio,
                elaborei 3 pacotes que podem adaptar melhor a sua realidade!
              </label>
              <label>
                <input
                  type="radio"
                  name="🌿✨Para alinharmos a melhor fase da sua empresa/negócio, elaborei 3 pacotes que podem adaptar melhor a sua realidade!"
                  value="PACOTE ESSENCIAL: Variações assinaturas (logotipos), paleta de cores, estilo tipográfico, guia de marca"
                />
                PACOTE ESSENCIAL: Variações assinaturas (logotipos), paleta de
                cores, estilo tipográfico, guia de marca
              </label>
              <label>
                <input
                  type="radio"
                  name="🌿✨Para alinharmos a melhor fase da sua empresa/negócio, elaborei 3 pacotes que podem adaptar melhor a sua realidade!"
                  value="PACOTE INTERMEDIÁRIO: mesmo que o anterior + Itens Kit papelaria básica + templates para redes sociais básica + elementos visuais complementares"
                />
                PACOTE INTERMEDIÁRIO: mesmo que o anterior + Itens Kit papelaria
                básica + templates para redes sociais básica + elementos visuais
                complementares
              </label>
              <label>
                <input
                  type="radio"
                  name="🌿✨Para alinharmos a melhor fase da sua empresa/negócio, elaborei 3 pacotes que podem adaptar melhor a sua realidade!"
                  value="PACOTE PROTAGONISTA TOTAL: Todos pacotes anteriores + kit redes sociais completas + mapeamento comunicação da marca + aplicações extras à sua escolha"
                />
                PACOTE PROTAGONISTA TOTAL: Todos pacotes anteriores + kit redes
                sociais completas + mapeamento comunicação da marca + aplicações
                extras à sua escolha
              </label>
              <label>
                <input
                  type="radio"
                  name="🌿✨Para alinharmos a melhor fase da sua empresa/negócio, elaborei 3 pacotes que podem adaptar melhor a sua realidade!"
                  value="Outro:"
                />
                Outro: (aqui vai ter uma caixa de texto)
              </label>
              <br />

              <label for="email">
                {" "}
                🎁✨ Deseja algo a mais ao projeto de identidade visual?{" "}
              </label>
              <input type="email" id="email" name="email" />
              <br />

              <label for="email">Possui alguma dúvida? ✏️💌</label>
              <input type="email" id="email" name="email" />
              <br />

              <br />
              <br />
              <input type="submit" value="Submit" />
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
