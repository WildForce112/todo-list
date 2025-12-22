const Renderer = (() => {
  const mainBody = document.querySelector('main');
  // console.log(mainBody)
  const createCell = (todo) => {
    const cell = document.createElement('div');
    cell.classList.add('todo');
    cell.dataset.id = todo.id;

    const completeState = document.createElement('div');
    completeState.classList.add('complete-state');

    const info = document.createElement('div');
    info.classList.add('info');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = todo.title;

    const dueDate = document.createElement('div');
    dueDate.classList.add('due-date');
    dueDate.textContent = todo.dueDate;

    info.append(title, dueDate);
    cell.append(completeState, info);

    return cell;
  }

  const renderTodo = (todo) => {
    const cell = createCell(todo);
    mainBody.appendChild(cell);
    renderCompleteState(todo);
  };

  const renderCompleteState = (todo) => {
    const cell = document.querySelector(`.todo[data-id="${todo.id}"]`);
    if (!cell) return;

    const completeState = cell.querySelector('.complete-state');
    completeState.textContent = todo.completed ? '\u2713' : '';
  };

  const renderProject = (projects) => {
    for (const item of projects.todoList) {
      renderTodo(item);
    }
  }

  const clear = () => {
    mainBody.innerHTML = '';
  };

  return {
    renderProject,
    renderCompleteState,
    clear,
  };

})();
export {Renderer}