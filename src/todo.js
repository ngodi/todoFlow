export default class TodoList{
//constructor
  constructor(title, description, dueDate, priority, notes, status){
      this.title = title;
      this.description = description;
  }
//setters
  set dueDate(dueDate){ 
     this.dueDate = dueDate; 
    }
  set priority(priority){ 
      this.priority = priority; 
    }
 set notes(notes){ 
     this.notes = notes; 
    }
 set status(status){
      this.status = status; 
    }
//getters
get title(){
    return this.title
}
get description(){
    return this.description;
}
get dueDate(){ 
        return this.dueDate; 
       }
get priority(){ 
         return this.priority; 
       }
get notes(){ 
        return this.notes; 
       }
get status(){
         return this.status; 
       };
}

//title, description, dueDate, priority,notes , checklist.
