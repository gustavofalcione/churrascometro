// carne: 400g por pessoa | Se o churrasco durar mais de 6 horas: 650g 

// Cerveja: 1200ml por pessoa | Se o churrasco durar mais de 6 horas: 1500ml 

// Refri/agua -> 1000ml por pessoa | Se o churrasco durar mais de 6 horas: 1500ml

// crianças valem por 0,5


let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao= document.getElementById('duracao')


let resultado = document.getElementById('resultado')

function calcular() { 
  
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qntCarne = adultos * carnePP(duracao) + (carnePP(duracao) / 2 * criancas)
  console.log(qntCarne)

  qntCerveja = adultos * cervejaPP(duracao)

  qntBebidas = adultos * bebidasPP(duracao) + (bebidasPP(duracao)/ 2 * criancas)

  resultado.innerHTML = `<p>Carne: ${qntCarne / 1000}Kg<p>`
  resultado.innerHTML += `<p>Cerveja: ${Math.ceil(qntCerveja / 355)} latas<p>`
  resultado.innerHTML += `<p>Bebida: ${Math.ceil(qntBebidas / 2000)} garrafas(2L)<p>`
}

function carnePP(duracao) {
  if(duracao >= 6) {
    return 650;
  } else {
    return 400;
  } 
}

function cervejaPP(duracao) {
  if(duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  } 
}

function bebidasPP(duracao) {
  if(duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  } 
}