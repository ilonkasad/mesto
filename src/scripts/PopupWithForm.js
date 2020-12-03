
import  Popup  from './Popup.js';
import  {popupTitle, popupLink} from './constants.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, callbackSubmit) {
        super(popupSelector);
        this._callSubmit = callbackSubmit;
    }

    setEventListeners(closeButton) {
        super.setEventListeners(closeButton);
        this._popup.addEventListener("submit", this._callSubmit);
    }

    toggle() {
        super.toggle();
        if (this._popup.classList.contains("popup_active")===false){
            popupTitle.value = "";
            popupLink.value = "";
        } 
      
    }

}