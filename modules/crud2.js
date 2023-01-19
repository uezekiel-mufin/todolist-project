// reset todo id
export const idReset = (lists) => {
  lists.forEach((todo, ind) => {
    todo.id = ind + 1;
  });
};

// logic to delete all completed todos
export const deleteCompletedTodos = (todoListss, todoUl) => {
  const newTodos = todoListss.filter((item) => item.completed !== true);
  idReset(newTodos);
  localStorage.setItem('todos', JSON.stringify(newTodos));

  const elements = todoUl.children;
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].id === 'completed') {
      elements[i].remove();
    }
  }
};

// functionality to mark a todo as completed
export const selectTodo = (checkBox, todoTitle, item, itemContainer) => {
  itemContainer.id = 'completed';
  if (checkBox.checked) {
    todoTitle.style.textDecoration = 'line-through';
    item.completed = true;
  } else {
    todoTitle.style.textDecoration = 'none';
    item.completed = false;
  }
};
