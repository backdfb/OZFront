document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#toDo');
    const addButton = document.querySelector('#add-button');
    const todoList = document.querySelector('#todo-list');
    const alert = document.querySelector('#alert');

    // 로컬 스토리지에서 할 일 로드
    const storedTodos = localStorage.getItem('todos');
    const todos = storedTodos ? JSON.parse(storedTodos) : [];

    const addTodo = () => {
        if (input.value !== '') {
            const item = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const text = document.createElement('span');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '지우기';

            text.textContent = input.value;
            input.value = '';

            item.appendChild(checkbox);
            item.appendChild(text);
            item.appendChild(deleteButton);
            todoList.appendChild(item);

            checkbox.addEventListener('change', (event) => {
                if (event.currentTarget.checked) {
                    text.style.textDecoration = 'line-through';
                } else {
                    text.style.textDecoration = 'none';
                }
                saveTodos(); // 변경된 할 일 목록을 저장
            });

            deleteButton.addEventListener('click', (event) => {
                todoList.removeChild(event.currentTarget.parentNode);
                saveTodos(); // 변경된 할 일 목록을 저장
            });

            todos.push(text.textContent); // 새로운 할 일을 배열에 추가
            saveTodos(); // 변경된 할 일 목록을 저장
            alert.textContent = '';
        } else {
            alert.textContent = '입력부터 좀 하시지?';
        }
    };

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos)); // 할 일 목록을 로컬 스토리지에 저장
    };

    const loadTodos = () => {
        todoList.innerHTML = ''; // 기존의 할 일 목록을 비우기
        todos.forEach((todo) => {
            const item = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const text = document.createElement('span');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '지우기';

            text.textContent = todo;

            item.appendChild(checkbox);
            item.appendChild(text);
            item.appendChild(deleteButton);
            todoList.appendChild(item);

            checkbox.addEventListener('change', (event) => {
                if (event.currentTarget.checked) {
                    text.style.textDecoration = 'line-through';
                } else {
                    text.style.textDecoration = 'none';
                }
                saveTodos(); // 변경된 할 일 목록을 저장
            });

            deleteButton.addEventListener('click', (event) => {
                todoList.removeChild(event.currentTarget.parentNode);
                const index = todos.indexOf(text.textContent);
                if (index > -1) {
                    todos.splice(index, 1); // 삭제된 할 일을 배열에서 제거
                    saveTodos(); // 변경된 할 일 목록을 저장
                }
            });
        });
    };

    addButton.addEventListener('click', addTodo);

    input.addEventListener('keypress', (event) => {
        const ENTER = 13;
        if (event.keyCode === ENTER) {
            addTodo();
        }
    });

    loadTodos(); // 페이지 로드 시 저장된 할 일 목록을 불러옴
});
