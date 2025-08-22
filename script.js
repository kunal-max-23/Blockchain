const apikey = "b9052bffb672afb48f55e48cb100663c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericn = document.querySelector(".weather-icon");


async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    const data = await response.json();

    if (response.status === 404 || data.cod === "404") {
        alert("City not found!");
        return;
    }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  

    document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
searchbox.addEventListener("keydown",function(event){
    if(event.key==="enter"){
        searchbtn.click();
    }
});     