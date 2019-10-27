export default class Todo{
  constructor(project='Default',id, title, description, dueDate, priority, notes, status){
      this.project = project;
      this.id = id;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.status = status;
  }
}

