const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskActions);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);

    taskInput.value = '';
  }
}

function handleTaskActions(e) {
  const target = e.target;
  const taskItem = target.closest('li');

  if (target.classList.contains('deleteButton')) {
    deleteTask(taskItem);
  } else if (taskItem) {
    toggleTask(taskItem);
  }
}
function createTaskElement(taskText) {
  const li = document.createElement('li');
  
  const taskTextElement = document.createElement('span');
  taskTextElement.classList.add('taskText');
  taskTextElement.textContent = taskText;
  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.textContent = 'Delete';
  
  li.appendChild(taskTextElement);
  li.appendChild(deleteButton);
  
  return li;
}

function toggleTask(taskItem) {
  taskItem.classList.toggle('completed');
}

function deleteTask(taskItem) {
  taskItem.remove();
}