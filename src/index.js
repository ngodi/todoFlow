import Todo from './models/todo'
import Project from './models/project'
import uiController  from './ui/ui_control';
import todoForm from './ui/todo_form'


let todoListStorage = [];
let counter = 0;

const project = (project = 'default') => {
     const newProject = new Project(project);
     return newProject;
};
const todo = (title, description, dueDate = null , priority = 'normal', notes = null, status = 'not started', projectName = 'default') => {
    const toDo = new Todo(counter++, title, description, dueDate, priority, notes, status, projectName);
    storeTodo(toDo, todoListStorage);
};
const findTodo = todo => {
  const found = todoListStorage.find(item => {
      return todo.id == item.id;
  });
  return found;
};

const storeProject = project => {
    todoListStorage.push(project);
};
const storeTodo = todo => {
    todoListStorage.push(todo);
};

document.querySelector('#kick').addEventListener('click', todoForm);