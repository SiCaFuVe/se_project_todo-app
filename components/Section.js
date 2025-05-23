class Section {
  constructor({ items, renderer, containerElement }) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerElement);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  addItem(element) {
    this._containerElement.append(element);
  }
}

export default Section;
