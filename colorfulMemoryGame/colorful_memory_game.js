// Initialization of arrays and variables using given code:

// colors array: This array holds distinct color values in strings, representing the colors for the cards in the memory match game.
// These colors create pairs for the game.
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

// cards array: Initialized by shuffling and attaching the 'colors' array,
// this 'cards' array holds the color values for the cards in the game.
// The shuffle function employs the Fisher-Yates algorithm to randomize the order of the colors
// and then duplicates these colors to create pairs, forming the set of cards for gameplay.
let cards = shuffle(colors.concat(colors));

// selectedCards: This variable acts as a temporary storage for the currently selected cards during the game.
// When a player clicks on a card, it gets added to this array to enable match comparisons.
let selectedCards = [];

// score: This variable tracks the player's score throughout the game.
// The score gets incremented whenever the player matches a pair of cards successfully.
// It's updated and displayed to reflect the player's progress and performance.
let score = 0;

// timeLeft: It represents the time remaining for the player to complete the game.
// Initially set to a specific duration, it counts down as the game progresses.
// When it reaches zero, the game ends.
let timeLeft = 30;

// gameInterval: This variable manages the game timer.
// It's utilized to control the countdown mechanism for the game's duration.
// The interval continuously decrements the 'timeLeft' variable, updating the displayed time
// and triggering the game's end when the time expires.
let gameInterval;

// DOM element selection:

// startbtn: This variable is assigned the HTML element with the ID 'startbtn'.
// It typically represents a button element intended to start or restart the game when clicked.
// This variable allows the JavaScript code to access and manipulate this specific button element.
const startbtn = document.getElementById('startbtn');

// gameContainer: This variable is assigned the HTML element with the ID 'game-container';
// it refers to a div or container element that dynamically generates cards for the memory match game.
// It allows JavaScript to manipulate or append child elements (cards) within this container.
const gameContainer = document.getElementById('game-container');

// scoreElement: This variable represents the HTML element with the ID 'score'.
// It is associated with a paragraph or span element displaying the player's score during the game.
// JavaScript can update the displayed score by manipulating this specific element's content.
const scoreElement = document.getElementById('score');

// timerElement: This variable refers to the HTML element identified by the ID 'timer'.
// It's presumably linked to a paragraph or span element that displays the time remaining for the player to complete the game.
// JavaScript can update this element to reflect the countdown and notify the player about the remaining time.
const timerElement = document.getElementById('timer');


// Create the generateCards() function responsible for dynamically creating the card elements within the game container
// based on the 'cards' array that holds color values for the cards. This function creates the card elements dynamically
// within the game-container div.

/**
 * Generates cards for the game interface based on the colors provided in the 'cards' array.
 */
function generateCards() {
    // Utilizes a 'for…of' loop to iterate over each element (color) in the 'cards' array.
    for (const color of cards) {
        // Inside the loop, it creates a new HTML div element using document.createElement('div').
        // This 'div' element represents a card in the game.
        const card = document.createElement('div');
        
        // It adds a class 'card' to the newly created 'div' element using card.classList.add('card').
        // This class might contain CSS styles or rules to style the card elements.
        card.classList.add('card');
        
        // It sets the 'dataset.color' attribute of the card element to the current color value from the 'cards' array.
        // This icon represents the card's hidden color until the player clicks it.
        card.dataset.color = color;
        
        // The text content of each card is initially set to a question mark ('?') using the card.textContent = '?'.
        // This represents that the color of the card is hidden until it's clicked by the player.
        card.textContent = '?';
        
        // Finally, the newly created card element is attached to the 'gameContainer' element as a child.
        // This action adds each card element to the game interface within the designated container.
        gameContainer.appendChild(card);
    }
}

