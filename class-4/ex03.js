let [vendasMes, metaEstabelecida] = prompt("Vendas por mês e meta estabelecida: ").join(" ");
vendasMes = Number(vendasMes);
metaEstabelecida = Number(metaEstabelecida);
let diferenca = Math.abs(metaEstabelecida-vendasMes);
if (metaEstabelecida>= vendasMes) console.log(true);
else console.log(false)
console.log(`Diferença de R$${diferenca}`)