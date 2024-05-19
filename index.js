document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    addBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodo(todoText);
            todoInput.value = '';
        }
    });
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const todoText = todoInput.value.trim();
            if (todoText !== '') {
                addTodo(todoText);
                todoInput.value = '';
            }
        }
    });
    function addTodo(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <div>
                <input type="checkbox" class="todo-checkbox">
                <button class="delete-btn">:x:</button>
            </div>
        `;
        todoList.appendChild(li);
        const checkbox = li.querySelector('.todo-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                li.querySelector('span').style.textDecoration = 'line-through';
            } else {
                li.querySelector('span').style.textDecoration = 'none';
            }
        });
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        // Autoscrolling
        todoList.scrollTop = todoList.scrollHeight;
    }
});