/**
 * Shuffles the elements of an array.
 * 
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} The shuffled array.
 */
 function shuffle(array) {
    // Array parameter: It takes an array as an argument, which contains yet to be shuffled elements.
    
    // Shuffling process using loop through the array: 
    // The function starts by initiating a 'for' loop that iterates backward through the array 
    // starting from the last index (let i = array.length - 1; i > 0; i–).
    for (let i = array.length - 1; i > 0; i--) {
        
        // Random index selection: Within each iteration, 
        // it generates a random index 'j' using Math.floor(Math.random() * (i + 1)). 
        // This 'j' represents a random index within the array.
        const j = Math.floor(Math.random() * (i + 1));

        // Swapping elements: It then swaps the elements at the 'i' and 'j' indices 
        // using array destructuring assignment: [array[i], array[j]] = [array[j], array[i]]. 
        // This line efficiently swaps the values at positions 'i' and 'j' without requiring a temporary variable.
        [array[i], array[j]] = [array[j], array[i]];
    }

    // Continuing the loop: The loop continues until it finishes iterating 
    // through the entire array, shuffling elements along the way.
    
    // Returning the shuffled array: Once the loop is complete, the function 
    // returns the array with its elements rearranged into a random order.
    return array;
}

// The handleCardClick(event) function manages the logic when a user clicks the card in the memory match game.
// Include given code after the shuffle() function.
function handleCardClick(event) {
    // Event Target using const card = event.target;:
    // This line retrieves the element that triggered the event (in this case, a clicked card) 
    // and assigns it to the 'card' variable.
    const card = event.target;

    // Checking the card: 
    // if (!card.classList.contains('card') || card.classList.contains('matched')) { return; }
    // This 'if' statement checks whether the clicked element is a card and if it's already matched.
    // If either condition is true:
    // - If the element is not a card or has already matched, the function returns early, 
    // ignoring any further actions for this particular click.
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }

    // Revealing the card:
    // card.textContent = card.dataset.color;:
    // It sets the text content of the clicked card to the value stored in its 'dataset.color'. 
    // This action reveals the card's color by changing the text content to the color value.
    card.textContent = card.dataset.color;

    // card.style.backgroundColor = card.dataset.color;:
    // Changes the card's background color to match the revealed color.
    card.style.backgroundColor = card.dataset.color;

    // Handling selected cards:
    // selectedCards.push(card);:
    // Adds the clicked card to the 'selectedCards' array, 
    // indicating that it's one of the cards currently chosen by the player.
    selectedCards.push(card);

    // Checking for matches:
    // if (selectedCards.length === 2) { setTimeout(checkMatch, 500); }:
    // Checks if two cards have been selected. 
    // If two cards have been chosen, it uses 'setTimeout()' to delay the execution of the 'checkMatch()' function 
    // by 500 milliseconds. This brief delay allows the player to see both selected cards 
    // before their comparison briefly.
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// The checkMatch() function evaluates whether the two selected cards match each other in the memory match game.
// Include given code after handleCardClick() function.
function checkMatch() {
    // Destructuring selected cards:
    // const [card1, card2] = selectedCards;:
    // This line uses array destructuring to assign the first two elements of the 'selectedCards' array 
    // to 'card1' and 'card2'. These variables represent the two cards selected by the player for comparison.
    const [card1, card2] = selectedCards;

    // Comparing card colors:
    // if (card1.dataset.color === card2.dataset.color) { ... }:
    // This checks if the color value stored in the 'dataset.color' attribute of 'card1' matches the color value of 'card2'.
    if (card1.dataset.color === card2.dataset.color) {
        // If the colors match:
        // It adds the class 'matched' to both cards using 'classList.add('matched')', 
        // marking them as matched pairs in the game.
        card1.classList.add('matched');
        card2.classList.add('matched');

        // Increases the 'score' by 2 points, as the player successfully matched a pair.
        score += 2;

        // Updates the 'scoreElement.textContent' to display the updated score to the player.
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // Handling non-matching cards:
        // If the colors of the two selected cards don't match, it resets the text content of both cards to a question mark ('?'), hiding their colors again.
        card1.textContent = '?';
        card2.textContent = '?';

        // Sets the background color of both cards to a default color ('#ddd'), providing a visual cue that the selected cards didn't match.
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }

    // Resetting selection:
    // selectedCards = [];:
    // It clears the 'selectedCards' array to reset it for the next set of card selections. 
    // This action ensures the player can select two new cards after the comparison.
    selectedCards = [];
}

