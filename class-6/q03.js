/*
Usando reduce(), calcule o valor total do carrinho: a soma de
preco × quantidade de cada item. Exiba o resultado com
template literal.
*/

carrinho = [
    {item:"Teclado",
    preco:150,quantidade:1},
    {item:"Mouse",
    preco:80,quantidade:2},
    {item:"Cabo USB",
    preco:25,quantidade:3}
    ]
    // soma * quantidade
    const result = carrinho.reduce((contador, atual) => contador+(atual.preco * atual.quantidade), 0);
    console.log(result)