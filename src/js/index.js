const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        desselecionarBotao();

        personagens[index].classList.add("selecionado");
    });
});


function desselecionarBotao() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
// botoes.addEventListener("click", () => {

// })