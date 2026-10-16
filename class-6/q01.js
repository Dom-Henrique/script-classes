/*
Crie o objeto disciplina com as propriedades nome ("Web"),
cargaHoraria (60) e professor ("John"). Em seguida, altere
cargaHoraria para 80, adicione a propriedade periodo com
valor 2 e remova a propriedade professor. Exiba o objeto final
e, depois, o valor de nome usando a notação de colchetes.
*/
const obj = {
    "nome" : "Web",
    "cargaHoraria": 60,
    "professor": "John"
}
obj.cargaHoraria = 80
obj.periodo = 2;
delete obj.professor;
console.log(obj)
console.log(obj.nome)