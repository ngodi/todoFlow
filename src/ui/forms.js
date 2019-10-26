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
 <div class='todoForm'>
   <h3>Enter Todo Information</h3>
     <div class="form-group row">
        <label for="title" class="col-sm-3">Title</label> 
        <div class="col-sm-8">
         <input type="text" class="form-control" id="title" placeholder="">
        </div>
     </div>
     <div class="form-group row">
       <label for="desc" class="col-sm-3">Description</label>
       <div class="col-sm-8">
         <input type="text" class="form-control" id="desc" placeholder="">
      </div>
     </div>
     <div class="form-group row">
       <label for="date" class="col-sm-3">Due date</label>
       <div class="col-sm-8">
        <input type="date" class="form-control" id="date" placeholder="">
       </div>
     </div>
   <div class="form-group row">
       <label for="priority" class="col-sm-3">Priority</label>
       <div class="col-sm-8">
       <select class="form-control" id="priority">
           <option>Normal</option>
           <option>Low</option>
           <option>High</option>
       </select>
       </div>
   </div>
   <div class="form-group row">
       <label for="status" class="col-sm-3">Status</label>
       <div class="col-sm-8">
           <select class="form-control" id="status">
           <option>New</option>
           <option>Pending</option>
           <option>Completed</option>
       </select>
       </div>
    </div>
    <div class="form-group row">
       <label for="notes" class="col-md-3">Notes</label>
       <div class="col-sm-8">
        <textarea class="form-control" id="notes" rows="3"></textarea>
       </div>
    </div>
    <div class="form-group row">
            <div class="col-sm-3"> 
             <button type="button" class="btn btn-danger close" id="close">close</button>
            </div>
            <div class="col-sm-8">
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
export const projectListHeading = () => {
  let markup = `<div class='projectListHeading sub-heading'>Your Projects</div>`;
  elements.projectsPanel.insertAdjacentHTML('afterbegin', markup);
};
  export const projectDisplay = (project) => {
      let node = document.createElement('li');
      node.setAttribute('class', 'projectItem');
      let text = document.createTextNode(project);
      node.appendChild(text);
      elements.projectsPanel.appendChild(node);
  };
  export const selProjectHeading = () => {
      uiController.domElementId('selProject').addEventListener('change',() =>{
      let selectedProject = document.querySelector('#selProject').value;
      //selectedProject.addClassList('active');
      const markup = `<h3 class='sub-heading'>Project - ${selectedProject} Todos: </h3>`;
      uiController.domElementId('selProjectPanel').innerHTML =  markup;
    });
  };
 