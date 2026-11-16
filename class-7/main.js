const titulo = document.getElementById("titulo-principal");
const subtitulo = document.querySelector("#subtitulo");
const campoBusca = document.querySelector("#campo-busca");
const filtroArea = document.querySelector("#filtro-area");
const mensagem = document.querySelector("#mensagem");
const lista = document.querySelector("#lista-cursos");
const formulario = document.querySelector("#form-cadastro");
const btnTema = document.querySelector("#btn-tema");
const btnLimpar = document.querySelector("#btn-limpar");

function mostrarMensagem(texto, tipo = "info"){
    mensagem.textContent = texto;
    mensagem.classList.remove("mensagem--sucesso");
    mensagem.classList.remove("mensagem--erro");

    if (tipo=="sucesso"){
        mensagem.classList.add("mensagem--sucesso");
    } else if (tipo=="erro"){
        mensagem.classList.add("mensagem--erro");
    }
}
titulo.textContent = "Cursos de Tecnologia";
mostrarMensagem("Bem-vindos ao painel!");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-alternativo");
    const ativo = document.body.classList.contains("tema-alternativo");
    mostrarMensagem( ativo ? "Destaque ativado." : "Destaque desativado.");
});

lista.addEventListener("click", (event) => {
    const botao = event.target.closest("button");
    lista.addEventListener("click", (event) => {
    const botao = event.target.closest("button");

    if (!botao || !lista.contains(botao)) return;

    const card = botao.closest(".card-curso");

    if (botao.dataset.acao === "detalhes") {
        const detalhes = card.querySelector(".detalhes");
        detalhes.classList.toggle("oculto");
        card.classList.toggle("expandido");

        botao.textContent = detalhes.classList.contains("oculto")
            ? "Ver detalhes"
            : "Ocultar detalhes";

    } else if (botao.dataset.acao === "remover") {
        const nome = card.querySelector("h2").textContent;

        card.remove();

        mostrarMensagem(`Curso "${nome}" removido.`, "sucesso");
    }
});
});

function aplicarFiltros(){
    const termo = campoBusca.value.trim().toLowerCase();
    const area = filtroArea.value;
    const cards = document.querySelectorAll(".card-curso");
    let visiveis = 0;

    cards.forEach((card) => {
        const nome = card.querySelector("h2").textContent.toLowerCase();
        const combinaNome = nome.includes(termo);
        const combinaArea = area == "todos" || card.dataset.area == area;
        const mostrar = combinaNome && combinaArea;
        card.classList.toggle("oculto", !mostrar);
        if (mostrar) visiveis++;
    });
    mostrarMensagem(`${visiveis} curso(s) encontrado(s)`);
}
campoBusca.addEventListener("input", aplicarFiltros);
filtroArea.addEventListener("change", aplicarFiltros);

function criarBotao(texto, acao, variante){
    const botao = document.createElement("button");
    botao.type = "button";
    botao.classList.add("botao", variante);
    botao.dataset.acao = acao;
    botao.textContent = texto;
    return botao;
}
function criarCard(nome, area){
    const card = document.createElement("article");
    card.classList.add("card-curso");
    card.dataset.area = area;

    const tituloCard = document.createElement("h2");
    tituloCard.textContent = nome;

    const descricao = document.createElement("p");
    descricao.classList.add("descricao");
    descricao.textContent = "Curso cadastrado pelo formulário.";

    const detalhes = document.createElement("p");
    detalhes.classList.add("detalhes", "oculto");
    detalhes.textContent = `Área: ${area}.`;
    card.append(
        tituloCard,
        descricao,
        criarBotao("Ver detalhes", "detalhes", "botao--principal"), 
        detalhes, 
        criarBotao("Remover", "remover", "botao--perigo")
    );
    return card;
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const campoNome = document.querySelector("#nome-curso");
    const nome = campoNome.value.trim();
    const area = document.querySelector("#area-curso").value;

    if (nome === "") {
        mostrarMensagem("Informe o nome do curso.", "erro");
        return;
    }

    lista.append(criarCard(nome, area));
    campoNome.value = "";
    mostrarMensagem(`Curso "${nome}" cadastrado!`, "sucesso");
});

if (botao.dataset.acao == "remover"){
    const nome = card.querySelector("h2").textContent;
    card.remove();
    mostrarMensagem(`Curso "${nome}" removido.`, "sucesso")
}