import uiController from './ui_control';
import elements from './dom_elements';

export const getTodoInput = () =>{
  let project = uiController.domElementId('selProject').value;
  let title = uiController.domElementId('title').value;
  let desc = uiController.domElementId('desc').value;
  let dueDate = uiController.domElementId('date').value;
  let priority = uiController.domElementId('priority').value;
  let status = uiController.domElementId('status').value;

  return {
    project, title, desc, dueDate, priority, status
  }
};

export const getProjectInput = () => {
  let proValue = elements.newProject.value;
  elements.newProject.value = '';
   return proValue;
  };

export const getProjectHeading = () => {
 return uiController.domElementId('selProject').value;
};