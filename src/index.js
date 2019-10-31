import Todo from './models/todo'
import dom  from './ui/dom'
import {getProjectHeading, getProjectInput, getTodoInput} from './ui/inputs'
import {setDropdown, todoDisplay, showProjectHeading, displayErrors, projectDisplay, projectOption} from './ui/outputs'
import elements from './ui/dom_elements';

let errors = '';

elements.todoBtn.addEventListener('click', ()=>{
  let todoData = getTodoInput();
  let todo = Todo(todoData.project, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.status);
  let currentTodos = (JSON.parse(localStorage.getItem('todos')))? JSON.parse(localStorage.getItem('todos')) : [];
  if(todoData.title.length > 0 && !currentTodos.includes(todo)){ 
    currentTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(currentTodos));
    
    todosByProject(getProjectHeading());
    errors = '';
    displayErrors(errors);
    }else{
      errors = 'Title cannot be empty';
      displayErrors(errors);
    } 

});



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
    const projects = (JSON.parse(localStorage.getItem('projects')))? JSON.parse(localStorage.getItem('projects')) : []
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
};

init(); 