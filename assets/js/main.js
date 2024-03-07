const apiKey = "3892b4ae5e0da289c2d4b77a717603f0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

     if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
     }
     else{
          document.querySelector(".error").style.display = "none";
          document.querySelector(".weather").style.display = "block";


          var data = await response.json();
          console.log(data);
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
          document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


          if(data.weather[0].main == "Clear"){
              weatherIcon.src = "assets/images/clear1.png";
          }
          else if (data.weather[0].main == "Clouds") {
              weatherIcon.src = "assets/images/clouds1.png";
           }
          else if (data.weather[0].main == "Drizzle") {
              weatherIcon.src = "assets/images/drizzle.png";
           }
          else if (data.weather[0].main == "Humidity") {
                weatherIcon.src = "assets/images/humidity1.png";
          }
          else if (data.weather[0].main == "Mist") {
               weatherIcon.src = "assets/images/mist.png";
           }
           else if (data.weather[0].main == "Rain") {
                  weatherIcon.src = "assets/images/raining.png";
           }
           else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "assets/images/snowman.png";
          }
          else if (data.weather[0].main == "Wind") {
              weatherIcon.src = "assets/images/wind-firm.png";
          }
          else if (data.weather[0].main == "Haze") {
              weatherIcon.src = "assets/images/haze.png";
          }

     }
}

searchBtn.addEventListener('click', () => {
     checkWeather(searchInput.value);
})



