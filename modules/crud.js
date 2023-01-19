// reset todo id
export const idReset = (lists) => {
  lists.forEach((todo, ind) => {
    todo.id = ind + 1;
  });
};

// logic to delete a single todo
export const deleteTodo = (id, itemContainer, todoListss) => {
  const newTodos = todoListss.filter((item) => item.id !== id);
  localStorage.setItem('todos', JSON.stringify(newTodos));
  if (itemContainer.parentNode) {
    itemContainer.parentNode.removeChild(itemContainer);
  }
};

// logic to update the the description of a todo
export const updateTodo = (
  input,
  id,
  itemForm,
  option,
  itemContainer,
  todoListss,
) => {
  input.disabled = false;
  input.focus();
  itemContainer.style.background = 'rgb(224, 224, 149)';
  todoListss.forEach((todo) => {
    todo.icon = 'more_vert';
    if (todo.id === id) {
      todo.disabled = false;
      if (todo.disabled === false) {
        todo.icon = 'delete';
        option.innerText = todo.icon;
        option.style.cursor = 'pointer';
        itemForm.addEventListener('submit', (e) => {
          e.preventDefault();
          todo.description = input.value;
          input.disabled = true;
          todo.icon = 'more_vert';
          option.innerText = 'more_vert';
          itemContainer.style.background = 'none';
          localStorage.setItem('todos', JSON.stringify(todoListss));
        });
      }
    } else {
      todo.disabled = true;
    }
  });
};
