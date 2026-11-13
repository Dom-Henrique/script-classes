const mainTitle = document.querySelector("#main-title");
const searchBox = document.querySelector("#search-box");
console.log(searchBox.value.trim());
mainTitle.textContent = "Degrees from IFPB Cajazeiras";
const cards = document.querySelector(".degree-card");
console.log(cards.length)
cards.forEach(card => {
    const nome = card.querySelector("h2");
    console.log(nome);
})

const titulo = document.querySelector("#main-title");
titulo.classList.add("highlights")
console.log(titulo.classList.contains("highlights"))
titulo.classList.remove("highlights")
console.log(titulo.classList.contains("highlights"))

document.body.classList.toggle(".theme-toggle")