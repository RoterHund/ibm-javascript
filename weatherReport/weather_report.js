

// Define a function named showweatherDetails
function showweatherDetails(event) {
    // Prevent the default behavior of the event, such as form submission
    event.preventDefault();

    // Initialize variables for city, apiKey, and apiUrl
    const city = document.getElementById('city').value;
    const apiKey = '144e2ffd80c14248d276e9351a6e97c2'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Use fetch API method to fetch weather details for the entered city
    fetch(apiUrl)
        .then(response => response.json()) // Convert the response to JSON format
        .then(data => {
            // Select the HTML element where weather information will be displayed
            const weatherInfo = document.getElementById('weatherInfo');
            // Update the HTML content with weather details
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                      <p>Temperature: ${data.main.temp} &#8451;</p>
                                      <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error); // Handle any errors that may occur during the fetch
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          }); 
}

// Attach an event listener to the 'weatherForm' element
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
