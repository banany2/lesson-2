let task = document.getElementById('task-list')
let newTaskInput = document.getElementById('newTaskInput')
let addBtn = document.getElementById('add-task')

function addTask() {
    const taskText = newTaskInput.value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.className = 'delete-btn';
    taskItem.appendChild(deleteBtn);
    task.appendChild(taskItem);
    newTaskInput.value = '';
}

addBtn.addEventListener('click', addTask);
task.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.parentNode;
        task.removeChild(taskItem);
    }
})
