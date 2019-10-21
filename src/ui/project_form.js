export const projectForm = () => {
    const inputForm = `<form>
    <div class="form-group">
      <label for="title">Enter project name</label>
      <input type="text" class="form-control" id="project" placeholder="">
    </div>
    <span>OR</span>
    <div class="form-group">
      <label for="priority">Select existing project</label>
      <select class="form-control" id="select">
        <option></option>
      </select>
    </div>
    <input type="submit" class="form-control btn btn-info" id="submit" value="Create project">
  </form>
    `;
    document.querySelector('.greeting').insertAdjacentHTML('beforeend', inputForm);
    document.querySelector('#kick').setAttribute('class', 'hidden');
  };
  
  export default projectForm;