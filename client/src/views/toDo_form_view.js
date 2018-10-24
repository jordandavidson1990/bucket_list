const PubSub = require('../helpers/pub_sub.js')

const ToDoFormView = function(form){
  this.form = form;
};

ToDoFormView.prototype.bindEvents = function(){
  this.form.addEventListener('submit', (evt) =>{
    this.handleSubmit(evt);
  });
};

ToDoFormView.prototype.handleSubmit = function(evt){
  evt.preventDefault();
  const newToDo = this.createToDo(evt.target);
  PubSub.publish('ToDoView:toDo-submitted', newToDo);
  evt.target.reset();
}

ToDoFormView.prototype.createToDo = function(form){
  const newToDo = {
    activity: form.activity.value,
    location: form.location.value,
    cost: form.cost.value,
    date: form.date.value,
    completed: form.completed.value
  }
  console.log(newToDo);
  return newToDo
}
module.exports = ToDoFormView;
