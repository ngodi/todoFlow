import Todo from './models/todo'
import uiController  from './ui/ui_control'
import { projectListHeading, projectDisplay, projectOption, todoForm, getTodoInput, getProjectInput} from './ui/forms'
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
  let markup1 = `<li><span>${newTodo.title}</span></li>`;
 uiController.domElementId('todoList').insertAdjacentHTML('beforeend', markup1);
 });
});

uiController.domElementId('selProject').addEventListener('change',() =>{
  let selectedProject = document.querySelector('#selProject').value;
  uiController.domElementId('todoList').innerHTML = '';
  //selectedProject.addClassList('active');
  const markup = `<h3 class='sub-heading'>Tasks for ${selectedProject} - Project </h3>`;
  uiController.domElementId('selProjectPanel').innerHTML =  markup;
 });


elements.projectBtn.addEventListener('click', ()=>{

  const project = getProjectInput();
  if(!projects.includes(project)){
    projects.push(project);
    projectOption(project);
    projectDisplay(project);
  }
  
});


projectListHeading();