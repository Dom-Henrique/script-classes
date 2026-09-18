let numero = Number(prompt("Numero:"));
let result = "";
for (let i=1;i<=10;i++){
    result+=`${numero} * ${i} = ${numero*i}\n`;
}
alert(result);