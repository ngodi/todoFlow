import uiController from './ui_control';
import elements from './dom_elements';

  export const projectOption = (project) => {
    let option = document.createElement('option');
    let nodeText = document.createTextNode(project);
    option.appendChild(nodeText);
    elements.selProject.appendChild(option);
  };

  export const projectDisplay = (project) => {
      let node = document.createElement('li');
      node.setAttribute('class', 'projectItem');
      node.setAttribute('id', project);
      let text = document.createTextNode(project);
      node.appendChild(text);
      elements.projectsPanel.appendChild(node);
  };

  export const displayErrors = (error) => {
   elements.errors.innerHTML = error;
  };

 