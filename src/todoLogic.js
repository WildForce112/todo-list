
class todo {
  constructor(title, dueDate){
    this.title = title;
    this.dueDate = dueDate;
    this.completed = false;
    this.id = crypto.randomUUID();
    this.priority = 0;
  }

  changeTodoCompleteState() {
    this.completed = !this.completed;
  }
}

function createNewTodo(title, dueDate) {
  return new todo(title,
    dueDate,
  )
}

export {todo, createNewTodo}