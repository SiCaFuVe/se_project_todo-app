class Todo {
  constructor(data, selector) {
    this._data = data;
    this._template = document.querySelector(selector);
  }

  getView() {
    this._todoElement = this._template.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;
    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);
    // do the todoDate and todo DeleteBtn

    return this._todoElement;
  }
}

export default Todo;
