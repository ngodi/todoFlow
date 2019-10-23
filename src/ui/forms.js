import uiController from './ui_control';

<<<<<<< HEAD
const formInput = (() => {
  const getTodoInput = () =>{
    const title = uiController.domElementId('title').value;
    const desc = uiController.domElementId('desc').value;
    const dueDate = uiController.domElementId('date').value;
    const priority = uiController.domElementId('priority').value;
    const status = uiController.domElementId('status').value;
    const notes = uiController.domElementId('notes').value;
   
    const result = {title, desc, dueDate, priority, status, notes};
    return result;
  };
  
   const todoForm = () => {
    let inputTodo = `<form>
    <div class="form-group" id="inputTodo">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="">
    </div>
    <div class="form-group">
    <label for="title">Description</label>
    <input type="text" class="form-control" id="desc" placeholder="">
  </div>
  <div class="form-group">
  <label for="title">Due date</label>
  <input type="date" class="form-control" id="date" placeholder="">
  </div>
    <div class="form-group">
      <label for="priority">Select priority</label>
      <select class="form-control" id="priority">
        <option>Normal</option>
        <option>Low</option>
        <option>High</option>
      </select>
    </div>
    <div class="form-group">
      <label for="status">Status</label>
      <select class="form-control" id="status">
        <option>New</option>
        <option>Pending</option>
        <option>Completed</option>
      </select>
    </div>
    <div class="form-group">
      <label for="notes">Notes</label>
      <textarea class="form-control" id="notes" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-info" id="todoBtn" >Add to project</button>
  </form>
    `;
    const val = (uiController.domElementId('project').value != null)? uiController.domElementId('project').value: uiController.domElementId('select').value;
    uiController.domElementClass('greeting').innerHTML =`<h2>Add new todo task to ${val} project</h2>`;
    uiController.domElementClass('content').innerHTML = inputTodo;
    uiController.domElementId('todoBtn').addEventListener('click', getTodoInput);
=======
export const getTodoInput = () =>{
  const title = uiController.domElementId('title').value;
  const desc = uiController.domElementId('desc').value;
  const dueDate = uiController.domElementId('date').value;
  const priority = uiController.domElementId('priority').value;
  const status = uiController.domElementId('status').value;
  const notes = uiController.domElementId('notes').value;

  //document.querySelector('#todoDiv').classList.add('hidden');
  return {
    title, desc, dueDate, priority, status, notes
  }
};

export const todoForm = () => {
  document.querySelector('#imgId').classList.add('hidden');
  document.querySelector('#todoDiv').classList.remove('hidden');
  const project = (uiController.domElementId('project').value != null)? uiController.domElementId('project').value: uiController.domElementId('select').value;
  document.querySelector('.greeting').innerHTML =`<h2>Add todo items to project: ${project}</h2>`;
  document.querySelector('#projectForm').classList.add('hidden');
  return project;
};

export const projectForm = () => {
    document.querySelector('#kick').classList.add('hidden');
    document.querySelector('#projectForm').classList.remove('hidden');
>>>>>>> 2f815dae05e43a644376e4db09ac8e79cec3279c
  };
  
   const projectForm = () => {
      let inputForm = `<div>
        <label for="title">Enter project name</label>
        <input type="text" class="form-control" id="project" placeholder="">
      </div>
      <span>OR</span>
      <div>
        <label for="project">Select existing project</label>
        <select class="form-control" id="select">
          <option></option>
        </select>
      </div>
      <button type="button" class="btn btn-info" id="projectBtn">Create project</button>
      `;
      document.querySelector('.greeting').innerHTML = inputForm;
      document.querySelector('#projectBtn').addEventListener('click', todoForm);
    };
   return {
     getTodoInput, todoForm, projectForm
   }  
})();
 
export default formInput;