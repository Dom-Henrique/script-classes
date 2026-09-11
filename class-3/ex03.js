let [name, age, height] = prompt("Name, age and height").trim().split(',');
let typers = [], msg = "";
for (let i of [name, age, height]){
    typers.push(typeof(i));
    msg += `${i}\n`;
}
alert(msg)