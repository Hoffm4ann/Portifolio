// Seleciona os elementos do ponteiro de horas, minutos, segundos e a exibição digital da data
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalDate = document.querySelector('.digital');
const digitalHour = document.querySelector(".clockd")
// Array com os nomes dos dias da semana
const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

// Array com os nomes dos meses
const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];



// Função para obter a hora atual
const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        hourd: String(date.getHours()).padStart(2, '0'),
        minuted: String(date.getMinutes()).padStart(2, '0'),
        secondd: String(date.getSeconds()).padStart(2, '0'),
        
               
    };
};



// Atualiza a posição dos ponteiros a cada segundo
setInterval(() => {
    
    const { seconds, minutes, hours , hourd, minuted, secondd} = getTime();
    digitalHour.textContent = `${hourd}:${minuted}:${secondd}`;

        
     // Define a rotação do ponteiro dos segundos
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;

    // Define a rotação do ponteiro dos minutos
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;

    // Define a rotação do ponteiro das horas
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30 + minutes / 2}deg)`;
}, 1000);


// Função para obter a data atual e formatá-la
const getDate = () => {
    const date = new Date();

    return {
        days: date.getDate(),
        month: month[date.getMonth()], // Obtém o nome do mês a partir do array 'month'
        year: date.getFullYear(),
        dayOfWeek: daysOfWeek[date.getDay()], // Obtém o nome do dia da semana a partir do array 'daysOfWeek'
    };
};

// Atualiza a exibição da data a cada segundo
const updateData = () => {
    const { days, month, year, dayOfWeek } = getDate();

    // Atualiza o conteúdo da exibição digital da data
    digitalDate.textContent = `${dayOfWeek}, ${days} de ${month} de ${year}`;
};

// Chama a função de atualização da data a cada segundo
setInterval(updateData, 1000);



