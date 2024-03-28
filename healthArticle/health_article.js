var xhr = new XMLHttpRequest();
var url = './health_article.json';

// Prepare a GET request to the specified URL asynchronously
xhr.open('GET', url, true);

// The open method configures an XHR request with the following parameters:
// 'GET': Specifies the HTTP method used for the request (in this case, a GET request).
// URL: Represents the URL from where you will fetch the data.
// True: Indicates if the request is asynchronous (true) or synchronous (false).
// In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.

// Response type specification
// Inform the XMLHttpRequest object that the expected response from the server should be in JSON format.
xhr.responseType = 'json';

// Handling the 'onload' event
// Define what should happen when the data is successfully loaded 
// using xhr.onload = function() { ... } function.
xhr.onload = function () {
    // Retrieve the articles array from the JSON response.
    var articles = xhr.response.articles;
    // Retrieve the HTML element with the ID 'articles' where the fetched content will be displayed.
    var articlesDiv = document.getElementById('articles');
    // Iterating through articles and constructing HTML
    // Iterate health data to fetch on the front page using loops.
    articles.forEach(function (article) {
        // Create a div element dynamically for each article
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article'); // Add 'article' class to the div
        // Create and populate HTML elements with corresponding content from the fetched JSON data
        var title = document.createElement('h2');
        title.textContent = article.title;
        var description = document.createElement('p');
        description.textContent = article.description;
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
        var waysList = document.createElement('ul');
        // Iterate through 'ways_to_achieve' array and create list items
        article.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
        var benefitsList = document.createElement('ul');
        // Iterate through 'benefits' array and create list items
        article.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        // Append created elements to the 'articleDiv'
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        // Append the 'articleDiv' to the 'articlesDiv' to display each article's details on the webpage
        articlesDiv.appendChild(articleDiv);
    });
};



// Sending the request
// Send the XMLHttpRequest to fetch the data from the specified URL
xhr.send();
