import Todo from './models/todo'
import dom  from './ui/dom'
import {getProjectHeading, getProjectInput, getTodoInput} from './ui/inputs'
import {displayProjects, todoDisplay, showProjectHeading, displayErrors, projectDisplay, projectOption} from './ui/outputs'
import elements from './ui/dom_elements';


const todoListStorage = [];
const projects = [];
let errors = '';

elements.todoBtn.addEventListener('click', ()=>{
  storeTodos();
 todosByProject(getProjectHeading());
});


 const storeTodos = () => {
  const todoData = getTodoInput();
  if(todoData.title.length > 0){
  const newTodo = new Todo(todoData.project, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.notes, todoData.status);
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
 
  dom.domElementId(item.title).addEventListener('click', ()=> {
    elements.detailsHeading.innerHTML = `About ${item.title}`;
    elements.detailsPanel.innerHTML = '';
    todoDisplay(item);
    });  
   });

  };
    


const createProject = () => {
  elements.newProjectBtn.addEventListener('click', ()=>{
    let project = getProjectInput();
    if(!projects.includes(project) && project.length != 0){
      projects.push(project);
        projectOption(project);
        displayProjects(project);
      errors = '';
      displayErrors(errors);
    }else{
     errors = `Project exists already`;
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