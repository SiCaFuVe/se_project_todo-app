class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");

    this._handleOverlayClick = this._handleOverlayClick.bind(this);
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _handleOverlayClick(evt) {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
    document.addEventListener("click", this._handleOverlayClick);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
    document.removeEventListener("click", this._handleOverlayClick);
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains(".popup__content") ||
        evt.target.classList.contains(".popup__close")
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
