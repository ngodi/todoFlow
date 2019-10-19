import { uiController } from './ui_control';
  
  const heading = () => {
    const headingNode = addNode('div');
    addAttribute(headingNode, 'class', 'heading');
    const hNode = addNode('h2');
    const hText = addText('Favorite Restaurant');
    appendToNode(hNode, hText);
    appendToNode(headingNode, hNode);
    appendToDom('content', headingNode);
  };
  
  const navMenu = () => {
    const ul = addNode('ul');
    const listItems = [['About Us', 'aboutBtn'], ['Contact Us', 'contactBtn'], ['Our Schedule', 'scheduleBtn'], ['Today Menu', 'menuBtn']];
  
    const renderListItems = (text, id) => {
      const li = addNode('li');
      addAttribute(li, 'id', id);
      const listText = addText(text);
      appendToNode(li, listText);
      appendToNode(ul, li);
    };
    listItems.forEach((element) => {
      renderListItems(element[0], element[1]);
    });
    document.querySelector('.heading').appendChild(ul);
  };
  
  const mainContent = () => {
    const mainNode = addNode('div');
    addAttribute(mainNode, 'class', 'rest-data');
    addAttribute(mainNode, 'id', 'rest-data');
  
    const imgNode = addNode('img');
    const imgLink = 'https://www.athenaspahotel.com/media/cache/jadro_resize/rc/uJmoXtmd1563349268/jadroRoot/medias/_a1a8429.jpg';
    addAttribute(imgNode, 'src', imgLink);
    appendToNode(mainNode, imgNode);
  
    const contentNode = addNode('div');
    addAttribute(contentNode, 'class', 'rest-data-right');
    addAttribute(contentNode, 'id', 'rest-data-right');
    appendToNode(mainNode, contentNode);
  
    appendToDom('content', mainNode);
  };
  
  const footer = () => {
    const footerNode = addNode('div');
    addAttribute(footerNode, 'class', 'footer');
    const footerText = addText('Our Staffs');
    appendToNode(footerNode, footerText);
    appendToDom('content', footerNode);
  };
  
  export {
    heading, navMenu, mainContent, footer,
  };
  