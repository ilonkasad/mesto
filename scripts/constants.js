export const content = document.querySelector(".content");
export const editButton = document.querySelector(".profile__edit-button");
export const popup = document.querySelector(".popup");
export const popupOverlayEdit = document.querySelector(".popup_overlay-edit");
export const popupOverlayAdd = document.querySelector(".popup_overlay-add");
export const popupOverlayView = document.querySelector(".popup_overlay-view");
export const popupContent = document.querySelector(".popup__content");

export const editModal = document.querySelector(".popup__container_type_edit");
export const addModal = document.querySelector(".popup__container_type_add");
export const viewModal = document.querySelector(".popup__container_type_view");
export const imgModal = document.querySelector(".popup_view");
export const popupImage = viewModal.querySelector(".popup__image");
export const popupSubtitle = viewModal.querySelector(".popup__subtitle");

export const popupName = editModal.querySelector(".popup__field_type_name");
export const popupProfession = editModal.querySelector(".popup__field_type_profession");
export const popupTitle = addModal.querySelector(".popup__field_type_name");
export const popupLink = addModal.querySelector(".popup__field_type_profession");

export const closeButtonEdit = editModal.querySelector(".popup__btn-close");
export const closeButtonAdd = addModal.querySelector(".popup__btn-close");
export const closeButtonView = viewModal.querySelector(".popup__btn-close");

export const addButton = document.querySelector(".profile__add-button");
export const cardContainer = document.querySelector(".elements");
export const cardTemplate = document.querySelector("#element-template");

export const profileTitle = document.querySelector(".profile__title");
export const profileSubTitle = document.querySelector(".profile__subtitle");

export const validatorParams  = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__btn-save",
  inactiveButtonClass: "popup__btn-save_disabled",
  inputErrorClass: "popup__field_type-error",
  errorClass: "popup__error_active",
};

export const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];