import todoForm from './todo_form'

export const projectForm = () => {
    const inputForm = `
    <div>
      <label for="title">Enter project name</label>
      <input type="text" class="form-control" id="project" placeholder="">
    </div>
    <span>OR</span>
    <div>
      <label for="project">Select existing project</label>
      <select class="form-control" id="select">
        <option></option>
      </select>
    </div>
    <button type="button" class="btn btn-info" id="projectBtn">Create project</button>
  
    `;
    document.querySelector('.greeting').insertAdjacentHTML('beforeend', inputForm);
    document.querySelector('#kick').setAttribute('class', 'hidden');
    document.querySelector('#projectBtn').addEventListener('click', todoForm);
  };
  
  export default projectForm;