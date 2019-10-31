import dom from './dom';
import elements from './dom_elements';

  export const projectOption = (project) => {
    let p = document.createElement('option');
    p.setAttribute('class', 'todoItem');
   p.setAttribute('id', project);
    let nodeText = document.createTextNode(project);
    p.appendChild(nodeText);
    elements.selProject.appendChild(p);
  };
export const setDropdown = () => {
  const projects = (JSON.parse(localStorage.getItem('projects')))? JSON.parse(localStorage.getItem('projects')) : [];
  projects.forEach((project => {
    projectOption(project);
  }));
};

  export const todoDisplay = (todo) => {
      let node = document.createElement('li');
      node.setAttribute('class', 'todoItem');
      node.setAttribute('id', todo);
      let text = document.createTextNode(todo);
      node.appendChild(text);
      elements.todoPanel.appendChild(node);
  };

  export const detailsDisplay = (todo) => {
    let markup = `<div class='col-md-12'>
                    <div class='row'>
                      <div class='col-md-12 detailsItem'>
                        <p class='blue-back'>${todo.title}<span class='deleteBtn' id='${todo.title}Delete'>X</span>
                        </p>
                        <p class='blue-back'>STATUS: ${todo.status}</p>
                        <p class='blue-back'>PRIORITY: ${todo.priority}</p>
                        <p class='blue-back'>DUE DATE: ${todo.dueDate}</p>
                    </div>
                    <div class='col-md-12'>
                      <p class='center-text blue-back'>TASK DESCRIPTION</p>
                      <p>${todo.description}</p>
                      </div>
                    </div>
                 </div>`;
    elements.detailsPanel.innerHTML = markup;
  };

  export const displayErrors = (error) => {
   elements.errors.innerHTML = error;
  };

  export const showProjectHeading = (project) => {
   elements.projectHeading.innerHTML = `${project} - Project Todo List <span class='deleteBtn' id='${project}Delete'>X</span>`;
   elements.todoBtn.innerHTML = `+ Add to ${project} Project`;
  };
 