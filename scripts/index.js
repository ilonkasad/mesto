import { Card } from './Card.js';

import { FormValidator } from './FormValidator.js';

import { editCardOpen, addCardOpen, editSubmitHandler, addSubmitHandler, toggleModal, closeByPopup} from './utils.js';

import {editButton, popupOverlayEdit, popupOverlayAdd, popupOverlayView, editModal, addModal, viewModal, imgModal, closeButtonEdit,
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

editButton.addEventListener("click", () => editCardOpen(editModal));
addButton.addEventListener("click", () => addCardOpen(addModal));

editModal.addEventListener("submit", editSubmitHandler);
addModal.addEventListener("submit", addSubmitHandler);

closeButtonEdit.addEventListener("click", () => toggleModal(editModal));
closeButtonAdd.addEventListener("click", () => toggleModal(addModal));
closeButtonView.addEventListener("click", () => toggleModal(viewModal));

popupOverlayEdit.addEventListener("mousedown", (evt) =>
  closeByPopup(evt, editModal)
);
popupOverlayAdd.addEventListener("mousedown", (evt) =>
  closeByPopup(evt, addModal)
);
popupOverlayView.addEventListener("mousedown", (evt) =>
  closeByPopup(evt, viewModal)
);