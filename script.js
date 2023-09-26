
let searchBtn = document.getElementById('search-btn');

function locateUser () {
    navigator.geolocation.getCurrentPosition(success => {
        const coords = success.coords;
        const lat = coords.latitude;
        const long = coords.longitude;
        console.log(lat);
        console.log(long);
        addMessage (`Your current location is coord (${lat}, ${long})`)

        fetch(`'https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=c7e58fa261b1b2c563605a5cbb81b672'`);
            

    })
    ;
}
searchBtn.addEventListener('click', locateUser);




// showCurrentWeather();
// console.log(showCurrentWeather());



/* Util function */
const cityName = document.getElementById('cityName');
function addMessage (message) {
    const pElement = document.createElement('p');
    pElement.innerHTML = message;
    cityName.appendChild(pElement);
}