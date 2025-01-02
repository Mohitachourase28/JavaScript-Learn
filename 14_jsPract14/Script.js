/**#74 11:07:07 Fetch data from an API ↩️
 * fetch = Function used for making HTTP requests to fetch resources.
 *         (JSON style, data, images, files)
 *         Simplifies asynchronous data fetching in JavaScript and 
 *         used for interacting with APIs to retrieve and send 
 *         data asynchronously over the web.
 *         fetch(url, {options})

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default; // Corrected path
        const imgElement = document.getElementById("pokemonSprite");

        if (pokemonSprite) {
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        } else {
            throw new Error("Sprite not found for the given Pokémon");
        }
    } catch (error) {
        console.error(error);
        alert("Error: " + error.message); // Optional: Add user feedback
    }
}
 */

/**#75 11:21:22 ⭐ Weather App project ☀️ 
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "ba5fd7d9b704da829128c361e7b3a1a7";

weatherForm.addEventListener("submit", async (event) => {
  //forms have default Behavior where they'll refresh the page we would like to prevent that
  //let's take prevent default method to prevent
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please Enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  // console.log(response);
  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }
  return await response.json();
}

function displayWeatherInfo(data) {
  // console.log(data);
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  card.textContent = "";
  card.style.display= "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  cityDisplay.classList.add("cityDisplay")
  card.appendChild(cityDisplay);

  tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
  tempDisplay.classList.add("tempDisplay");
  card.appendChild(tempDisplay);

  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  humidityDisplay.classList.add("humidityDisplay");
  card.appendChild(humidityDisplay);

  descDisplay.textContent = description;
  descDisplay.classList.add("descDisplay");
  card.appendChild(descDisplay);

  weatherEmoji.textContent = getWeatherEmoji(id);
  weatherEmoji.classList.add("weatherEmoji");
  card.appendChild(weatherEmoji);

}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 || weatherId < 300):
        return "⛈️"; 
        case (weatherId >= 300 || weatherId < 400):
        return "🌧️"; 
        case (weatherId >= 500 || weatherId < 600):
        return "🌧️";
        case (weatherId >= 600 || weatherId < 700):
        return "❄️";
        case (weatherId >= 700 || weatherId < 800):
        return "🌫️";
        case (weatherId === 800):
        return "🌞";
        case (weatherId >= 801 || weatherId < 810):
            return "☁️";
        default:
            return "❔";
    }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
*/