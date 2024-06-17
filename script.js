const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"você nasceu em Curitiba?";
    alternativas: [
  {
    texto: "sim",
    afirmação: "afirmação",
  }
  {
    texto: "não",
    afirmação: "afirmação"
    },
    ]  
},                                            
  {
    enunciado:"você gosta de frio?";
    alternativas: [
  {
    texto: "sim",
    afirmação: "afirmação",
  }
  {
    texto: "não",
    afirmação: "afirmação"
    },
    ]  
},                                                    
  {
    enunciado:"qual sua estação do ano favorita?";
    alternativas: [
      {
      texto: "inverno",
      afirmação: "afirmação",
      }
      {
      texto: "verão",
      afirmação: "afirmação",
  ]
},                                            
  {
    enunciado:"você moraria no alaska?";
    alternativas: [
      {
      texto: "sim",
      afirmação: "afirmação",
      }
      {
      texto: "não"
      afirmação: "afirmação"
  ]
},                                            
  {
    enunciado:"você moraria no deserto?";
    alternativas: [
      {
      texto: "sim",
      afirmação: "afirmação",
      }
      {
      texto: "não",
      afirmação: "afirmação",
    ]
  },                                            
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal = afirmacoes;
  atual++
mostraPergunta();
}
