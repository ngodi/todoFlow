import uiController from './ui_control';

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
  document.querySelector('#projectForm').classList.add('hidden');

  const project = uiController.domElementId('project').value;
  return project;
};

export const projectForm = () => {
    document.querySelector('#projectForm').classList.remove('hidden');
  };
