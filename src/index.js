import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {getProjectInput, getTodoInput} from './ui/inputs'
import {displayTodo, displayErrors, projectDisplay, projectOption} from './ui/outputs'
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
   if(newTodo.project == 'Default'){
    if(!projects.includes(newTodo.project)){
      projects.push(newTodo.project);
     projectDisplay(newTodo.project);
  }
    uiController.domElementId(newTodo.project).addEventListener('click', ()=>{
      displayTodos(newTodo.project);
    });
   }
  });
};

const displayTodos = (element) => {
todoListStorage.filter(e => 
  e.project == element
 ).map(item => {
  displayTodo(item.title);
 });
};



const createProject = () => {
  elements.newProjectBtn.addEventListener('click', ()=>{
    let project = getProjectInput();
    if(!projects.includes(project)){
      projects.push(project);
      if(project != 'Default'){
        projectOption(project);
        projectDisplay(project);
        uiController.domElementId(project).addEventListener('click', ()=>{
        displayTodos(project);
      });
      }
      
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
  storeTodos();
};

init();