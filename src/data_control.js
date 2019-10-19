import TodoList from './todo'

const dataController = (() => {
    let todoListStorage = [];
    let counter = 0;

    const createTodo = (title, description, dueDate = null , priority = 'normal', notes = null, status = 'not started') => {
        const toDo = new TodoList (counter++, title, description, dueDate, priority, notes, status);
        storeTodo(toDo, todoListStorage);
        return toDo;
    };
    const findTodo = todo => {
      const found = todoListStorage.find(item => {
          return todo.id == item.id;
      });
      return found;
    };

    const storeTodo = todo => {
        todoListStorage.push(todo);
    };

    return { createTodo, findTodo, findTodo, storeTodo}
})();

export default dataController;

