// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Initialize the tasks array by loading tasks from Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Function to load tasks from Local Storage and display them
    function loadTasks() {
      tasks.forEach(task => {
        createTaskElement(task);
      });
    }
  
    // Function to create and append a task element to the DOM
    function createTaskElement(taskText) {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      listItem.classList.add('task-item');
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
  
      // Attach remove functionality
      removeButton.onclick = function() {
        taskList.removeChild(listItem);
        removeTaskFromLocalStorage(taskText);
      };
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
    }
  
    // Function to save tasks to Local Storage
    function saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      tasks.push(taskText); // Add the task to the tasks array
      createTaskElement(taskText); // Add task to the DOM
      saveTasksToLocalStorage(); // Update Local Storage with new task
  
      taskInput.value = ''; // Clear the input field
    }
  
    // Function to remove a task from the tasks array and update Local Storage
    function removeTaskFromLocalStorage(taskText) {
      tasks = tasks.filter(task => task !== taskText);
      saveTasksToLocalStorage();
    }
  
    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
  
    // Attach event listener to task input field to add task on Enter key press
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Load tasks from Local Storage on page load
    loadTasks();
  });
  