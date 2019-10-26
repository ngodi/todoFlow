import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {projectDisplay, projectOption, todoForm, getTodoInput, getProjectInput} from './ui/forms'
import elements from './ui/dom_elements';


const todoListStorage = [];
const projects = ['Default'];
let counter = 0;

elements.addTodoBtn.addEventListener('click', ()=>{
 todoForm();
 uiController.domElementId('todoBtn').addEventListener('click', ()=>{
   const todoData = getTodoInput();
  const newTodo = new Todo(todoData.project,counter++, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.notes, todoData.status);
  todoListStorage.push(newTodo);
 });
});

elements.projectBtn.addEventListener('click', ()=>{
  const project = getProjectInput();
  if(!projects.includes(project)){
    projects.push(project);
    projectOption(project);
    projectDisplay(project);
  }
  
  
});
