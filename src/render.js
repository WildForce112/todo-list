const Renderer = (() => {
  const mainBody = document.querySelector('main');
  const navBar = document.querySelector('nav');
  const createCell = (todo) => {
    const cell = document.createElement('div');
    cell.classList.add('todo');
    cell.dataset.id = todo.id;

    const completeState = document.createElement('div');
    completeState.classList.add('complete-state');
    completeState.textContent = todo.completed ? '\u2713' : '';

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

  const renderTodo = (todo, container) => {
    const cell = createCell(todo);
    container.appendChild(cell);
  };

  const renderCompleteState = (todo) => { // not rendering right, need more fix
    const cell = document.querySelector(`.todo[data-id="${todo.id}"]`);
    if (!cell) return;
    const completeState = cell.querySelector('.complete-state');
    completeState.textContent = todo.completed ? '\u2713' : '';
  };

  const renderProject = (project) => {
    clear();
    const container = document.createElement('div');
    container.dataset.id = project.id;
    container.classList.add('project');
    mainBody.appendChild(container);

    for (const item of project.todoList) {
      renderTodo(item, container);
    }
  }

  const renderNav = (projects) => {
    const todoAdd = document.createElement('button');
    todoAdd.classList.add('todo-button');
    todoAdd.textContent = "Add New Task";
    navBar.appendChild(todoAdd);
    renderProjectList(projects);
  }

  const renderProjectList = (projects) => {
    const projectsText = document.createElement('div');
    projectsText.textContent = 'Projects';
    projectsText.classList.add("project-text");
    navBar.appendChild(projectsText);
    const projectContainer = document.createElement('div');
    for(const item of projects) {
      const project = document.createElement('div');
      project.classList.add('project-button');
      project.dataset.id = item.id;
      project.textContent = item.name;
      projectContainer.appendChild(project);
    }
    navBar.appendChild(projectContainer);
  }

  const clear = () => {
    mainBody.innerHTML = '';
  };

  const init = (projects) => {
    renderProject(projects[0]);
    renderNav(projects);
  }

  return {
    renderProject,
    renderCompleteState,
    clear,
    init,
  };

})();
export {Renderer}