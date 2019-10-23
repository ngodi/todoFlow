import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {projectForm, todoForm, getTodoInput} from './ui/forms'
import elements from './ui/dom_elements';


const todoListStorage = [];
const projects = [];
let counter = 0;

 
const createProject = (list) => {
 elements.getStarted.addEventListener('click', projectForm); 
 uiController.domElementId('kick1').addEventListener('click', projectForm);
 elements.projectBtn.addEventListener('click', () => {
    const newProject = todoForm();
    list.push(newProject) ;
    displayProjects(projects);
  });
};

const createTodo = (list) => {   
    elements.todoBtn.addEventListener('click', () => {
    const todos = getTodoInput();
    const project = list[list.length - 1];
    const toDo = new Todo(project, counter++, todos.title, todos.desc, todos.dueDate, todos.priority, todos.notes, todos.status);
    list.push(toDo);
  });
};

const displayProjects = (list) => {
    list.forEach((element) => {
        alert(element);
      });
};

const init = () => {
    createProject(projects);
    createTodo(todoListStorage);
    displayProjects(projects);
  };

init();