import  Api from './Api.js';
import  Card  from './Card.js';
import  FormValidator  from './FormValidator.js';
import  Section  from './Section.js';
import { editCardOpen, addCardOpen, editSubmitHandler, addSubmitHandler, closeByPopup} from './utils.js';
import {editButton, popupOverlayEdit, popupOverlayAdd, popupOverlayView, editModal, addModal, closeButtonEdit, closeButtonView,
        closeButtonAdd, addButton, validatorParams} from './constants.js';
import  PopupWithForm  from './PopupWithForm.js';
import  PopupWithImage  from './PopupWithImage.js';
import  UserInfo  from './UserInfo.js';
import '../pages/index.css';

export const inputValues = new UserInfo(".profile__title",".profile__subtitle");
const popupView = new PopupWithImage(".popup_overlay-view", ".popup__image", ".popup__subtitle", ".popup__btn-close");
popupView.setEventListeners(closeButtonView);
export let dataInfo = null;

export const api = new Api({
  infoUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/users/me',
  cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/cards',
  headers: {
    'authorization' : 'c65ebf99-c03c-4506-8c9d-5c6429dc291f',
    'Content-Type': 'application/json'
  }
}); 

api.getAllNeededData().then(data => {
  const [dataUserInfo, dataCards] = data;
  dataInfo =dataUserInfo; 
  inputValues.setUserInfo(dataUserInfo.name, dataUserInfo.about);
  loadCards(dataCards);
})

// load Cards----------------------------------------------------------------------
function loadCards(dataCards) {
  const cardList = new Section({
    items: dataCards,
    renderer: (item) => {
      cardList.addItem(createCard(item.name, item.link, item.likes));
    }
  }, ".elements");
  cardList.renderItems();
}

export  function createCard(name, link, likes) {
  const card = new Card (name, link, likes, "#element-template", ()=>{
    card.createCardElement().addEventListener("click", (evt) => popupView.open(evt.target.getAttribute("src"), evt.target.parentElement.querySelector(".elements__title").textContent))});
  return card.generateCard()
}


// about Edit Form----------------------------------------------------------------
const popupEdit = new PopupWithForm(".popup_overlay-edit",  editSubmitHandler, ".popup__field_type_name", ".popup__field_type_profession");
popupEdit.setEventListeners(closeButtonEdit);
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

