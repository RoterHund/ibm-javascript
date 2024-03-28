// Function to fetch and display recommendation results
function displayRecommendations() {
    // Fetch data from the JSON file
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        // Log the fetched data to the console
        console.log(data);
        
        // Process the data and extract relevant information
        const recommendations = data.recommendations;
        
        // Display recommendation results on the webpage
        const resultsContainer = document.getElementById('recommendationResults');
        recommendations.forEach(recommendation => {
            const placeName = recommendation.name;
            const placeDetails = recommendation.details;
            
            // Create HTML elements to display recommendation
            const recommendationElement = document.createElement('div');
            recommendationElement.classList.add('recommendation');
            recommendationElement.innerHTML = `
                <h3>${placeName}</h3>
                <p>${placeDetails}</p>
            `;
            
            // Append recommendation element to results container
            resultsContainer.appendChild(recommendationElement);
        });
    })
    .catch(error => {
        // Handle any errors that occur during fetch request
        console.error('Error fetching data:', error);
    });
}

// Call the function to display recommendation results
displayRecommendations();

// Function to handle keyword search
function handleSearch() {
    // Retrieve keyword entered by the user
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    
    // Check if the keyword matches any predefined keywords or variations
    if (keyword === 'beach' || keyword === 'beaches') {
        // Display beach-related results
        displayBeachResults();
    } else if (keyword === 'temple' || keyword === 'temples') {
        // Display temple-related results
        displayTempleResults();
    } else if (keyword === 'country' || keyword === 'countries') {
        // Display country-related results
        displayCountryResults();
    } else {
        // Display a message indicating no matching results found
        displayNoResultsMessage();
    }
}

// Function to display beach-related results
function displayBeachResults() {
    // Logic to display beach-related results
}

// Function to display temple-related results
function displayTempleResults() {
    // Logic to display temple-related results
}

// Function to display country-related results
function displayCountryResults() {
    // Logic to display country-related results
}

// Function to display a message indicating no matching results found
function displayNoResultsMessage() {
    // Logic to display a message indicating no matching results found
}

// Add event listener to the Search button
document.getElementById('searchButton').addEventListener('click', handleSearch);

// Function to fetch recommendations based on keyword
function fetchRecommendations(keyword) {
    // Fetch data from JSON file or external API
    fetch('recommendations.json')
        .then(response => response.json())
        .then(data => {
            // Filter recommendations based on keyword
            const filteredRecommendations = data.recommendations.filter(item => item.keyword === keyword);
            
            // Display recommendations
            displayRecommendations(filteredRecommendations);
        })
        .catch(error => {
            console.error('Error fetching recommendations:', error);
        });
}

// Function to display recommendations on the webpage
function displayRecommendations(recommendations) {
    // Get the element where recommendations will be displayed
    const recommendationsContainer = document.getElementById('recommendations');

    // Clear previous recommendations
    recommendationsContainer.innerHTML = '';

    // Loop through each recommendation and create HTML elements to display them
    recommendations.forEach(recommendation => {
        const recommendationElement = document.createElement('div');
        recommendationElement.classList.add('recommendation');

        // Create image element
        const imageElement = document.createElement('img');
        imageElement.src = recommendation.image;
        imageElement.alt = recommendation.name;
        recommendationElement.appendChild(imageElement);

        // Create heading element
        const headingElement = document.createElement('h2');
        headingElement.textContent = recommendation.name;
        recommendationElement.appendChild(headingElement);

        // Create description element
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = recommendation.description;
        recommendationElement.appendChild(descriptionElement);

        // Append recommendation element to recommendations container
        recommendationsContainer.appendChild(recommendationElement);
    });
}

// Example usage: Fetch recommendations for the keyword "beach"
fetchRecommendations('beach');


// Function to clear the results
function clearResults() {
    // Get the element where results are displayed
    const resultsContainer = document.getElementById('results');

    // Clear the contents of the results container
    resultsContainer.innerHTML = '';
}

// Example: Attach event listener to clear button
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearResults);

// Function to display current time in the specified country
function displayCountryTime(country) {
    // Define options for formatting the time
    const options = {
        timeZone: country, // Specify the time zone of the country
        hour12: true, // Use 12-hour format
        hour: 'numeric', // Display the hour numerically
        minute: 'numeric', // Display the minute numerically
        second: 'numeric' // Display the second numerically
    };

    // Get the current time in the specified country's time zone
    const currentTime = new Date().toLocaleTimeString('en-US', options);

    // Display the current time
    console.log("Current time in", country + ":", currentTime);
}

// Example: Display current time in New York
displayCountryTime('America/New_York');
