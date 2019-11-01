import Todo from './models/todo'
import dom  from './ui/dom'
import {getProjectHeading, getProjectInput, getTodoInput} from './ui/inputs'
import {setDropdown, todoDisplay, showProjectHeading, displayErrors,detailsDisplay, projectOption} from './ui/outputs'
import elements from './ui/dom_elements';

let counter = 0;
let errors = '';
let currentTodos = (JSON.parse(localStorage.getItem('todos')))? JSON.parse(localStorage.getItem('todos')) : [];
let projects = (JSON.parse(localStorage.getItem('projects')))? JSON.parse(localStorage.getItem('projects')) : [];

elements.todoBtn.addEventListener('click', ()=>{
  let todoData = getTodoInput();
  let todo = new Todo(counter++, todoData.project, todoData.title, todoData.desc, todoData.dueDate, todoData.priority, todoData.status);
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
   if(item.status == 'Completed'){
    dom.domElementId(item.title).classList.add('active');
  }else{
    dom.domElementId(item.title).classList.remove('active');
  }
  if(item.priority == 'High'){
    dom.domElementId(item.title).classList.add('border-red');
  }else{
    dom.domElementId(item.title).classList.remove('border-red');
  }

  dom.domElementId(item.title).addEventListener('click', ()=> {
    elements.detailsPanel.innerHTML = ''; 
    detailsDisplay(item);

    dom.domElementId(item.id).addEventListener('click', () => {
      deleteTodo(item);
      todosByProject(getProjectHeading());
      elements.detailsPanel.innerHTML = ''; 
    });
   dom.domElementId('statusBtn').addEventListener('click', ()=> {
    changeStatus(item);
    });
    dom.domElementId('priorityBtn').addEventListener('click', ()=> {
      changePriority(item);
      });
   dom.domElementId('editBtn').addEventListener('click', ()=> {
    dom.domElementId('changeDescription').innerHTML = `<input type="text" id='newDescription' value='${item.description}' class="form-control">
    <button class='btn btn-sm btn-info' id='newEditBtn'>save</button>`;
    dom.domElementId('newEditBtn').addEventListener('click', ()=> {

      let newDesc = dom.domElementId('newDescription').value; 
      currentTodos[currentTodos.indexOf(item)].description = newDesc;
      localStorage.setItem('todos', JSON.stringify(currentTodos));
      elements.detailsPanel.innerHTML = ''; 
      todosByProject(getProjectHeading());  
        });
     });
    });  

   });

  };
const changeStatus = (todo) => {
  let newStatus = dom.domElementId('changeStatus').innerHTML;
  newStatus = (newStatus == 'Pending')? 'Completed': 'Pending';
  currentTodos[currentTodos.indexOf(todo)].status = newStatus;
  localStorage.setItem('todos', JSON.stringify(currentTodos));
  elements.detailsPanel.innerHTML = ''; 
  todosByProject(getProjectHeading());
};

const changePriority = (todo) => {
  let newPriority = dom.domElementId('changePriority').innerHTML;
  newPriority = (newPriority == 'Low')? 'High': 'Low';
  currentTodos[currentTodos.indexOf(todo)].priority = newPriority;
  localStorage.setItem('todos', JSON.stringify(currentTodos));
  elements.detailsPanel.innerHTML = ''; 
  todosByProject(getProjectHeading());
};

const deleteTodo = (item) => {
  currentTodos.splice(currentTodos.indexOf(item), 1);
  localStorage.setItem('todos', JSON.stringify(currentTodos));
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
  elements.detailsPanel.innerHTML = '';
  showProjectHeading(getProjectHeading());
  todosByProject(getProjectHeading());
 });

const init = () => {
  createProject();
  setDropdown();
  todosByProject('Default');
};

init(); 