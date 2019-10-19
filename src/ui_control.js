import TodoList from './todo'

const uiController = (() => {
    const addNode = element => document.createElement(element);

    const addAttribute = (element, property, value) => {
      element.setAttribute(property, value);
    };

    const domElement = element => {
      return document.querySelector(element);
    };

    const addText = text => document.createTextNode(text);

    const appendToNode = (parentNode, childNode) => {
      parentNode.appendChild(childNode);
    };
    
    const appendToDom = (parentId, childNode) => {
      domElement(`#${parentId}`).appendChild(childNode);
    };
    
 

    return { addNode, addAttribute, addText, appendToNode, appendToDom,}
})();

export default uiController;
