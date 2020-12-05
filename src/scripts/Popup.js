import  { keyEscape } from './constants.js';
export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add("popup_active"); 
        document.addEventListener("keydown", this._handleEscClose.bind(this));
    }

    close() {
        this._popup.classList.remove("popup_active"); 
        document.removeEventListener("keydown", this._handleEscClose.bind(this));
    }

    _handleEscClose(evt){
        const { key } = evt;
        if (key === keyEscape) {
            this.close(); 
         }
    }

    setEventListeners(closeButton){
        closeButton.addEventListener("click",  this.close.bind(this));
    }

}