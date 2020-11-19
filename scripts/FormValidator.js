export class FormValidator {
    constructor(settings, formElem){
        this._settings = settings;
        this._formElem = formElem;
        this._buttonElement = this._formElem.querySelector(this._settings.submitButtonSelector);
    }

     enableValidation() {
          this._formElem.addEventListener('submit', (e) => {
          e.preventDefault()
        });
          this._setEventListeners();
        }
      
      _setEventListeners() {
        this._inputList = Array.from(this._formElem.querySelectorAll(this._settings.inputSelector));
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
          inputElement.addEventListener("input", ()=> {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
      }

      _toggleButtonState() {
        if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(this._settings.inactiveButtonClass);
          this._buttonElement.setAttribute("disabled", true);
        } else {
          this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
          this._buttonElement.removeAttribute("disabled");
        }
      }
      
      _clearError() {
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
        });
      }
      
      _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      }
      
       _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
        } else {
          this._hideInputError(inputElement);
        }
      }
      
      _showInputError(inputElement) {
        this._errorElement = this._formElem.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        this._errorElement.textContent =  inputElement.validationMessage;
        this._errorElement.classList.add(this._settings.errorClass);
      }
      
       _hideInputError(inputElement) {
        this._errorElement = this._formElem.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        this._errorElement.classList.remove(this._settings.errorClass);
        this._errorElement.textContent = "";
      }
}