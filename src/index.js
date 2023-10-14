document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting and page reloading

    const taskInput = document.getElementById('new-task-description');
    const taskText = taskInput.value;

    if (taskText) { // Ensure the input is not empty
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      // Optionally add a delete button or other functionality to the taskItem

      taskList.appendChild(taskItem); // Append the task to the list

      taskInput.value = ''; // Clear the input field
      taskItem.innerHTML = `${taskText} <button class="delete-button">Delete</button>`;
const deleteButton = taskItem.querySelector('.delete-button');
deleteButton.addEventListener('click', function () {
  taskList.removeChild(taskItem);
});

    }
  });
});

