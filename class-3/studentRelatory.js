let notas = new Map(
    [["Algorithms", 87],
    ["Instrumental Portuguese", 85],
    ["Instrumental English", 88]]
)
const student = {
    name: "Dom",
    age: 19,
    degree: "System Analysis and Development",
    city: "São João do Rio do Peixe",
    country: "Brazilian Empire",
    year: 2026,
    CRE: 89.87,
    scores: notas
}
console.log(student);
const arithmeticalMean = notas.values().reduce((contar, atual)=>contar+atual, 0)
console.log(arithmeticalMean/notas.values().length())