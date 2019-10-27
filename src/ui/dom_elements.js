import uiController from './ui_control'

export  const elements = {
     selProject: uiController.domElementId('selProject'),
     newProject: uiController.domElementId('newProject'),
     projectForm: uiController.domElementClass('projectForm'),
     actionPanel: uiController.domElementId('actionPanel'),
     projectsPanel: uiController.domElementId('projectsPanel'),
     todoBtn: uiController.domElementId('todoBtn'),
     errors: uiController.domElementClass('errors'),
};

export default elements;