document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskListUl = document.getElementById('task-list-ul');
  
    addTaskButton.addEventListener('click', addTask);
    taskListUl.addEventListener('click', handleTaskActions);
  
    function addTask() {

      const taskText = taskInput.value.trim();
      if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="task-text">${taskText}</span>
          <div class="task-buttons">
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
          </div>
        `;
        taskListUl.appendChild(li);
        taskInput.value = '';
      }
    }
  
    function handleTaskActions(event) {
      const button = event.target;
      const li = button.closest('li');
  
      if (button.classList.contains('complete-button')) {
        li.classList.toggle('completed');
      } else if (button.classList.contains('delete-button')) {
        li.remove();
      }
    }
  });
  