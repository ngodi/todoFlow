import dom from './dom'

export  const elements = {
     selProject: dom.domElementId('selProject'),
     title: dom.domElementId('title'),
     desc: dom.domElementId('desc'),
     dueDate: dom.domElementId('date'),
     priority: dom.domElementId('priority'),
     status: dom.domElementId('status'),
     newProjectBtn: dom.domElementId('newProjectBtn'),
     newProject: dom.domElementId('newProject'),
     projectForm: dom.domElementClass('projectForm'),
     todoBtn: dom.domElementId('todoBtn'),
     errors: dom.domElementClass('errors'),
     todoPanel: dom.domElementId('todoPanel'),
     projectHeading: dom.domElementClass('projectHeading'),
     detailsPanel: dom.domElementId('detailsPanel'),
     detailsHeading: dom.domElementId('detailsHeading'),
};

export default elements;