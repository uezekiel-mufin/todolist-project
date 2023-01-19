import { deleteTodo, updateTodo } from './crud.js';
import { getDragAfetrElement, selectTodo } from './crud2.js';

const createTodo = (item, todoListss, todoUl) => {
  const itemContainer = document.createElement('li');
  itemContainer.className = 'todo';
  itemContainer.draggable = true;

  itemContainer.addEventListener('dragstart', (e) => {
    itemContainer.classList.add('draggable');
    itemContainer.style.opacity = 0.4;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  });

  itemContainer.addEventListener('dragend', () => {
    itemContainer.style.opacity = 1;
    itemContainer.classList.remove('draggable');
  });

  todoUl.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggable = document.querySelector('.draggable');
    const afterElement = getDragAfetrElement(todoUl, e.clientY);
    if (afterElement === null) {
      todoUl.appendChild(draggable);
    } else {
      todoUl.insertBefore(draggable, afterElement);
    }
  });

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
  checkBox.addEventListener('click', () => {
    selectTodo(checkBox, todoTitle, item, itemContainer);
  });
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
    updateTodo(todoTitle, item.id, itemForm, option, itemContainer, todoListss);
  });

  todoUl.appendChild(itemContainer);

  option.addEventListener('click', (e) => {
    const el = e.target;
    if (el.textContent === 'more_vert') {
      return;
    }
    deleteTodo(item.id, itemContainer, todoListss);
  });
};
export default createTodo;
