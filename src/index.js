import TodoList from './todo'
import todoController from './todo_control'

const c = todoController.createTodo('title', 'desc');
const c2 = todoController.createTodo('title 2 ', 'desc');

alert(todoController.findTodo(c2).title);