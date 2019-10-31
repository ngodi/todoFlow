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
    <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">${todo.title}</th>
        <th scope="col"></th>
        <th scope="col"><button class='btn btn-sm btn-danger'>delete</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Status</th>
        <td>${todo.status}</td>
        <td></td>
        <td><button class='btn btn-sm btn-success'>update</button></td>
      </tr>
      <tr>
        <th scope="row">Priority</th>
        <td>${todo.priority}</td>
        <td></td>
        <td><button class='btn btn-sm btn-info'>change</button></td>
      </tr>
      <tr>
        <th scope="row">Due date</th>
        <td>${todo.dueDate}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">Description</th>
        <td colspan="2">${todo.description}</td>
        <td><button class='btn btn-sm btn-info'>edit</button></td>
      </tr>
    </tbody>
  </table>
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
 