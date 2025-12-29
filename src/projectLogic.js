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
const Personal = createNewProject("Personal");
Personal.addTodoToProject(createNewTodo("Buy groceries", new Date(2026, 0, 1)));
Personal.addTodoToProject(createNewTodo("Workout 30 minutes", new Date(2026, 0, 2)));
projects.push(Personal);
const School = createNewProject("School");
School.addTodoToProject(createNewTodo("Finish math homework", new Date(2026, 0, 4)));
School.addTodoToProject(createNewTodo("Prepare presentation", new Date(2026, 0, 7)));
projects.push(School);
console.log(new Date());
// console.log((new Date(2026, 0, 2) - new Date(2026, 0, 1))/24/3600/1000)


export {project, createNewProject, projects, getProjectFromList}