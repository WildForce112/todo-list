class project {
  constructor(name, todoList) {
    this.name = name;
    this.todoList = todoList;
    this.id = crypto.randomUUID();
  }
}

function createNewProject(name) {
  return new project(
    name,
    []
  )
}

function addTodoToProject(todo, project) {
  project.todoList.push(todo);
}

export {createNewProject, addTodoToProject}