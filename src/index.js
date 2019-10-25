import Todo from './models/todo'
import uiController  from './ui/ui_control'
import {projectForm, todoForm, getTodoInput} from './ui/forms'
import elements from './ui/dom_elements';


const todoListStorage = [];
const projects = [];
let counter = 0;

elements.addTodoBtn.addEventListener('click', ()=>{
 todoForm();
});