// The startGame() Function is a pivotal part of initializing and starting the memory match game.
// Include given code after checkMatch() function.
function startGame() {
    // Setting initial game state:

    // Initializes the 'timeLeft' variable to 30 seconds, setting the duration for the game.
    let timeLeft = 30;

    // Disables the 'startbtn' button to prevent multiple game initiations simultaneously,
    // ensuring one game is in progress at a time.
    startbtn.disabled = true;

    // Resets the 'score' variable to zero, initializing it for the new game.
    score = 0;

    // Updates the displayed score to show that it's reset to zero for the new game.
    scoreElement.textContent = `Score: ${score}`;

    // Starting the game timer:

    // Initiates the game timer, counting down from the specified 'timeLeft' duration.
    startGameTimer(timeLeft);

    // Preparing cards and game elements:

    // Shuffles the 'colors' array and duplicates it to create pairs for the game cards.
    cards = shuffle(colors.concat(colors));

    // Clears the 'selectedCards' array to prepare for new card selections in the upcoming game.
    selectedCards = [];

    // Clears the game container, removing any existing cards from previous games.
    gameContainer.innerHTML = '';

    // Generates a new set of cards within the game container by calling the 'generateCards()' function,
    // creating a fresh game layout for the player.
    generateCards();

    // Enabling card click event:

    // Adds an event listener to the game container, enabling card clicks and triggering the 'handleCardClick()' function
    // to manage the gameplay when cards are clicked.
    gameContainer.addEventListener('click', handleCardClick);
}

// The startGameTimer(timeLeft) function manages the game timer, updating the displayed time
// and handling the end of the game when the timer reaches zero.
// Include after startGame() Function.
function startGameTimer(timeLeft) {
    // Initial display:

    // Sets the initial display of the timer to show the 'timeLeft' value,
    // indicating the starting time remaining for the game.
    timerElement.textContent = `Time Left: ${timeLeft}`;

    // Interval setup:

    // Initiates an interval that triggers a function every second (1000 milliseconds)
    // to update the timer.
    gameInterval = setInterval(() => {
        // Countdown:

        // Decrements the 'timeLeft' variable every second within the interval,
        // simulating the countdown by reducing the remaining time.
        timeLeft--;

        // Updating displayed time:

        // Updates the displayed time on the HTML element ('timerElement')
        // to reflect the updated 'timeLeft' value after each decrement.
        timerElement.textContent = `Time Left: ${timeLeft}`;

        // End of game:

        // Checks if the remaining time reaches zero.
        if (timeLeft === 0) {
            // If 'timeLeft' equals zero:

            // Stops the interval, effectively ending the timer from counting down further.
            clearInterval(gameInterval);

            // This line is redundant as it re-declares 'timeLeft' within the scope of this block,
            // resetting it to 30, but it does not affect the 'timeLeft' used in the interval.

            // Displays an alert indicating that the game is over because the time limit has been reached.
            alert('Game Over!');

            // Re-enables the 'startbtn' button, allowing the player to start a new game
            // after the current one has ended.
            startbtn.disabled = false;
        }
    }, 1000);
}

// Event listeners: To listen, click event startbtn adds an event listener to the 'startbtn' element,
// triggering the 'startGame' function when the button is clicked.
// Include the given code at the end of javaScript file.

// Adds an event listener to the 'startbtn' element, triggering the 'startGame' function when the button is clicked.
startbtn.addEventListener('click', startGame);
