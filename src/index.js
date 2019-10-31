import Todo from './models/todo'
import dom  from './ui/dom'
import {getProjectHeading, getProjectInput, getTodoInput} from './ui/inputs'
import {setDropdown, todoDisplay, showProjectHeading, displayErrors,detailsDisplay, projectOption} from './ui/outputs'
import elements from './ui/dom_elements';

let errors = '';
let currentTodos = (JSON.parse(localStorage.getItem('todos')))? JSON.parse(localStorage.getItem('todos')) : [];
let projects = (JSON.parse(localStorage.getItem('projects')))? JSON.parse(localStorage.getItem('projects')) : [];

elements.todoBtn.addEventListener('click', ()=>{
  let todoData = getTodoInput();
  let todo = new Todo(todoData.project, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.status);
  let duplicateTitle = currentTodos.filter(e => {
           return (todo.title == e.title && todo.project == e.project)
  });
  
  if(todo.title.length > 0 && duplicateTitle.length <= 0){ 
    currentTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(currentTodos));
    
    todosByProject(getProjectHeading());
     errors = '';
     displayErrors(errors);
    }else{
     errors = 'Invalid title or title used already';
     displayErrors(errors);
   } 

});



const todosByProject = (element) => {
  elements.todoPanel.innerHTML = '';
  currentTodos.filter(e => {
  return e.project == element
  }).map(item => {
    
   todoDisplay(item.title);
 
  dom.domElementId(item.title).addEventListener('click', ()=> {
    elements.detailsHeading.innerHTML = `About ${item.title}`;
    elements.detailsPanel.innerHTML = '';
    detailsDisplay(item);
    });  
   });

  };


const createProject = () => {
  elements.newProjectBtn.addEventListener('click', ()=>{
    let project = getProjectInput();
    
    if(!projects.includes(project) && project.length > 0){
      projects.push(project )
      localStorage.setItem('projects', JSON.stringify(projects));
        projectOption(project);
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
  setDropdown();
  todosByProject('Default');
};

init(); 