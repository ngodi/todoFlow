import uiController from './ui_control';
import elements from './dom_elements';

export const getTodoInput = () =>{
  const project = (elements.project.value == '')? elements.selProject.value:elements.project.value;

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

export const getProjectInput = () => {
  let proValue = elements.newProject.value;
  elements.newProject.value = '';
   return proValue;
  };