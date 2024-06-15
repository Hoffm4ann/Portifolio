// Seleciona o elemento com a classe "toggle"
let toggle = document.querySelector(".toggle");
// Seleciona o elemento com a classe "menu"
let menu = document.querySelector(".menu");

// Adiciona um evento de clique ao botão de alternância/toggle
toggle.onclick = function () {
    menu.classList.toggle("active"); // Adiciona ou remove a classe "active" do menu
}
