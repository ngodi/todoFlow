import dom from './dom';
import elements from './dom_elements';

export const getTodoInput = () =>{
  let project = elements.selProject.value;
  let title = elements.title.value;
  let desc = elements.desc.value;
  let dueDate = elements.dueDate.value;
  let priority = elements.priority.value;
  let status = elements.status.value;

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
 return elements.selProject.value;
};