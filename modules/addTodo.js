import createTodo from './create';

const addTodo = (description, id, todoListss, todoUl) => {
  const item = {
    id,
    description,
    completed: false,
    disabled: true,
    icon: 'more_vert',
  };
  createTodo(item, todoListss, todoUl);
  todoListss.push(item);
};

export default addTodo;
