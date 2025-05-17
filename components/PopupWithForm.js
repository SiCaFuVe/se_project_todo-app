import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup_input");
    const values = {};
    this._inputList.forEach((input) => {
      console.log("name attribute", input.name);
    });
    console.log(this._inputList);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const InputValues = this._getInputValues();
      this._handleFormSubmit();
    });
  }
}
export default PopupWithForm;
