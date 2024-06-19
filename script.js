document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    taskInput.value = '';
}
