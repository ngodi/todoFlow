import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {getProjectHeading, getProjectInput, getTodoInput} from './ui/inputs'
import {showProjectHeading, displayErrors, projectDisplay, projectOption} from './ui/outputs'
import elements from './ui/dom_elements';


const todoListStorage = [];
const projects = [];
let errors = '';
let counter = 1;


const storeTodos = () => {
  elements.todoBtn.addEventListener('click', ()=>{
    const todoData = getTodoInput();
    const newTodo = new Todo(todoData.project,counter++, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.notes, todoData.status);
    todoListStorage.push(newTodo);
  });
};

const displayTodos = (element) => {
  todoListStorage.filter(e => {
    e.project == element
  }).map(item => {
   let markup ='';
    markup +=`<li class='todoItem' id =${item.title}>${item.title}</li>`;
  });
  elements.todoPanel.innerHTML = markup;
  };
    


const createProject = () => {
  elements.newProjectBtn.addEventListener('click', ()=>{
    let project = getProjectInput();
    if(!projects.includes(project)){
      projects.push(project);
        projectOption(project);
        //projectDisplay(project);
     /*    uiController.domElementId(project).addEventListener('click', ()=>{
        displayTodos(project);
      }); */
      
      
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
 });
const init = () => {
  createProject();
  storeTodos();
  
  
};

init();