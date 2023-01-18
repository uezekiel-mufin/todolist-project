/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
import { todoUl } from '../src/index.js';
import { deleteTodo, updateTodo } from './crud.js';

const createTodo = (item) => {
  const itemContainer = document.createElement('li');
  itemContainer.className = 'todo';
  itemContainer.draggable = true;

  //   itemContainer.addEventListener('drag', () => {
  //     console.log('dragged');
  //   });

  //   itemContainer.addEventListener('dragstart', () => {
  //     itemContainer.style.opacity = 0.4;
  //   });
  //   itemContainer.addEventListener('dragend', () => {
  //     itemContainer.style.opacity = 1;
  //   });

  //   itemContainer.addEventListener('dragover', (e) => {
  //     e.preventDefault();
  //     return false;
  //   });
  //   itemContainer.addEventListener('dragenter', () => {
  //     itemContainer.classList.add('over');
  //   });
  //   itemContainer.addEventListener('dragleave', () => {
  //     itemContainer.classList.remove('over');
  //   });

  const itemForm = document.createElement('form');
  itemForm.className = 'todo_form';
  const todoTitle = document.createElement('input');
  todoTitle.className = 'todo_title';
  todoTitle.value = item.description;
  todoTitle.disabled = item.disabled;
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.checked = item.completed;
  checkBox.className = 'checkbox';
  //   checkBox.addEventListener('click', () => {
  //     selectTodo(checkBox, todoTitle, item);
  //   });
  const option = document.createElement('span');
  option.className = 'material-symbols-outlined';
  option.innerText = item.icon;
  option.style.cursor = option.innerText === 'more_vert' ? 'move' : 'pointer';

  const div = document.createElement('div');
  div.appendChild(checkBox);
  div.appendChild(todoTitle);
  div.className = 'todo_right';
  itemForm.appendChild(div);
  itemContainer.appendChild(itemForm);
  itemContainer.appendChild(option);

  itemForm.addEventListener('click', (e) => {
    const el = e.target.type;
    if (el === 'more_vert' || el === 'checkbox') {
      return;
    }
    updateTodo(todoTitle, item.id, itemForm, option, itemContainer);
  });

  todoUl.appendChild(itemContainer);

  option.addEventListener('click', (e) => {
    const el = e.target;
    if (el.textContent === 'more_vert') {
      return;
    }
    deleteTodo(item.id, itemContainer, todoUl);
  });
};
export default createTodo;
