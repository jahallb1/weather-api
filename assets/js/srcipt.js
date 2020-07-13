
const apiAddress = "https://api.openweathermap.org/data/2.5/forecast?q="
const apiKey = "&appid=95383217fb8a071176b4486374305aee";
const apiUnits = "&units=imperial";
let cityNameEl = document.querySelector("#city");
let containerEl = document.querySelector(".container");
let forcastContainerEl = document.querySelector(".container-forecast");


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
                    oneApi(data.city.coord.lat, data.city.coord.lon, city);
                });
            } else {
                alert("Error ")
            }
        })

};

function oneApi(lat, lon, city) {
    let url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + apiKey + apiUnits;
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayWeather(data, city);
                    console.log(city);
                });
            } else {
                alert("Error ")
            }
        })
}

function displayWeather(data, city) {
    let temp = data.current.temp;
    let humid = data.current.humidity;
    let wind = data.current.wind_speed;
    let uvi = data.current.uvi;

    let cityEl = document.createElement("span");
    cityEl.textContent = " " + city;
    console.log(city);
    cityNameEl.appendChild(cityEl);

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
 function displayForecast(data,) {
     for (var i = 1; i < 6; i++) {
         let temp = data.list[i].main.temp;
         let date = (moment().add(i, "days").format("MM/DD//YYYY"));
         let icon = list[i].weather[0].icon
         let humid = data.list[i].main.humidity;

         let tempEl = document.createElement("p");
         tempEl.textContent = "Temp: " + temp;
         tempEl.addClass = "card card-body card-text"
         forcastContainerEl.appendChild(tempEl);

         let dateEl = document.createElement();
         dateEl.textContent = "<h3>" + date + "</h3>";
         dateEl.addClass = "card card-title";
         forcastContainerEl.appendChild(dateEl);

         let iconEl = document.createElement("img");
         iconEl.textContent = "<img " + "src=" +"http://openweathermap.org/img/wn/" + icon +".png";
         iconEl.addClass = "card card-body card-text"
         forcastContainerEl.appendChild(iconEl)

         let humidEl = document.createElement("");
         humidEl.textContent = "Humidity: " + humid;
         humidEl.addClass = "card card-body card-text";
         forcastContainerEl.appendChild(humidEl);
     }
         
         // add in rest of ids
         //add the elements

 }

 //

displayForecast();


// }

// function to make an api call
// cityValue with 2 ++ and pass through on 6
// parse the info- get today's weather and append that div
// loop, append the next 5 days of stuff maybe cards?
// clear search value after those functions 