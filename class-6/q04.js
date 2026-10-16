/*
Para o array alunos, use: find() para exibir o nome do primeiro
aluno com média menor que 7; some() para verificar se algum
aluno tem média maior ou igual a 9; e every() para verificar se
todos têm média maior ou igual a 7.
*/

alunos = [
    {nome:"Ana",media:8.5},
    {nome:"Bruno",media:6},
    {nome:"Carla",media:9},
    {nome:"Davi",media:5.5}
    ]
const result = alunos.find(x => x.media<7)