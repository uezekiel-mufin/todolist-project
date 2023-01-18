import createTodo from './create.js';
import { todoListss } from '../src/index.js';
import { todoUl } from '../src/index.js';

export default class NewTodo {
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
    };
    createTodo(item);
    todoListss.push(item);
  };
}

export const deleteCompletedTodos = () => {
  const newTodos = todoListss.filter((item, ind) => item.completed !== true);
  localStorage.setItem('todos', JSON.stringify(newTodos));
  window.location.reload();
};

const deleteTodo = (id, itemContainer) => {
  const newTodos = todoListss.filter((item, ind) => item.id !== id);
  localStorage.setItem('todos', JSON.stringify(newTodos));
  todoUl.removeChild(itemContainer);
};

export const updateTodo = (
  input,
  disabled,
  id,
  itemForm,
  option,
  itemContainer
) => {
  input.disabled = false;
  input.focus();
  option.innerText = 'delete';
  option.style.cursor = 'pointer';
  option.addEventListener('click', () => {
    deleteTodo(id, itemContainer);
  });

  todoListss.forEach((todo) => {
    if (todo.id === id) {
      todo.disabled = false;
      itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        todo.description = input.value;
        localStorage.setItem('todos', JSON.stringify(todoListss));
        input.disabled = true;
        option.innerText = 'more_vert';
      });
    } else {
      todo.disabled = true;
    }
  });
};
