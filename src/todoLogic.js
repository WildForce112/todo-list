class todo {
  constructor(title, description, dueDate, priority, notes, checklist, id){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.completed = false;
    this.id = crypto.randomUUID();
  }

  changeTodoCompleteState() {
    this.completed = !this.completed;
  }
}

function createNewTodo(title, description, dueDate, priority, notes, checklist) {
  return new todo(title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  )
}

function changeTodoTitle(todo, newTitle) {
  todo.title = newTitle;
}
function changeTodoDescription(todo, newDescription) {
  todo.description = newDescription;
}
function changeTodoDueDate(todo, newDueDate) {
  todo.dueDate = newDueDate;
}
function changeTodoPriority(todo, newPriority) {
  todo.priority = newPriority;
}
function changeTodoNotes(todo, newNotes) {
  todo.notes = newNotes;
}
function changeTodoCheckList(todo, newCheckList) {
  todo.checklist = newCheckList;
}

export {todo, createNewTodo}