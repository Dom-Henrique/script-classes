/*
Escreva a função gerarUsuario(nomeCompleto), que cria um
nome de usuário: remove os espaços das pontas, converte
para minúsculas e troca os espaços entre os nomes por
pontos. Encadeie os métodos trim(), toLowerCase(), split() e
join().
*/

function gerarUsuario(nomeCompleto){
    let nomeUser = nomeCompleto.trim();
    return nomeUser.split(" ").join(".").toLowerCase()
  }
  console.log(gerarUsuario("Dom Henrique"))