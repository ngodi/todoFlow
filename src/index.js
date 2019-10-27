import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {getProjectInput, getTodoInput} from './ui/inputs'
import {displayErrors, projectDisplay, projectOption} from './ui/outputs'
import elements from './ui/dom_elements';


const todoListStorage = [];
const projects = [];
let message = [
   {
  error: '',
  success: '',
   }
];
let counter = 1;


elements.todoBtn.addEventListener('click', ()=>{
  const todoData = getTodoInput();
  const newTodo = new Todo(todoData.project,counter++, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.notes, todoData.status);
   
});

elements.newProject.addEventListener('click', ()=>{
let project = getProjectInput();
if(!projects.includes(project)){
  projects.push(project);
  message.error = '';
  message.success = `Project with similar name exists already`;
  displayErrors(message.success);
}else{
 message.error = 'Project with similar name exists already';
 message.success = '';
 displayErrors(message.error);
}
});