const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"você nasceu em Curitiba?";
    alternativas: [
      "sim",
      "não",
  ]
},                                            
  {
    enunciado:"você gosta de frio?";
    alternativas: [
      "sim",
      "não",
  ]
},                                            
  {
    enunciado:"qual sua estação do ano favorita?";
    alternativas: [
      "inverno",
      "verão",
  ]
},                                            
  {
    enunciado:"você moraria no alaska?";
    alternativas: [
      "Alternativa1",
      "Alternativa2",
  ]
},                                            
  {
    enunciado:"você moraria no deserto?";
    alternativas: [
      "Alternativa1",
      "Alternativa2",
  ]
},                                            
];
