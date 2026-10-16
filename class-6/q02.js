/*
Dado o array funcionarios, crie o array nomesTI apenas com os
NOMES dos funcionários do setor "TI", encadeando filter() e
map() com arrow functions. Exiba nomesTI e, depois, a
quantidade de itens do array original, mostrando que ele não foi
alterado.
*/

funcionarios = [
    {nome:"Lia",setor:"TI"},
    {nome:"Rui",setor:"RH"},
    {nome:"Ana",setor:"TI"},
    {nome:"Caio",
    setor:"Vendas"}
    ]
const nomesTI = funcionarios.filter(x => x.setor == "TI").map(x => x.nome)
console.log(nomesTI);
console.log(nomesTI.length)