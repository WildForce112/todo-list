import "./styles.css";
import { createNewTodo, changeTodoCompleteState } from "./todoLogic.js";
import { createNewProject, addTodoToProject } from "./projectLogic.js"
import { Renderer } from './render.js';
import { handleTodoEvents } from "./event.js";

(function () {
  const defaultProject = createNewProject("Default")

  const todo1 = createNewTodo("1", "2", "3", "4", "5", "6");
  const todo2 = createNewTodo("3", "4", "5", "6", "7", "8");

  addTodoToProject(todo1, defaultProject);
  addTodoToProject(todo2, defaultProject);

  console.log(defaultProject);
  changeTodoCompleteState(todo1);
  Renderer.renderProject(defaultProject);

  handleTodoEvents();
})();
