class FormValidator {
  constructor(settings, formEL) {
    this._settings = settings;
    this._inputSelector = settings._inputSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
    this._errorCLass = settings._errorCLass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._formEl = formEL;
  }

  enableValidation() {}
}

export default FormValidator;
