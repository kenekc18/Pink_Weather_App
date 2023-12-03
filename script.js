let apiKey = "bba977f82c5a901f5b7af895b8ff33e5";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchbox = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");
const weathericon = document.querySelector(".weather-icon");
const weatherapp = document.querySelector(".main-weather");

async function CheckWeather(city){
    try{
        const response = await fetch( `${apiUrl}&appid=${apiKey}&q=${city}`);

        if (!response.ok) {
            error.style.display = 'block';
            weather.style.display = 'none';
            return;
        }
        
        var data = await response.json();

        let tempa = document.querySelector(".temprature");
        let city_name = document.querySelector(".city-name");
        let humidity = document.querySelector(".humidity0");
        let wind = document.querySelector(".wind0");

        tempa.innerHTML= Math.round(data.main.temp) + "°C";
        city_name.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = Math.round(data.wind.speed) + "km/h";

        if (data.weather[0].main == "Rain"){
            weathericon.src = "./images/rain.png";
        }else if(data.weather[0].main == "Clouds"){
            weathericon.src = "./images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weathericon.src = "./images/clear.png";
        }else if(data.weather[0].main == "Snow"){
            weathericon.src = "./images/winter.png";
        }else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "./images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weathericon.src = "./images/mist.png";
        }

        weatherapp.style.display= 'block';

    }catch(error){
        console.error(error);
    }
}


searchbtn.addEventListener('click', ()=>{
    CheckWeather(searchbox.value);
})


