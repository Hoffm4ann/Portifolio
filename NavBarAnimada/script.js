// Seleciona todos os elementos com a classe "list" e os armazena em uma lista
const list = document.querySelectorAll(".list");

// Função para lidar com a ativação do link
function activeLink() {
    // Remove a classe "active" de todos os itens da lista
    list.forEach((item) => {
        item.classList.remove("active");
    });
    // Adiciona a classe "active" ao item clicado
    this.classList.add("active");
}

// Para cada item na lista, adiciona um ouvinte de evento de clique que chama a função activeLink
list.forEach((item) =>
    item.addEventListener("click", activeLink)
);
