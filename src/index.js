import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {projectForm, todoForm, getTodoInput} from './ui/forms'
import elements from './ui/dom_elements';


let todoListStorage = [];
let projects = [];
let counter = 0;

 
const createProject = () => {
 elements.getStarted.addEventListener('click', projectForm); 
 elements.projectBtn.addEventListener('click', () => {
    const newProject = todoForm();
    projects.push(newProject) ;
  });
};

const createTodo = () => {   
    elements.todoBtn.addEventListener('click', () => {
    const todos = getTodoInput();
    const project = projects[projects.length - 1];
    const toDo = new Todo(project, counter++, todos.title, todos.desc, todos.dueDate, todos.priority, todos.notes, todos.status);
    todoListStorage.push(toDo);
  });
    
    
 
};


const init = () => {
    createProject();
    createTodo();
  };

init();