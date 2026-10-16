/*
Crie a arrow function listarAprovados(lista, mediaMinima = 7),
que retorna um novo array com os nomes, em MAIÚSCULAS,
dos alunos com média maior ou igual a mediaMinima. Encadeie
filter() e map(). Teste sem informar a média mínima (usa o valor
padrão 7) e informando 8.
*/

const listarAprovados = (lista, mediaMinima = 7) => {
    return lista.filter(x => x.media=mediaMinima).map(x => x.nome.toUpperCase())
  }
  alunos = [
  {nome:"ana",media:8.5},
  {nome:"bruno",media:6},
  {nome:"carla",media:7.5},
  {nome:"davi",media:9}
  ]
  console.log(listarAprovados(alunos))