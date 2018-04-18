(function () {
    const apiKey = "cf4fc1f94c8da0ae6532afeb64e38115";
    let baseReqURL = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139";
    let payload = null;

    let lat = "";
    let lon = "";
    let currentUnits = "F";
    let currentTemp = null;
    let httpRequest;

    // Save selector references to variables   
    let location = document.querySelector("#location");
    let country = document.querySelector("#country");
    let tempContainer = document.querySelector("#tempContainer");
    let temp = document.querySelector("#temp");
    let units = document.querySelector("#units");
    let condition = document.querySelector("#condition");
    let iconContainer = document.querySelector("#iconContainer");
    let icon = document.querySelector("#icon");

    function success(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = handleResponse;
        httpRequest.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}`, true);
        httpRequest.send();
    }

    // This function will run if the AJAX call is unsuccessful.
    function failure() {
        console.log("Geolocation failed! [Insert sad face emoticon]");
    }

    function handleResponse() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                showWeatherData();
            } else {
                alert("Error! Try again.");
            }
        } else {

        }
    }

    // Fill in the data containers on the page with corresponding
    // text from the corresponding JSON payload returned from AJAX
    // call.
    function showWeatherData() {
        //convert string response to JSON and save to variable
        payload = JSON.parse(httpRequest.responseText);

        //convert temp from K to default unit, F
        currentTemp = Math.round((9 / 5) * (payload.main.temp - 273) + 32);

        location.innerHTML = payload.name + ", " + payload.sys.country;
        showTemp();
        condition.innerHTML = payload.weather[0].main;
        showIcon();
    }

    function convertUnits() {
        if (currentUnits === "F") {
            currentUnits = "C";
            // C = 5/9 (° F - 32)
            currentTemp = Math.round(payload.main.temp - 273);
            showTemp();
        } else {
            currentUnits = "F";
            currentTemp = Math.round((9 / 5) * (payload.main.temp - 273) + 32);
            showTemp();
        }
    }

    function showTemp() {
        temp.innerHTML = currentTemp;
        units.innerHTML = currentUnits;
    }

    function showIcon() {
        let iconClass = "wi-owm-" + payload.weather[0].id;
        icon.classList.add(iconClass);
    }

    units.addEventListener("click", convertUnits);

    navigator.geolocation.getCurrentPosition(success, failure);
})();