export const todoForm = () => {
  const inputForm = `<form>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="">
  </div>
  <div class="form-group">
  <label for="title">Description</label>
  <input type="text" class="form-control" id="desc" placeholder="">
</div>
<div class="form-group">
<label for="title">Due date</label>
<input type="date" class="form-control" id="date" placeholder="">
</div>
  <div class="form-group">
    <label for="priority">Select priority</label>
    <select class="form-control" id="select">
      <option>Normal</option>
      <option>Low</option>
      <option>High</option>
    </select>
  </div>
  <div class="form-group">
    <label for="status">Status</label>
    <select class="form-control" id="status">
      <option>New</option>
      <option>Pending</option>
      <option>Completed</option>
    </select>
  </div>
  <div class="form-group">
    <label for="notes">Notes</label>
    <textarea class="form-control" id="notes" rows="3"></textarea>
  </div>
</form>
  `;
  document.querySelector('.greeting').innerHTML = inputForm;
};

export default todoForm;