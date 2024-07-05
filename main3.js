const form = document.querySelector('.js--form');
const todosWrapper = document.querySelector('.js--todos-wrapper');
const input = document.querySelector('.js--form__input');

document.addEventListener('DOMContentLoaded', loadTodos);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = input.value;
    if (taskText !== '') {
        addTodo(taskText);
        saveTodoToLocalStorage(taskText);
        input.value = '';
    }
});

function addTodo(text) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        todoItem.classList.toggle('todo-item--checked');
    });

    const description = document.createElement('span');
    description.classList.add('todo-itemdescription');
    description.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-item__delete');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.addEventListener('click', () => {
        todoItem.remove();
        removeTodoFromLocalStorage(text);
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(description);
    todoItem.appendChild(deleteBtn);

    todosWrapper.appendChild(todoItem);
}

function saveTodoToLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodoFromLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(item => item !== todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodo(todo));
}