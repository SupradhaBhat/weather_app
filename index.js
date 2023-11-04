const apiKey = "9bf03420bdd63f9fdd28137dddbb02a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        var store = await response.json();
        

        document.querySelector(".city").innerHTML = store.name;
        document.querySelector(".temp").innerHTML = Math.round(store.main.temp) + "°C";
        document.querySelector(".temp_min").innerHTML = Math.round(store.main.temp_min) + "°C";
        document.querySelector(".temp_max").innerHTML = Math.round(store.main.temp_max) + "°C";
        document.querySelector(".humidity").innerHTML = store.main.humidity + "%";
        document.querySelector(".wind").innerHTML = store.wind.speed + " km/h";

        document.querySelector(".weather").style.display = "block";

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + city + "')";

    } catch (error) {
        alert("Sorry, we could not find this location"); 
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})