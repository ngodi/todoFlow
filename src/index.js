import Todo from './models/todo'
import uiController  from './ui/ui_control'
import formInput from './ui/forms'
import elements from './ui/dom_elements';


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

elements.getStarted.addEventListener('click', formInput.projectForm);
 



