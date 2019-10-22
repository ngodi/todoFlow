import uiController from './ui_control'

export const todoForm = () => {
  const inputForm = `<form>
  <div class="form-group">
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
  <button type="button" class="btn btn-info" id="todoBtn">Add to project</button>
</form>
  `;
  document.querySelector('.content').innerHTML = inputForm;
  const val = (uiController.domElementId('project').value != null)? uiController.domElementId('project').value: uiController.domElementId('select').value;
  document.querySelector('.greeting').innerHTML = `<h3>Project: ${val}</h3>`;
  document.querySelector('#todoBtn').addEventListener('click', getTodoInput);
};


export const getTodoInput = () =>{
     const title = uiController.domElementId('title');
     const desc = uiController.domElementId('desc');
     const dueDate = uiController.domElementId('date');
     const priority = uiController.domElementId('priority');
     const status = uiController.domElementId('status');
     const notes = uiController.domElementId('notes');
     return {
       title, desc, dueDate, priority, status, notes
     }
};