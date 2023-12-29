import React from "react";
import "./FAQstyle.css";

function FAQ() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button fs-6 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Porque identidade visual é importante pro meu negócio?
            </button>
          </span>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6">
                <strong>Por posicionamento</strong>: O primeiro contato que o
                seu cliente terá com seu negócio, é como uma ponte que facilita
                o caminho deles até você;
              </p>
              <p className="fs-6">
                <strong>Percepção de valor</strong>: Uma identidade visual
                (adequada e com bom design) afinal não adianta PARECER ser bom,
                você precisa parecer excelente, agregando uma experiência melhor
                ao cliente, e enriquece (potencializa) a visão de qualidade e
                sentimento com seu produto ou serviço
              </p>
              <p className="fs-6">
                <strong>Poupa seu tempo e dinheiro</strong>: IDV facilitará não
                só o seu trabalho e sim a delegação para outros profissionais
                como: arquitetos, pintores, gráficas, designer de posts, web
                designers, porquê você terá um guia de marca! E poupará seu
                dinheiro e seu tempo tambem pq vc não terá indecisções e dúvidas
                já terá uma estrtutura
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Qual a diferença entre identidade visual e logotipo?
            </button>
          </span>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6">
                Única diferença é que o logotipo é um elemento individual de uma
                identidade visual! Já que o logotipo faz parte do conjunto que
                as compõe, e a mais importante, no entanto sua representação
                isolada não é o suficiente para tornar sua marca memorável e
                distinguível! A identidade visual além do logotipo dependendo do
                tamanho do projeto, a identidade visual contém: estilos
                tipográficos, paleta de cores, elementos/ilustrações gráficos de
                apoio, ícones, texturas, patterns, fotografia (não faço
                fotografias mas posso dar orientações)
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Vocês oferecem apenas design ou também ajudam na estratégia da
              marca?
            </button>
          </span>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6">
                No pacote protagonista total, está incluso o mapeamento de
                comunicação da marca.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Vocês fazem registro de marca?
            </button>
          </span>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6">
                Quem faz o registro é nossa parceira Manacá, com modalidade de
                acompanhamento e de indicação com cupom de 10% de desconto!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              O que inclui em um projeto de IDV?
            </button>
          </span>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6">
                No momento disponibilizo 3 pacotes de identidade visual
                <ul>
                  <li>Pacote essencial</li>
                  <li>Pacote intermediário</li>
                  <li>Pacote protagonista total</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Quanto tempo leva para desenvolver uma identidade visual?
            </button>
          </span>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6">
                Dependendo do pacote que você escolher, é em média entre 25 dias
                à 35 dias.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Posso solicitar reajustes durante o processo de identidade visual?
            </button>
          </span>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6">
                Os reajustes possuem limitações em até 2 alterações (podendo
                interferir também no tempo na entrega gerando atrasos), caso
                ultrapasse deste limite, será solicitado um novo orçamento para
                o projeto como se fosse um novo!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Quais são as formas de pagamento?
            </button>
          </span>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="fs-6">
                No cartão de crédito em até 3x sem juros, ou com modalidade de
                40% de entrada, e 60% na etapa final!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
