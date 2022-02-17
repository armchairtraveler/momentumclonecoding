const API_KEY = "0ed6477efc5a54df3f63e0e4a294d4f2";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)} ℃`;
        city.innerText = data.name;
        weatherIcon(data.weather[0].id);});
    }
    
function onGeoError() {
    alert("Can't find you. No weather for you.")
    }
    
function weatherIcon(weather) {
    const icon = document.querySelector("#weather span:first-child i");
    const weatherId = weather;
    if (200 <= weatherId && weatherId <= 232) {
        icon.className = "fa-solid fa-bolt";
    } else if (300 <= weatherId && weatherId <= 321) {
        icon.className = "fa-solid fa-cloud-rain";
    } else if (500 <= weatherId && weatherId <= 531) {
        icon.className = "fa-solid fa-cloud-showers-heavy";
    } else if (600 <= weatherId && weatherId <= 622) {
        icon.className = "fa-solid fa-snowflake";
    } else if (701 <= weatherId && weatherId <= 781) {
        icon.classNmae = "fa-solid fa-smog";
    } else if ( weatherId === 800) {
        icon.className = "fa-solid fa-sun";
    } else if ( 801<= weatherId && weatherId <= 804) {
        icon.className ="fa-solid fa-cloud";
    } else {
        icon.className = "";
    }
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);