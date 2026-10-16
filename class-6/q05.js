/*
Um sistema enviou os dados de um produto em JSON (texto).
Converta-o para objeto com JSON.parse(), aplique 10% de
desconto no preço, diminua o estoque em 1 unidade e converta
o objeto de volta para JSON. Exiba o tipo do objeto, o JSON
final e o tipo do JSON final.
*/

recebido = '{"produto":"Monitor", "preco":900, "estoque":4}'
const obj = JSON.parse(recebido);
obj.preco = 900*0.90;
obj.estoque -= 1
recebido = JSON.stringify(obj)
console.log(obj)