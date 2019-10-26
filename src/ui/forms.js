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


export const getProjectInput = () => {
  let proValue = elements.project.value;
  elements.project.value = '';
   return proValue;
  };

  export const projectOption = (project) => {
    let option = document.createElement('option');
    let nodeText = document.createTextNode(project);
    option.appendChild(nodeText);
    uiController.domElementId('selProject').appendChild(option);
  };

  export const projectDisplay = (project) => {
      let node = document.createElement('li');
      node.setAttribute('class', 'projectItem');
      let text = document.createTextNode(project);
      node.appendChild(text);
      elements.projectsPanel.appendChild(node);
  };
  