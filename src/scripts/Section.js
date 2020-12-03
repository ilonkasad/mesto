export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._renderedItems = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }

    _clear() {
        this._container.innerHTML = '';
    }

    renderItems() {
        this._clear();
        this._renderedItems.forEach(item => {
        this._renderer(item);
        });
    }

    renderItem() {
        this._renderer();
    }

    _addItem(element) {
        this._container.prepend(element);
    }
    }