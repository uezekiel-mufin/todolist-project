import './style.css';
import NewTodo from '../modules/crud.js';

const form = document.getElementById('form');
export const todo = document.querySelector('.add_todo');
export const todoUl = document.getElementById('todoList');
export const todoListss = JSON.parse(localStorage.getItem('todos')) || [];
const deleteButton = document.getElementById('clear_button');

// const todoLists = [
//   {
//     id: 1,
//     description: 'Connect to microverse morning call',
//     completed: true,
//   },
//   {
//     id: 2,
//     description: 'connect to microverse stand up call',
//     completed: false,
//   },
//   {
//     id: 3,
//     description: 'Prepare breakfast',
//     completed: false,
//   },
//   {
//     id: 4,
//     description: 'watch a youtube video on webpack',
//     completed: true,
//   },
//   {
//     id: 5,
//     description: 'have my bath',
//     completed: true,
//   },
// ];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = new NewTodo(todo.value);
  newTodo.add();
  localStorage.setItem('todos', JSON.stringify(todoListss));
});

// functionality to clear all the todos
// deleteButton.addEventListener

const displayTodos = () => {
  for (let i = 0; i < todoListss.length; i += 1) {
    const item = todoListss[i];
    const itemContainer = document.createElement('li');
    itemContainer.className = 'todo';
    const todoTitle = document.createElement('h3');
    todoTitle.className = 'todo_title';
    todoTitle.innerText = item.description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = item.completed;
    checkBox.className = 'checkbox';
    const option = document.createElement('span');
    option.className = 'material-symbols-outlined';
    option.innerText = 'more_vert';

    const div = document.createElement('div');
    div.appendChild(checkBox);
    div.appendChild(todoTitle);
    div.className = 'todo_right';

    itemContainer.appendChild(div);
    itemContainer.appendChild(option);

    todoUl.appendChild(itemContainer);
  }
};

window.addEventListener('load', () => {
  displayTodos();
  return false;
});
