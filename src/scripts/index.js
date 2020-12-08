import  Card  from './Card.js';
import  FormValidator  from './FormValidator.js';
import  Section  from './Section.js';
import { editCardOpen, addCardOpen, editSubmitHandler, addSubmitHandler, closeByPopup} from './utils.js';
import {editButton, popupOverlayEdit, popupOverlayAdd, popupOverlayView, editModal, addModal, closeButtonEdit, closeButtonView,
        closeButtonAdd, addButton, validatorParams, initialCards, profileTitle, profileSubTitle} from './constants.js';
import  PopupWithForm  from './PopupWithForm.js';
import  PopupWithImage  from './PopupWithImage.js';
import  UserInfo  from './UserInfo.js';
import '../pages/index.css';

const popupView = new PopupWithImage(".popup_overlay-view", ".popup__image", ".popup__subtitle", ".popup__btn-close");
popupView.setEventListeners(closeButtonView);
// load Cards----------------------------------------------------------------------
  function loadCards() {
    const cardList = new Section({
      items: initialCards,
      renderer: (item) => {
        cardList.addItem(createCard(item.name, item.link));
      }
    }, ".elements");
    cardList.renderItems();
  }

export  function createCard(name, link) {
    const card = new Card (name, link, "#element-template", ()=>{
      card.createImageElement().addEventListener("click", (evt) => popupView.open(evt.target.getAttribute("src"), evt.target.parentElement.querySelector(".elements__title").textContent))});
    return card.generateCard()
  }

  loadCards();

// about Edit Form----------------------------------------------------------------
const popupEdit = new PopupWithForm(".popup_overlay-edit",  editSubmitHandler, ".popup__field_type_name", ".popup__field_type_profession");
popupEdit.setEventListeners(closeButtonEdit);
export const inputValues = new UserInfo(".profile__title",".profile__subtitle");
export const editValidator = new FormValidator(validatorParams, editModal);
editValidator.enableValidation();
editButton.addEventListener("click", () => editCardOpen(popupEdit));


// about Add Form-----------------------------------------------------------------
const popupAdd = new PopupWithForm(".popup_overlay-add", addSubmitHandler, ".popup__field_type_name", ".popup__field_type_profession");
popupAdd.setEventListeners(closeButtonAdd);
export const addValidator = new FormValidator(validatorParams, addModal);
addValidator.enableValidation();
addButton.addEventListener("click", () => addCardOpen(popupAdd));


//---------------------------------------------------------------------------------
popupOverlayEdit.addEventListener("click", (evt) =>
  closeByPopup(evt, popupOverlayEdit)
);
popupOverlayAdd.addEventListener("click", (evt) =>
  closeByPopup(evt, popupOverlayAdd)
);
popupOverlayView.addEventListener("click", (evt) =>
  closeByPopup(evt, popupOverlayView)
);
