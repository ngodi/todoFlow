import Todo from './models/todo'
import uiController  from './ui/ui_control'
import formInput from './ui/forms'
import elements from './ui/dom_elements';


let todoListStorage = [];
let projects = {};
let counter = 0;

const todo = (title, description, dueDate = null , priority = 'normal', notes = null, status = 'not started') => {
    const toDo = new Todo(counter++, title, description, dueDate, priority, notes, status);
};


elements.getStarted.addEventListener('click', formInput.projectForm);
 



document.querySelector('#projectBtn').addEventListener('click', () => {
   projects.project =  todoForm();
});

document.querySelector('#todoBtn').addEventListener('click', () => {
  projects.todos = getTodoInput();
  todoListStorage.push(projects);
  console.log(todoListStorage);
});
