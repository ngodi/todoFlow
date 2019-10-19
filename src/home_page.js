import uiController  from './ui_control';

const homePage = (() => {
  const makeInputs = (element, id, placeHolder) => {
    const inputFields = ['projectName', 'todoTitle', 'todoDesc',];
  };
  const makeSelect = (element, id, placeHolder) => {
    const selectFields = ['todoPriority', 'todoStatus'];
  };
  const  displayTodoForm = () => {
     const contentNode = uiController.domElementClass('greeting');
  
     const todoDueDate = uiController.addNode('input');
     const todoPriority = uiController.addNode('input');
     uiController.addAttribute(todoPriority, 'type', 'text');
     const todoNotes = uiController.addNode('input');
     const todoStatus = uiController.addNode('input');
     uiController.replaceNode('left-content', todoPriority, contentNode);
    };
 

    return {displayTodoForm }
})();

export default homePage;