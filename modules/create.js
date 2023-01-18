import { todoUl } from '../src/index.js';
import { updateTodo } from './crud.js';

const createTodo = (item) => {
  const itemContainer = document.createElement('li');
  itemContainer.className = 'todo';
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
  const option = document.createElement('span');
  option.className = 'material-symbols-outlined';
  option.innerText = 'more_vert';

  const div = document.createElement('div');
  div.appendChild(checkBox);
  div.appendChild(todoTitle);
  div.className = 'todo_right';
  itemForm.appendChild(div);
  itemContainer.appendChild(itemForm);
  itemContainer.appendChild(option);

  itemContainer.addEventListener('click', (e) => {
    if (
      e.target.innerText === 'more_vert' ||
      e.target.className === 'checkbox'
    ) {
      return;
    }
    updateTodo(
      todoTitle,
      item.disabled,
      item.id,
      itemForm,
      option,
      itemContainer
    );
  });

  todoUl.appendChild(itemContainer);
};
export default createTodo;
