let [salario, reajuste] = prompt("Salario atual e reajuste:").trim().split(" ");
salario = Number(salario);
reajuste = Number(reajuste);
const precoReajuste = salario*(reajuste/100);
const novoSalario = salario+precoReajuste;
alert(`Reajuste: ${precoReajuste}\nNovo salario: ${novoSalario}\n`);