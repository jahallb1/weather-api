
$("#btn-primary").on("click", function() {

    //addToList(cityValue);
    //function call
    //$("#city-name").val("");
    getWeather();
})

function addToList(cityValue){
    var item = $("<li>").addClass("list-group-item").text(cityValue);
    $("#listOfCities").append(item);
};

function getWeather() {
    event.preventDefault;
    var city = $("#city-name").val().trim();
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=95383217fb8a071176b4486374305aee";
    console.log(city);
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                });
            } else {
                alert("Error " )
            }
        })
    
};

function secondCall () {
    var cityNameEl = document.createElement("span");
    cityNameEl.setAttribute();
    

    
}

// function to make an api call
// cityValue with 2 ++ and pass through on 6
// parse the info- get today's weather and append that div
// loop, append the next 5 days of stuff maybe cards?
// clear search value after those functions 