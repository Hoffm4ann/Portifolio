const chave = "cebcd482eda57fa9a6714c1c2ba91885";

const refreshButton = () => {
    const refreshBtn = document.querySelector(".refresh-button");
    refreshBtn.addEventListener("click", () => {
        const location = document.querySelector(".yourCity").value;
        city(location); 
    });
};
refreshButton();

const displayData = (dados) => {
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".descript").innerHTML = `${dados.weather[0].description.charAt(0).toUpperCase()}${dados.weather[0].description.slice(1)}`;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".moisture").innerHTML = "Umidade " + dados.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Velocidade do vento: " + dados.wind.speed + " m/s, Direção: " + dados.wind.deg + "°";
    document.querySelector(".sunrise").innerHTML = "Nascer do Sol: " + new Date(dados.sys.sunrise * 1000).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
    document.querySelector(".sunset").innerHTML = "Por do Sol: " + new Date(dados.sys.sunset * 1000).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
    document.querySelector(".thermalSensation").innerHTML = "Sensação Térmica: " + dados.main.feels_like + "°C";
    document.querySelector(".atmosphericPressure").innerHTML = "Pressão : " + dados.main.pressure + " hPa"
    document.querySelector(".min").innerHTML = "Temp Minima: " + dados.main.temp_min + "°C";
    document.querySelector(".max").innerHTML = "Temp Maxima: " + dados.main.temp_max + "°C";
    document.querySelector(".lat").innerHTML = "Latitude: " + dados.coord.lat;
    document.querySelector(".lon").innerHTML = "Longitude: " + dados.coord.lon;

};  

const city = async (location) => {
    let url;
    if (typeof location === 'object') {
        const { lat, lon } = location;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${chave}&lang=pt_br&units=metric`;
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${chave}&lang=pt_br&units=metric`;
    }

    fetch(url)
        .then(response => response.json())
        .then(dados => {
            displayData(dados);
        });
};


const getWeatherByLocation = () => {
    console.log("Obtendo localização...");
    navigator.geolocation.getCurrentPosition((position) => {
        console.log("Localização obtida com sucesso:", position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        city({ lat: latitude, lon: longitude });
    }, (error) => {
        console.error("Erro ao obter localização:", error);
    });
};
window.addEventListener("load", getWeatherByLocation);



