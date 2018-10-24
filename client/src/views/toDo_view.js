const PubSub = require('../helpers/pub_sub.js');

const ToDoView = function(container){
  this.container = container;
};

ToDoView.prototype.render = function(toDo){
  const toDoContainer = document.createElement('div');
  toDoContainer.id = 'toDo';

  const activity = this.createHeading(toDo.activity);
  toDoContainer.appendChild(activity);

  const location = this.createDetail('Location', toDo.location);
  toDoContainer.appendChild(location);

  const cost = this.createDetail('Cost', toDo.cost);
  toDoContainer.appendChild(cost);

  const date = this.createDetail('Date', toDo.date);
  toDoContainer.appendChild(date);

  const completed = this.createDetail('Completed', toDo.completed);
  toDoContainer.appendChild(completed);

  const updateButton = this.createUpdateButton(toDo._id);
  toDoContainer.appendChild(updateButton);

  const deleteButton = this.createDeleteButton(toDo._id);
  toDoContainer.appendChild(deleteButton);

  this.container.appendChild(toDoContainer);
}

ToDoView.prototype.createHeading = function(textContent){
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

ToDoView.prototype.createDetail = function(label, text){
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

ToDoView.prototype.createDeleteButton = function(toDoId){
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = toDoId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('ToDoView:toDo-delete-clicked', evt.target.value);
  });
  return button;
}

ToDoView.prototype.createUpdateButton = function(toDoId){
  const button = document.createElement('button');
  button.classList.add('update-btn');
  button.value = toDoId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('ToDoView:toDo-update-clicked', evt.target.value);
  });
  return button;
}

module.exports = ToDoView;
