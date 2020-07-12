
const apiAddress = "https://api.openweathermap.org/data/2.5/forecast?q="
const apiKey = "&appid=95383217fb8a071176b4486374305aee";
const apiUnits = "&units=imperial";
let cityNameEl = document.querySelector("#city-name");
let containerEl = document.querySelector(".container");


$("#btn-primary").on("click", function () {

    //addToList(cityValue);
    //function call
    //$("#city-name").val("");
    getWeather();
})

function addToList(cityValue) {
    var item = $("<li>").addClass("list-group-item").text(cityValue);
    $("#listOfCities").append(item);
};

function getWeather() {
    event.preventDefault;
    let city = $("#city-name").val().trim();
    let apiUrl = apiAddress + city + apiKey + apiUnits;
    console.log(city);
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    oneApi(data.city.coord.lat, data.city.coord.lon);
                });
            } else {
                alert("Error ")
            }
        })

};

function oneApi(lat, lon) {
    let url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + apiKey + apiUnits;
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayWeather(data, data.city);
                });
            } else {
                alert("Error ")
            }
        })
}

function displayWeather(data, city) {
    let cityName = data.city;
    let temp = data.current.temp;
    let humid = data.current.humidity;
    let wind = data.current.wind_speed;
    let uvi = data.current.uvi;

    let cityNameEl = document.createElement("span");
    cityNameEl.textContent = cityName;
    containerEl.appendChild(cityNameEl);

    let tempEl = document.createElement("p");
    tempEl.textContent = "Temperature " + temp;
    containerEl.appendChild(tempEl);

    let humidEl = document.createElement("p");
    humidEl.textContent = "Humidity " + humid;
    containerEl.appendChild(humidEl);

    let windEl = document.createElement("p");
    windEl.textContent = "Wind Speed " + wind;
    containerEl.appendChild(windEl);

    let uviEl = document.createElement("p");
    uviEl.textContent = "UV Index " + uvi;
    containerEl.appendChild(uviEl);



}
function displayForecast() {
    

}




// }

// function to make an api call
// cityValue with 2 ++ and pass through on 6
// parse the info- get today's weather and append that div
// loop, append the next 5 days of stuff maybe cards?
// clear search value after those functions 