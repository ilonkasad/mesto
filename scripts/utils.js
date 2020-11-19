import { editValidator, addValidator, addCard } from './index.js';

import {viewModal, popupImage, popupSubtitle, popupName, popupProfession, popupTitle, popupLink, closeButtonEdit, 
        closeButtonAdd, profileTitle, profileSubTitle} from './constants.js';

export function viewCard(evt) {
    toggleModal(viewModal);
    popupImage.setAttribute("src", evt.target.getAttribute("src"));
    popupSubtitle.textContent = evt.target.parentElement.querySelector(".elements__title").textContent;
  }

 export function toggleModal(modal) {
  modal.closest("div").classList.toggle("popup_active");
  modal.classList.toggle("popup_active");  
    if (modal.classList.contains("popup_active")) {
        document.addEventListener("keydown", closeByEsc);
    }
    else {
        document.removeEventListener("keydown", closeByEsc);
    }
  }

 export function editCardOpen(modal) {
    toggleModal(modal);
    popupName.value = profileTitle.textContent;
    popupProfession.value = profileSubTitle.textContent;
    editValidator._clearError();
  }
 export function addCardOpen(modal) {
    toggleModal(modal);
    addValidator._clearError();
  }

 export function editSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupName.value;
    profileSubTitle.textContent = popupProfession.value;
    closeButtonEdit.click();
  }
  
 export function addSubmitHandler(evt) {
    evt.preventDefault();
    addCard(popupTitle.value, popupLink.value);
    popupTitle.value = "";
    popupLink.value = "";
    closeButtonAdd.click();
  }
  
 function closeByEsc(evt) {
    const { key } = evt;
    if (key === "Escape") {
      toggleModal(findActiveModal());
    }
  }
  
 export function closeByPopup(evt,modal) {
    console.log(evt);
    if (evt.target.classList.contains('popup')) {
      toggleModal(modal);
    }
  }
  
  function findActiveModal() {
    return document.querySelector(".popup_active .popup__container");
  }
  

  