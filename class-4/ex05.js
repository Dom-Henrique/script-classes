let valorCompra = Number(prompt("Valor da compra: "));
const frete = 15;
valorCompra > 150 ? console.log(`Frete grátis para a compra de ${valorCompra}`) : console.log(`Frete de ${frete} para a compra de ${valorCompra}`);