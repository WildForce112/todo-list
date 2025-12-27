import { Renderer } from "./render.js"
import { changeTodoCompleteState } from "./todoLogic.js";
import { project, getProjectFromList } from "./projectLogic.js";

function handleTodoEvents() {
  document.body.addEventListener('click', (e) => {
    if(e.target.closest('main')){
      const button = e.target.closest('.complete-state');
      if (!button) return;
      const projectID = e.target.closest(".project").dataset.id
      const todoID = e.target.closest(".todo").dataset.id;
      const targetProject = getProjectFromList(projectID);
      const targetTodo = targetProject.getTodoFromProject(todoID);
      targetTodo.changeTodoCompleteState();
      Renderer.renderCompleteState(targetTodo);
    }
    else if(e.target.closest('nav')){
      console.log(1);
      const button = e.target.closest(".project-button");
      if(!button) return;
      const projectID = button.dataset.id;
      const targetProject = getProjectFromList(projectID);
      Renderer.renderProject(targetProject);
    }
  });
}

export { handleTodoEvents };
