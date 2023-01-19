import './style.css';
import createTodo from '../modules/create.js';
import { deleteCompletedTodos } from '../modules/crud2.js';

const form = document.getElementById('form');
export const todo = document.querySelector('.add_todo');
export const todoUl = document.getElementById('todoList');
export const todoListss = JSON.parse(localStorage.getItem('todos')) || [];
const deleteButton = document.getElementById('clear_button');

// functionality to clear all the todos
deleteButton.addEventListener('click', () => {
  deleteCompletedTodos(todoListss, todoUl);
});

class NewTodo {
  constructor(description) {
    this.description = description;
    this.id = todoListss.length + 1;
  }

  add = () => {
    const item = {
      id: this.id,
      description: this.description,
      completed: false,
      disabled: true,
      icon: 'more_vert',
    };
    createTodo(item, todoListss, todoUl);
    todoListss.push(item);
  };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = new NewTodo(todo.value);
  newTodo.add();
  localStorage.setItem('todos', JSON.stringify(todoListss));
  form.reset();
});

export const displayTodos = () => {
  todoListss.forEach((todo, ind) => {
    todo.id = ind + 1;
    createTodo(todo, todoListss, todoUl);
  });
};

// localStorage.removeItem('todos');

window.addEventListener('load', () => {
  displayTodos();
  return false;
});
