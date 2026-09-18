let total = 47, itensCaixa = 6, dimensao = 4;
let caixas = (total/itensCaixa) % Math.pow(dimensao, 3);
console.log(Math.floor(caixas));