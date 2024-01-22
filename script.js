//let city = "";
//let state = "";

//const url = `https://api.openweathermap.org/data/2.5/weather?q=Boise,Idaho&appid=${window.config.WEATHER_API_KEY}&units=imperial`;

const weather_display = document.querySelector('#weather-display')

function displayResults(data) {
    weather_display.innerHTML = `<h2>Current Temp: ${data.main.temp}&deg`
}

async function fetchData(city, state) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${window.config.WEATHER_API_KEY}&units=imperial`);
        if (response.ok) {
            const data = await response.json();
            console.log("results: ", data)
            displayResults(data)
        }
        else {
            weather_display.innerHTML = `<p>Whoops! Looks like we can't find any weather information based on that city and state, please spell out the city and state in their entirety.</p>`
        }
    }
    catch (error) {
        console.log("Error: ", error.message)
            weather_display.innerHTML = `<p>Whoops! Looks like we can't find any weather information based on that city and state, please spell out the city and state in their entirety.</p>`
    }
}

function submitForm(event) {
    event.preventDefault();
    let city = document.querySelector('#city').value;
    let state = document.querySelector('#state').value;
    fetchData(city, state);
}
