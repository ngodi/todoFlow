import Todo from './models/todo'
import uiController  from './ui/ui_control'
import todoForm from './ui/todo_form'
import projectForm from './ui/project_form'


let todoListStorage = {};
let counter = 0;

const todo = (title, description, dueDate = null , priority = 'normal', notes = null, status = 'not started') => {
    const toDo = new Todo(counter++, title, description, dueDate, priority, notes, status);
    storeTodo(toDo, todoListStorage);
};
const findTodo = todo => {
  const found = todoListStorage.find(item => {
      return todo.id == item.id;
  });
  return found;
};

const storeProject = project => {
    todoListStorage.push({project: []});
};
const storeTodo = (todo, project) => {
    todoListStorage.project.push(todo);
};

document.querySelector('#kick').addEventListener('click', projectForm);