/* eslint-disable import/no-cycle */
import './style.css';
import NewTodo from '../modules/crud.js';
import createTodo from '../modules/create.js';

const form = document.getElementById('form');
export const todo = document.querySelector('.add_todo');
export const todoUl = document.getElementById('todoList');
export const todoListss = JSON.parse(localStorage.getItem('todos')) || [];
// const deleteButton = document.getElementById('clear_button');

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
  form.reset();
});

// functionality to clear all the todos
// deleteButton.addEventListener('click', () => {
//   deleteCompletedTodos();
// });

export const displayTodos = () => {
  todoListss.forEach((todo, ind) => {
    todo.id = ind + 1;
    createTodo(todo);
  });
};

// localStorage.removeItem('todos');

window.addEventListener('load', () => {
  displayTodos();
  return false;
});
