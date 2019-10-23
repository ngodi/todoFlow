import Todo from './models/todo'
import Project from './models/project'
import uiController  from './ui/ui_control'
import {projectForm, todoForm, getTodoInput} from './ui/forms'
import elements from './ui/dom_elements';


let todoListStorage = [];
let projects = [];
let counter = 0;

 
const createProject = () => {
elements.getStarted.addEventListener('click', projectForm); 
elements.todoBtn.addEventListener('click', () => {
    projects.todos = getTodoInput();
  });
  
};

const createTodo = () => {
    const toDo = new Todo(counter++, title, description, dueDate, priority, notes, status);
    document.querySelector('#projectBtn').addEventListener('click', () => {
        projects.push(todoForm());
     });
};


const init = () => {
    createProject();
  };

init();