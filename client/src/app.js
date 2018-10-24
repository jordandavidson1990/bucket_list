const ToDoFormView = require('./views/toDo_form_view.js');
const ToDo = require('./models/toDo.js');

document.addEventListener('DOMContentLoaded', () => {
  const toDoForm = document.querySelector('form#toDo-form');
  const toDoFormView = new ToDoFormView(toDoForm);
  toDoFormView.bindEvents();

  const toDo = new ToDo();
  toDo.bindEvents();
  toDo.getData();
});
