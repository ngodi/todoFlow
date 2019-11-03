import Todo from '../models/todo'

const dom = (() => {
    const addNode = element => document.createElement(element);

    const addAttribute = (element, property, value) => {
      element.setAttribute(property, value);
    };

    const domElementId = element => {
      return document.getElementById(element);
    };

    const domElementClass = element => {
      return document.getElementsByClassName(element)[0];
    }
    const addText = text => document.createTextNode(text);

    const appendToNode = (parentNode, childNode) => {
      parentNode.appendChild(childNode);
    };

    const replaceNode = (parentClass, newNode, oldNode) => {
      domElementClass(parentClass).replaceChild(newNode, oldNode);
    };
    
    const appendToDom = (parentId, childNode) => {
      domElementId(parentId).appendChild(childNode);
    };
    
 

    return { addNode, addAttribute, domElementId, domElementClass, addText, appendToNode, replaceNode, appendToDom,}
})();

export default dom;
