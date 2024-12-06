// Replace these with your actual latitude, longitude, and API key
const lat = ''; // Example: Latitude for 
const lon = ''; // Example: Longitude for 
const apiKey = ''; //  API key

// Construct the API URL
const apiUrl = ``;

// Fetch the weather data
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Display the weather data in the console
    console.log(`Weather in ${data.name}:`);
    console.log(`Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`); // Convert from Kelvin to Celsius
    console.log(`Description: ${data.weather[0].description}`);
    console.log(`Humidity: ${data.main.humidity}%`);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
