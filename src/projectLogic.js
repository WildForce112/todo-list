import { createNewTodo } from "./todoLogic";

class project {
  constructor(name, todoList) {
    this.name = name;
    this.todoList = todoList;
    this.id = crypto.randomUUID();
  }

  addTodoToProject(todo){
    this.todoList.push(todo);
  }

  getTodoFromProject(id) {
    return this.todoList.find((todo) => todo.id == id);
  }
}

function createNewProject(name) {
  return new project(
    name,
    []
  )
}

function getProjectFromList(id) {
  return projects.find((element) => element.id == id);
}

const projects = [];
const defaultProject = createNewProject("Default")
projects.push(defaultProject);
const todo1 = createNewTodo("1", "2", "3", "4", "5", "6");
const todo2 = createNewTodo("3", "4", "5", "6", "7", "8");
const todo4 = createNewTodo("1", "2", "3", "4", "5", "6");
const todo3 = createNewTodo("3", "4", "5", "6", "7", "8");
defaultProject.addTodoToProject(todo1);
defaultProject.addTodoToProject(todo2);
const defaultProject2 = createNewProject("Default2")
projects.push(defaultProject2);
defaultProject2.addTodoToProject(todo3);
defaultProject2.addTodoToProject(todo4);


export {project, createNewProject, projects, getProjectFromList}