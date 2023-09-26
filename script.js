const temperature = document.getElementsByClassName('temperture');

let searchBtn = document.getElementById('search-btn');

navigator.geolocation.getCurrentPosition(success);


function success(position) {
        const coords = position.coords;
        let lat = coords.latitude;
        let long = coords.longitude;
        // console.log(lat);
        // console.log(long);
        // addMessage (`Your current location is coord (${lat}, ${long})`)   

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c7e58fa261b1b2c563605a5cbb81b672`)
        // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=c7e58fa261b1b2c563605a5cbb81b672`)
            .then((response => {   
                // console.log(response);
                return response.json()
            }))
                
            .then((data => {
                console.log(data);
                let temp = data.main.temp;
                let city = data.name;
                let hum = data.main.humidity;
                let wind = data.wind.speed;

                const temperature = document.getElementsByClassName('temp');
                const cityName = document.getElementsByClassName('city-name');
                const humidity = document.getElementsByClassName('humidity');
                const windSpeed = document.getElementsByClassName('wind-speed');

                temperature[0].innerHTML = Math.floor(temp - 272) + 'ºc';
                cityName[0].innerHTML = city;
                humidity[0].innerHTML = hum +'%';
                windSpeed[0].innerHTML = wind +'km/h'

                console.log(data.weather[0]);
                // console.log(temperature);
                // console.log(cityName);




                return data.main
                

                
            }))


            
            

};


// searchBtn.addEventListener('click', locateUser);




// showCurrentWeather();
// console.log(showCurrentWeather());



/* Util function */
const cityName = document.getElementById('cityName');
function addMessage (message) {
    const pElement = document.createElement('p');
    pElement.innerHTML = message;
    cityName.appendChild(pElement);
}