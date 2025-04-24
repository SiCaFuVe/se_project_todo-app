class Todo {
  constructor(data, selector) {
    this._data = data;
    this._template = document.querySelector(selector);
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _formatDate(dateString) {
    this._todoDate = this._todoElement.querySelector(".todo__date");

    const date = new Date(dateString);
    const formatedDate = !isNaN(date)
      ? date.toLocaleDateString("en-Us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "Invalid Date";
    this._todoDate.textContent = `Due: ${formatedDate}`;
  }

  getView() {
    this._todoElement = this._template.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");

    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    todoNameEl.textContent = this._data.name;

    this._formatDate(this._data.date);
    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
