import { Card } from './Card.js';

import { FormValidator } from './FormValidator.js';

import { editCardOpen, addCardOpen, editSubmitHandler, addSubmitHandler, toggleModal, closeByPopup} from './utils.js';

import {editButton, popupOverlayEdit, popupOverlayAdd, popupOverlayView, editModal, addModal, closeButtonEdit,
        closeButtonAdd, closeButtonView, addButton, cardContainer, validatorParams, initialCards} from './constants.js';

  function loadCards() {
      initialCards.forEach((item) => {
         addCard(item.name, item.link);
    });
  }
 
  export function addCard(name, link) {
    const card =  createCard(name, link)
    cardContainer.prepend(card);
  }
  
  function createCard(name, link) {
    const card = new Card (name, link, "#element-template");
    return card.generateCard()
  }

export const editValidator = new FormValidator(validatorParams, editModal);
export const addValidator = new FormValidator(validatorParams, addModal);

editValidator.enableValidation();
addValidator.enableValidation();
  
loadCards();

editButton.addEventListener("click", () => editCardOpen(popupOverlayEdit));
addButton.addEventListener("click", () => addCardOpen(popupOverlayAdd));

editModal.addEventListener("submit", editSubmitHandler);
addModal.addEventListener("submit", addSubmitHandler);

popupOverlayEdit.addEventListener("click", (evt) =>
  closeByPopup(evt, popupOverlayEdit)
);
popupOverlayAdd.addEventListener("click", (evt) =>
  closeByPopup(evt, popupOverlayAdd)
);
popupOverlayView.addEventListener("click", (evt) =>
  closeByPopup(evt, popupOverlayView)
);
closeButtonEdit.addEventListener("click", () => toggleModal(popupOverlayEdit));
closeButtonAdd.addEventListener("click", () => toggleModal(popupOverlayAdd));
closeButtonView.addEventListener("click", () => toggleModal(popupOverlayView));