import { TodoRenderer } from "./render.js"
import { changeTodoCompleteState } from "./todoLogic.js";


function handleTodoEvents() {
  const mainBody = document.querySelector('main');
  if (!mainBody) return;

  mainBody.addEventListener('click', (e) => {
    const button = e.target.closest('.complete-state');
    if (!button) return;

    const todo = e.target.closest(".todo");
    const id = todo.dataset.id;

    // changeTodoCompleteState(todo);

  });
}

export { handleTodoEvents };
