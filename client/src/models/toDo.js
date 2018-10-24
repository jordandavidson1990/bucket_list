const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const ToDo = function(url){
  this.url = 'http://localhost:3000/api/toDo';
  this.request = new Request(this.url);
};

ToDo.prototype.bindEvents = function(){
  PubSub.subscribe('ToDoView:toDo-submitted', (evt) => {
    this.postToDo(evt.detail);
  });
  PubSub.subscribe('ToDoView:toDo-delete-clicked', (evt) => {
    this.deleteToDo(evt.detail);
  });

  PubSub.subscribe('ToDoView:toDo-submit-clicked', (evt) =>{
    this.updateToDo(evt.detail);
  });
};

ToDo.prototype.getData = function(){
  this.request.get()
  .then((toDo) => {
    PubSub.publish('ToDos:data-loaded', toDo);
  })
  .catch(console.error);
};

ToDo.prototype.postToDo = function(toDo){
  const request = new Request(this.url);
  request.post(toDo)
  .then((toDos) => {
    PubSub.publish('ToDos:data-loaded', toDos);
  })
  .catch(console.error);
};

ToDo.prototype.deleteToDo = function(toDoId){
  this.request.delete(toDoId)
  .then((toDos) =>{
    PubSub.publish('ToDos:data-loaded', toDos);
  })
  .catch(console.error);
};

ToDo.prototype.updateToDo = function(toDoId){
  this.request.put(toDoId)
  .then((toDos) =>{
    PubSub.publish('ToDos:data-loaded', toDos);
  })
  .catch(console.error);
  };

module.exports = ToDo;
