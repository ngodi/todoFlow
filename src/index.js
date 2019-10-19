import TodoList from './todo'
import dataController from './data_control'
import uiController  from './ui_control';
import homePage from './home_page'

const c = dataController.createTodo('title', 'desc');
const c2 = dataController.createTodo('title 2 ', 'desc');
const c3 = uiController.domElementId('kick');


const runAlert = () => {
    alert('I was clicked');
};

c3.addEventListener('click', homePage.displayTodoForm);

