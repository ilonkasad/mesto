import  Api from './Api.js';
import  Card  from './Card.js';
import  FormValidator  from './FormValidator.js';
import  Section  from './Section.js';
import { editCardOpen, addCardOpen, editSubmitHandler, addSubmitHandler, avatarSubmitHandler, closeByPopup} from './utils.js';
import {editButton, popupOverlayEdit, popupOverlayAdd, popupOverlayView, popupOverlaySubmit, popupOverlayAvatar, editModal, addModal, avatarModal,
        closeButtonEdit, closeButtonView, closeButtonSubmit, closeButtonAvatar, closeButtonAdd, addButton, avatarButton, validatorParams, submitButtonSelector} from './constants.js';
import  PopupWithForm  from './PopupWithForm.js';
import  PopupWithImage  from './PopupWithImage.js';
import  PopupWithSubmit  from './PopupWithSubmit.js';
import  UserInfo  from './UserInfo.js';
import '../pages/index.css';
export let dataInfo = null;
export const inputValues = new UserInfo(".profile__title",".profile__subtitle");
const popupView = new PopupWithImage(".popup_overlay-view", ".popup__image", ".popup__subtitle", ".popup__btn-close");
const popupSubmit = new PopupWithSubmit(".popup_overlay-submit",null);
popupView.setEventListeners(closeButtonView);

export const api = new Api(
  {
  infoUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/users/me',
  cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/cards',
  avaUrl: 'https://mesto.nomoreparties.co/v1/cohort-18/users/me/avatar',
  headers: {
    'authorization' : 'c65ebf99-c03c-4506-8c9d-5c6429dc291f',
    'Content-Type': 'application/json'}
  },
  {
    btnUserInfo: editModal.querySelector(submitButtonSelector),
    btnNewCard: addModal.querySelector(submitButtonSelector),
    btnUpdAva: avatarModal.querySelector(submitButtonSelector),
    btnLoadingTxt: "Сохранение...",
    btnSaveTxt: "Сохранить",
    btnCreateTxt: "Создать"
  }
); 

api.getAllNeededData().then(data => {
  const [dataUserInfo, dataCards] = data;
  dataInfo = dataUserInfo;
  inputValues.setUserInfo(dataUserInfo.name, dataUserInfo.about);
  loadCards(dataCards);
})

// load Cards----------------------------------------------------------------------
function loadCards(dataCards) {
  const cardList = new Section({
    items: dataCards,
    renderer: (item) => {
      cardList.addItem(createCard(item.name, item.link, item.likes, item._id, item.owner._id));
    }
  }, ".elements");
  cardList.renderItems();
}

export  function createCard(name, link, likes, id, ownerId) {
  const card = new Card (
    {
      data: {name, link, likes, id, ownerId}, 
      handleCardClick: (evt) => popupView.open(evt.target.getAttribute("src"), evt.target.parentElement.querySelector(".elements__title").textContent),
      handleDeleteClick: ()=> { popupSubmit.setSubmitAction(()=>api.removeCard(id)
                                                                    .then(res => card.partForRemove.remove())
                                                                    .catch(err => console.error(err)));
                                 popupSubmit.setEventListeners(closeButtonSubmit); 
                                 popupSubmit.open(); 
                                },
      handleLikeClick: ()=> { if (card.checkCardHasMyLike()){
                                api.dislikeCard(id)
                                .then(res=>card._likesValue = res.likes)
                                .then(card.putLikeCounts(card._likesValue.length-1));
                              }
                              else {
                                api.likeCard(id)
                                .then(res=>card._likesValue = res.likes)
                                .then(card.putLikeCounts(card._likesValue.length+1));
                              }                               
                           }
    },
    "#element-template"
  );
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


// about Avatar Form---------------------------------------------------------------
const popupAvatar = new PopupWithForm(".popup_overlay-avatar", avatarSubmitHandler, ".popup__field_type_avatar");
popupAvatar.setEventListeners(closeButtonAvatar);
export const avatarValidator = new FormValidator(validatorParams, avatarModal);
avatarValidator.enableValidation();
avatarButton.addEventListener("click", () => addCardOpen(popupAvatar));

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
popupOverlaySubmit.addEventListener("click", (evt) =>
closeByPopup(evt, popupOverlaySubmit)
);
popupOverlayAvatar.addEventListener("click", (evt) =>
closeByPopup(evt, popupOverlayAvatar)
);