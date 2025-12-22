import { TodoRenderer } from "./render.js"

function handleTodoEvents() {
  const mainBody = document.querySelector('main');
  if (!mainBody) return;

  mainBody.addEventListener('click', (e) => {
    const button = e.target.closest('.complete-state');
    if (!button) return;
    
    
  });
}

export { handleTodoEvents };
