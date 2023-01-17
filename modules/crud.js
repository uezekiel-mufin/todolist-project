import createTodo from './create.js';
import { todoListss } from '../src/index.js';

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
