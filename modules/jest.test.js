import addTodo from './addTodo.js';
import { deleteTodo, updateTodo } from './crud.js';
import { selectTodo } from './crud2.js';
/**
 * @jest-environment jsdom
 */

describe('TodoApp', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  let todos = window.document.querySelectorAll('.todo');

  test('Add one new item to the DOM', () => {
    const todoUl = document.getElementById('todoList');
    const todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    todos = window.document.querySelectorAll('.todo');
    expect(todos).toHaveLength(1);
  });

  test('Add one new item to the localstorage', () => {
    const todoUl = document.getElementById('todoList');
    const todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    expect(todoListss).toHaveLength(1);
  });

  let itemContainer = window.document.querySelector('.todo');
  test('Delete one new item to the localstorage', () => {
    document.body.innerHTML = `
     <ul id="todoList"><li></li></ul>' `;
    const todoUl = document.getElementById('todoList');
    let todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    addTodo('this is the first todo', 2, todoListss, todoUl);
    addTodo('this is the first todo', 3, todoListss, todoUl);
    itemContainer = window.document.querySelector('.todo');
    todoUl.children[1].click();
    deleteTodo(1, itemContainer, todoListss);
    todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    expect(todoListss).toHaveLength(2);
    deleteTodo(2, itemContainer, todoListss);
    todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    expect(todoListss).toHaveLength(1);
  });

  test('check for the input whose checked value is true', () => {
    const todoUl = document.getElementById('todoList');
    let todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    itemContainer = window.document.querySelector('.todo');
    const checkBox = document.querySelector('.checkbox');
    const item = {
      id: 1,
      description: 'this is the first todo',
      completed: false,
      disabled: true,
      icon: 'more_vert',
    };
    const todoTitle = document.querySelector('.todo_title');
    checkBox.checked = true;
    selectTodo(checkBox, todoTitle, item, itemContainer);

    expect(todoTitle.style.textDecoration).toBe('line-through');
  });

  test('check if the task is marked as completed', () => {
    const todoUl = document.getElementById('todoList');
    let todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    itemContainer = window.document.querySelector('.todo');
    const checkBox = document.querySelector('.checkbox');
    const item = {
      id: 1,
      description: 'this is the first todo',
      completed: false,
      disabled: true,
      icon: 'more_vert',
    };
    const todoTitle = document.querySelector('.todo_title');
    checkBox.checked = true;
    selectTodo(checkBox, todoTitle, item, itemContainer);

    expect(itemContainer.id).toBe('completed');
  });

  test('check if the task is been edited and the task background changes', () => {
    const todoUl = document.getElementById('todoList');
    let todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    itemContainer = window.document.querySelector('.todo');
    const checkBox = document.querySelector('.checkbox');
    const itemForm = document.createElement('form');
    const todoTitle = document.querySelector('.todo_title');
    updateTodo(todoTitle, 1, itemForm, checkBox, itemContainer, todoListss);
    expect(itemContainer.style.background).toBe('rgb(224, 224, 149)');
  });

  test('check if the task is been edited and disabled property is set to false', () => {
    const todoUl = document.getElementById('todoList');
    let todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    itemContainer = window.document.querySelector('.todo');
    const checkBox = document.querySelector('.checkbox');
    const itemForm = document.createElement('form');
    const todoTitle = document.querySelector('.todo_title');
    updateTodo(todoTitle, 1, itemForm, checkBox, itemContainer, todoListss);
    expect(todoTitle.disabled).toBe(false);
  });

  test('check if the task is been edited and disabled property is set to false', () => {
    const todoUl = document.getElementById('todoList');
    let todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    addTodo('this is the first todo', 1, todoListss, todoUl);
    todoListss = JSON.parse(window.localStorage.getItem('todos')) || [];
    itemContainer = window.document.querySelector('.todo');
    const itemForm = document.createElement('form');
    const todoTitle = document.querySelector('.todo_title');
    const option = document.querySelector('.todo .material-symbols-outlined');
    updateTodo(todoTitle, 1, itemForm, option, itemContainer, todoListss);
    expect(option.innerText).toBe('delete');
  });
});
