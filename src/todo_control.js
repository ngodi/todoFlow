import TodoList from './todo'

const todoController = (() => {
    let todoListStorage = [];
    let counter = 0;

    const createTodo = (title, description, dueDate = null , priority = 'normal', notes = null, status = 'not started') => {
        const toDo = new TodoList (counter++, title, description, dueDate, priority, notes, status);
        storeTodo(toDo, todoListStorage);
        return toDo;
    };

    const storeTodo = (todo, todoList) => {
        todoList.push(todo);
    };

    const editTodo = (todoListStorage, title) => {

    }
    return { createTodo }
})();

export default todoController;

