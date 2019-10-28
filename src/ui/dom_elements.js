import uiController from './ui_control'

export  const elements = {
     selProject: uiController.domElementId('selProject'),
     newProjectBtn: uiController.domElementId('newProjectBtn'),
     newProject: uiController.domElementId('newProject'),
     projectForm: uiController.domElementClass('projectForm'),
     todoBtn: uiController.domElementId('todoBtn'),
     errors: uiController.domElementClass('errors'),
     todoPanel: uiController.domElementId('todoPanel'),
     projectHeading: uiController.domElementClass('projectHeading'),
     detailsPanel: uiController.domElementId('detailsPanel'),
};

export default elements;