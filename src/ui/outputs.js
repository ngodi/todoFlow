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
                      <div class='col-md-6'>
                        <p class='blue-back active detailsItem'>${todo.title} Details<button class='btn btn-danger btn-sm deleteBtn' id='${todo.title}Delete'>X</button>
                        </p>   
                        
                      <p class='blue-back detailsItem'>STATUS: ${todo.status}<button class='btn btn-danger btn-sm deleteBtn' id='${todo.status}'>change</button></p>                     
                      </div>
                      <div class='col-md-6'>
                        <p class='blue-back detailsItem'>PRIORITY: ${todo.priority}<button class='btn btn-danger btn-sm deleteBtn' id='${todo.priority}'>change</button></p>
                        <p class='blue-back detailsItem'>DUE DATE: ${todo.dueDate}<button class='btn btn-danger btn-sm deleteBtn' id='${todo.dueDate}Delete'>change</button></p>
                       </div>
                    </div>
                    <div class='row'>  
                      <div class='col-md-12'>
                       <p class='center-text  blue-back'>TASK DESCRIPTION</p>
                       <p>${todo.description}<button class='btn btn-danger btn-xs deleteBtn' id='${todo.description}'>edit</button></p>
                       </div>
                    </div>
                  </div>`;
    elements.detailsPanel.innerHTML = markup;
  };

  export const displayErrors = (error) => {
   elements.errors.innerHTML = error;
  };

  export const showProjectHeading = (project) => {
   elements.projectHeading.innerHTML = `${project} - Project Todo List <button class='btn btn-danger btn-xs deleteBtn' id='${project}Delete'>Delete</button>`;
   elements.todoBtn.innerHTML = `+ Add to ${project} Project`;
  };
 