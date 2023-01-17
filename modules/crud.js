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
    };
    createTodo(item);
    todoListss.push(item);
  };
}
