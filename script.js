// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Define the addTask function
    function addTask() {
      // Retrieve and trim the task input value
      const taskText = taskInput.value.trim();
  
      // Check if taskText is not empty
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      // Create a new li element
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      listItem.classList.add('task-item'); // Add class to li element for styling
  
      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn'); // Add class to remove button for styling
  
      // Assign the remove functionality to the remove button
      removeButton.onclick = function() {
        taskList.removeChild(listItem);
      };
  
      // Append the remove button to the li element
      listItem.appendChild(removeButton);
  
      // Append the li element to the task list
      taskList.appendChild(listItem);
  
      // Clear the input field
      taskInput.value = '';
    }
  
    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
  
    // Attach event listener to the task input field to add tasks on Enter key press
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
  });
  