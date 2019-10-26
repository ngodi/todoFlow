import uiController from './ui_control';
import elements from './dom_elements';

export const getTodoInput = () =>{
  const project = uiController.domElementId('selProject').value;
  const title = uiController.domElementId('title').value;
  const desc = uiController.domElementId('desc').value;
  const dueDate = uiController.domElementId('date').value;
  const priority = uiController.domElementId('priority').value;
  const status = uiController.domElementId('status').value;
  const notes = uiController.domElementId('notes').value;

  return {
    project, title, desc, dueDate, priority, status, notes
  }
};

export const todoForm = () => {
 const markup = `
              <div class='col-md-12 todoForm'>
              <h3>Enter Todo Information</h3>
              <div class='row'>
               <div class='col-md-6'>
                  <div class="form-group row">
                     <label for="title" class="col-md-2">Title</label> 
                     <div class="col-sm-10">
                      <input type="text" class="form-control" id="title" placeholder="">
                     </div>
                  </div>
                  <div class="form-group row">
                    <label for="desc" class="col-md-2">Description</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="desc" placeholder="">
                   </div>
                  </div>
                  <div class="form-group row">
                    <label for="date" class="col-md-2">Due date</label>
                    <div class="col-sm-10">
                     <input type="date" class="form-control" id="date" placeholder="">
                    </div>
                  </div>
              </div>
              <div class='col-md-6'>
                <div class="form-group row">
                  <label for="priority" class="col-md-2">Priority</label>
                  <div class="col-sm-10">
                    <select class="form-control" id="priority">
                      <option>Normal</option>
                      <option>Low</option>
                      <option>High</option>
                    </select>
                 </div>
                </div>
                <div class="form-group row">
                  <label for="status" class="col-md-2">Status</label>
                    <div class="col-sm-10">
                     <select class="form-control" id="status">
                      <option>New</option>
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                    </div>
                 </div>
                 <div class="form-group row">
                  <label for="notes" class="col-md-2">Notes</label>
                  <div class="col-sm-10">
                    <textarea class="form-control" id="notes" rows="1"></textarea>
                  </div>
                 </div>
                </div>
              </div>
              <div class="form-group row">
                 <div class='col-sm-7'></div>
                 <div class="col-sm-5">
                  <button type="button" class="btn btn-info btn-block" id="todoBtn" >Add to project</button>
                </div>
              </div>
              </div>`;
  elements.actionPanel.innerHTML = markup;
};

export const getProjectInput = () => {
   return elements.project.value;
  };

  export const projectOption = (project) => {
    let option = document.createElement('option');
    let nodeText = document.createTextNode(project);
    option.appendChild(nodeText);
    uiController.domElementId('selProject').appendChild(option);
  };

  export const projectDisplay = (project) => {
      let node = document.createElement('li');
      let text = document.createTextNode(project);
      node.appendChild(text);
      uiController.domElementId('projectsPanel').appendChild(node);
  };