// pra usar um prompt de uma so vez, uso uma lista de elementos e depois separo o texto com o split
let [name, age, degree, city] = prompt("Name, age. degree and city: ").trim().split(',');
alert(`${name}, ${age}, ${degree}, ${city}`);