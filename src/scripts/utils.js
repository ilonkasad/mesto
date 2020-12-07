import { editValidator, addValidator, createCard, inputValues } from './index.js';
import  Section  from './Section.js';
import {closeButtonEdit, closeButtonAdd} from './constants.js';

 export function editCardOpen(modal) {
   modal.open();
   inputValues.getUserInfo();
   editValidator.clearError();
  }

 export function addCardOpen(modal) {
    modal.open();
    addValidator.clearError();
  }

 export function editSubmitHandler() {
    inputValues.setUserInfo();
    closeButtonEdit.click();
  }
  
 export function addSubmitHandler(cardTitle, cardLink) {
    const cardAdded = new Section({
      renderer: () => {
        cardAdded.addItem(createCard(cardTitle, cardLink));
      }
    }, ".elements");
    cardAdded.renderItem();
    closeButtonAdd.click();
  }
  
 export function closeByPopup(evt,modal) {
    if (evt.target.classList.contains('popup')) {
       modal.classList.remove("popup_active"); 
    }
  }
  
  