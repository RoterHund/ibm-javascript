// taskInput fetches the input element to enter new tasks
const taskInput = document.getElementById("taskInput");
// addTaskBtn fetches the button element responsible for adding tasks.
const addTaskBtn = document.getElementById("addTaskBtn");
// taskList retrieves the unordered list element where tasks are displayed.
const taskList = document.getElementById("taskList");
// clearCompletedBtn accesses the button used to clear completed tasks.
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
// Declare an empty array with a variable named tasks
let tasks = [];

// taskText variable to retrieve the value entered into the taskInput HTML element by the user, trimming any trailing whitespace.
// check if the taskText is not an empty string; if not, it creates a new task object with the entered text.
// Adds of this new task object using the push array method to the tasks array, representing the ToDo List.
// Resets the value of the taskInput field to an empty string after adding the task, clearing the input for the next task entry.
// Calls the displayTasks function to display entered todo tasks

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

// clear the existing content within the taskList element by setting its innerHTML to an empty string.
// iterates through the tasks array using forEach, creating a list item <li> for each task.
// constructs HTML content for each task by assigning it to li.innerHTML, 
    // which includes a checkbox, a label displaying the task text, and corresponding IDs.
// with the help of li.querySelector, 
    // it sets up an event listener for each checkbox within the task list <li> element. 
// When the checkbox state changes, it triggers the toggleTask() function
// appends the newly created list item containing the task details
    // in the To-Do List interface using the appendChild method.

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// toggles the completion status of a specific task in the tasks array based on the provided index.
// helps by selecting the checkbox regardless. 
// If selected, then it will mark that particular task as completed.
// calls the clearCompletedTasks function

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// filters the task array, which has the list of tasks entered by users.
// filters the tasks array to retrieve only the tasks that are not marked as completed (task.completed is false), returning a new array excluding completed tasks
// calls the displayTasks function to show the entered todo task after clicking the Add Task button.

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Perform addEventListener for addTask and clearCompletedTasks buttons 
// to listen for clicks after clicking the Add Task and Clear Completed buttons.
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// calls the displayTasks function to show the entered todo task 
// after clicking the Add Task button.

