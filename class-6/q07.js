/*
Escreva como arrow functions com retorno implícito:
dobrar(numero), que retorna o dobro do número; somar(a, b),
que retorna a soma; e saudar(), sem parâmetros, que retorna
"Bem-vindo ao ADS!". Teste cada uma.
*/

const dobrar = (numero) => console.log(numero*2);
const somar = (a,b) => {
  console.log(a+b);
};
const saudar = () => console.log("Bem-vindo ao ADS!")

dobrar(7)
somar(4, 6)
saudar()