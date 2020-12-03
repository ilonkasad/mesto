import { editValidator, addValidator, createCard, inputValues } from './index.js';
import  Section  from './Section.js';
import {popupTitle, popupLink, closeButtonEdit, closeButtonAdd} from './constants.js';

 export function editCardOpen(modal) {
   modal.toggle();
   inputValues.getUserInfo();
   editValidator.clearError();
  }

 export function addCardOpen(modal) {
    modal.toggle();
    addValidator.clearError();
  }

 export function editSubmitHandler(evt) {
    evt.preventDefault();
    inputValues.setUserInfo();
    closeButtonEdit.click();
  }
  
 export function addSubmitHandler(evt) {
    evt.preventDefault();
    const cardAdded = new Section({
      renderer: () => {
        cardAdded._addItem(createCard(popupTitle.value, popupLink.value));
      }
    }, ".elements");
    cardAdded.renderItem();
    closeButtonAdd.click();
  }
  
 export function closeByPopup(evt,modal) {
    if (evt.target.classList.contains('popup')) {
       modal.classList.toggle("popup_active"); 
    }
  }
  
  