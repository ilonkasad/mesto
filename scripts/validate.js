const objEdit = {
  formSelector: ".popup__container_type_edit",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__btn-save",
  inactiveButtonClass: "popup__btn-save_disabled",
  inputErrorClass: "popup__field_type-error",
  errorClass: "popup__error_active",
};

const objAdd = {
  formSelector: ".popup__container_type_add",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__btn-save",
  inactiveButtonClass: "popup__btn-save_disabled",
  inputErrorClass: "popup__field_type-error",
  errorClass: "popup__error_active",
};

function enableValidation({ formSelector, ...rest }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(form, rest);
  });
}

function setEventListeners(
  formElement,
  {
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
    ...rest
  }
) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function checkInputValidity(
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
}

function showInputError(
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function hideInputError(
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
}
