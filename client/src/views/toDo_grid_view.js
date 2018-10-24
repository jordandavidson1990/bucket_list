const PubSub = require('../helpers/pub_sub.js');
const ToDoView = require('./toDo_view.js');

const ToDoGridView = function(container){
  this.container = container;
};

ToDoGridView.prototype.bindEvents = function(){
  PubSub.subscribe('ToDos:data-loaded', (evt) => {
    this.render(evt.detail);
  });
}
ToDoGridView.prototype.render = function(toDos){
  this.container.innerHTML = '';
  const toDoView = new ToDoView(this.container);
  toDos.forEach((toDo) => toDoView.render(toDo));
};

module.exports = ToDoGridView;
