import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {getProjectInput, getTodoInput} from './ui/inputs'
import {displayErrors, projectDisplay, projectOption} from './ui/outputs'
import elements from './ui/dom_elements';


const todoListStorage = [];
const projects = [];
let errors = '';
let counter = 1;


elements.todoBtn.addEventListener('click', ()=>{
  const todoData = getTodoInput();
  const newTodo = new Todo(todoData.project,counter++, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.notes, todoData.status);
   
});

const createProject = () => {
  elements.newProjectBtn.addEventListener('click', ()=>{
    let project = getProjectInput();
    if(!projects.includes(project)){
      projects.push(project);
      projectOption(project);
      projectDisplay(project);
      errors = '';
      displayErrors(errors);
    }else{
     errors = `Project name exists already`;
     displayErrors(errors);
    }
    });
};

const init = () => {
  createProject();
};

init();