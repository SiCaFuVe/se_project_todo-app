class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;

    this._updateText();
  }

  updatedCompleted = (increment) => {
    this._completed += increment ? 1 : -1;
    this._updateText();
  };
  // call this when a to-do is deleted, or when a to-do is created via form
  updateTotal = (increment) => {
    this._total = -increment ? 1 : -1;
    this._updateText();
  };

  //finish todo counter
  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
