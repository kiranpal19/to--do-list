const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

function addTask() {
    const taskText = newTaskInput.value.trim();
    
    if (taskText === '') return;
    
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskSpan);

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskSpan.classList.add('completed');
        } else {
            taskSpan.classList.remove('completed');
        }
    });

    taskList.appendChild(taskItem);
    newTaskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

newTaskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
