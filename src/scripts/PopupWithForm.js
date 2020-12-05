
import  Popup  from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, callbackSubmit, popupTitleSelector, popupLinkSelector) {
        super(popupSelector);
        this._callSubmit = callbackSubmit;
        this._popupTitle = popupTitleSelector;
        this._popupLink = popupLinkSelector;
    }

    setEventListeners(closeButton) {
        super.setEventListeners(closeButton);
        this._popup.addEventListener("submit", this._callSubmit); //по комментарию ревью совсем не поняла как исправлять. Распишите пожалуйста подробнее что не так. Спасибо.
    }

    close() {
        super.close();
        this._popup.querySelector(this._popupTitle).value ='';
        this._popup.querySelector(this._popupLink).value = '';
    }

}