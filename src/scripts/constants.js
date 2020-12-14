export const content = document.querySelector(".content");
export const editButton = document.querySelector(".profile__edit-button");
export const popup = document.querySelector(".popup");
export const popupOverlayEdit = document.querySelector(".popup_overlay-edit");
export const popupOverlayAdd = document.querySelector(".popup_overlay-add");
export const popupOverlayView = document.querySelector(".popup_overlay-view");
export const popupOverlaySubmit = document.querySelector(".popup_overlay-submit");
export const popupOverlayAvatar = document.querySelector(".popup_overlay-avatar");
export const popupContent = document.querySelector(".popup__content");

export const editModal = document.querySelector(".popup__container_type_edit");
export const addModal = document.querySelector(".popup__container_type_add");
export const viewModal = document.querySelector(".popup__container_type_view");
export const submitModal = document.querySelector(".popup__container_type_submit");
export const avatarModal = document.querySelector(".popup__container_type_avatar");
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
export const closeButtonSubmit = submitModal.querySelector(".popup__btn-close");
export const closeButtonAvatar = avatarModal.querySelector(".popup__btn-close");

export const addButton = document.querySelector(".profile__add-button");
export const cardContainer = document.querySelector(".elements");
export const cardTemplate = document.querySelector("#element-template");

export const submitButtonSelector= ".popup__btn-save";
export const avatarSelector =".profile__avatar";
export const avatarButton = document.querySelector(".profile__avatar-button");

export const profileTitle = document.querySelector(".profile__title");
export const profileSubTitle = document.querySelector(".profile__subtitle");

export const keyEscape = "Escape";

export const defaultLike = [];
export const defaultOwnerId = "18b1810a6104adf44905dc4f";
export const defaultId = '777';

export const btnUserInfo = editModal.querySelector(submitButtonSelector);
export const btnNewCard = addModal.querySelector(submitButtonSelector);
export const btnUpdAva = avatarModal.querySelector(submitButtonSelector);
export const btnLoadingTxt = "Сохранение...";
export const btnSaveTxt = "Сохранить";
export const btnCreateTxt = "Создать";

export const validatorParams  = {
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__btn-save",
  inactiveButtonClass: "popup__btn-save_disabled",
  inputErrorClass: "popup__field_type-error",
  errorClass: "popup__error_active",
};