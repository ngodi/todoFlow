import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {getProjectHeading, getProjectInput, getTodoInput} from './ui/inputs'
import {showProjectHeading, displayErrors, projectDisplay, projectOption} from './ui/outputs'
import elements from './ui/dom_elements';


const todoListStorage = [];
const projects = [];
let errors = '';
let counter = 1;

elements.todoBtn.addEventListener('click', ()=>{
  storeTodos();
 todosByProject(getProjectHeading());
});


 const storeTodos = () => {
  const todoData = getTodoInput();
  if(todoData.title.length > 0){
  const newTodo = new Todo(todoData.project,counter++, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.notes, todoData.status);
  todoListStorage.push(newTodo);
  
  errors = '';
  displayErrors(errors);
  }else{
    errors = 'Title cannot be empty';
    displayErrors(errors);
  }
 
};

const todosByProject = (element) => {
  elements.todoPanel.innerHTML = '';
  todoListStorage.filter(e => {
  return e.project == element
  }).map(item => {
    projectDisplay(item.title);
  });

  };
    


const createProject = () => {
  elements.newProjectBtn.addEventListener('click', ()=>{
    let project = getProjectInput();
    if(!projects.includes(project)){
      projects.push(project);
        projectOption(project);
      errors = '';
      displayErrors(errors);
    }else{
     errors = `Project name exists already`;
     displayErrors(errors);
    }
    });
};

elements.selProject.addEventListener('change', ()=>{
  showProjectHeading(getProjectHeading());
  todosByProject(getProjectHeading());
 });

const init = () => {
  createProject();
};

init();