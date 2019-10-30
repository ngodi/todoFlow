export default class Todo{
  constructor(project, title, description, dueDate, priority, status){
      this.project = project;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.status = status;
  }
  storeTodo = (todo) => {
      const current = JSON.parse(localStorage.getItem("todos")) || [];
      current.push(todo);
      localSorage.setItem('todos', JSON.stringify(current));
  };

  validateTodo = (todo, current) => {
     if(current.includes(todo)){
       return true;
     }else{
       return false;
     }

 };

}
