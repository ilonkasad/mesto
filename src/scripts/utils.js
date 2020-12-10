import { editValidator, addValidator, createCard, inputValues, dataInfo, api } from './index.js';
import  Section  from './Section.js';
import { closeButtonEdit, closeButtonAdd, popupName, popupProfession } from './constants.js';

 export function editCardOpen(modal) {
   modal.open();
   const info = inputValues.getUserInfo(dataInfo);
   popupName.value = info.name;
   popupProfession.value = info.about;
   editValidator.clearError();
  }

 export function addCardOpen(modal) {
    modal.open();
    addValidator.clearError();
  }

 export function editSubmitHandler({usrName, usrProfession}) {
    inputValues.setUserInfo(usrName, usrProfession);
    api.updateUserInfo(
      {
        name: usrName,
        about: usrProfession
      }
    );
    closeButtonEdit.click();
  }
  
 export function addSubmitHandler({nameCard, linkCard}) {
    const cardAdded = new Section({
      renderer: () => {
        cardAdded.addItem(createCard(nameCard, linkCard));
      }
    }, ".elements");
    cardAdded.renderItem();
    api.addNewCard(
      {
        name: nameCard,
        link: linkCard
      }
    );
    closeButtonAdd.click();
  }
  
 export function closeByPopup(evt,modal) {
    if (evt.target.classList.contains('popup')) {
       modal.classList.remove("popup_active"); 
    }
  }
  
  