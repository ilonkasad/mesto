import { editValidator, addValidator, createCard, inputValues } from './index.js';
import  Section  from './Section.js';
import { closeButtonEdit, closeButtonAdd, popupName, popupProfession } from './constants.js';

 export function editCardOpen(modal) {
   modal.open();
   inputValues.getUserInfo();
   popupName.value = inputValues._profileTitle;
   popupProfession.value = inputValues._profileSubTitle;
   editValidator.clearError();
  }

 export function addCardOpen(modal) {
    modal.open();
    addValidator.clearError();
  }

 export function editSubmitHandler({name, profession}) {
    inputValues.setUserInfo(name, profession);
    closeButtonEdit.click();
  }
  
 export function addSubmitHandler({nameCard, linkCard}) {
    const cardAdded = new Section({
      renderer: () => {
        cardAdded.addItem(createCard(nameCard, linkCard));
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
  
  