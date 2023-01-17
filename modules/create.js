import { todoUl } from '../src/index.js';

const createTodo = (item) => {
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
};
export default createTodo;
