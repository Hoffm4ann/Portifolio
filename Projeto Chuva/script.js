let hrElement;
let counter = 100; // Define o número de "gotas de chuva"

for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("hr"); // Cria um elemento hr para cada "gota de chuva"
    
    // Define a posição horizontal aleatória da "gota de chuva"
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    
    // Define a duração da animação da "gota de chuva"
    hrElement.style.animationDuration = 0.9 + Math.random() * 0.3 + "s";
    
    // Define um atraso aleatório para a animação da "gota de chuva"
    hrElement.style.animationDelay = Math.random() * 5 + "s";

    // Adiciona a "gota de chuva" ao corpo do documento
    document.body.appendChild(hrElement);
}
