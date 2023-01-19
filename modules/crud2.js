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

  const elements = [...todoUl.children];
  elements.forEach((ele) => {
    if (ele.id === 'completed') {
      ele.remove();
    }
  });
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

// functionality for drag and drop

export const getDragAfetrElement = (container, y) => {
  const draggableElements = [
    ...container.querySelectorAll('.todo:not(.draggable)'),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY },
  ).element;
};
