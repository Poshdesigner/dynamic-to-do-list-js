// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get text and remove spaces

        // Check if empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Remove task when button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Attach button to list item, then attach list item to list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add click event for the Add Task button
    addButton.addEventListener('click', addTask);

    // Add Enter key functionality
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
