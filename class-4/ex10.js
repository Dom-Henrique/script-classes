let numero = Number(prompt("Numero:"));
let string = ""
for (let i=1;i<=numero;i++){
    if (i%2==0) string += `${i} - par\n`;
    else string += `${i} - ímpar\n`;
}
alert(string)