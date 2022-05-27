const API_KEY = "c3f5470a4d9da2691cdab4ab8ff29f98";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;        
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);