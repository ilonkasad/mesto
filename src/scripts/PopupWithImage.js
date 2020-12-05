import  Popup  from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, imageSelector, subtitleSelector, closeButtonSelector) {
        super(popupSelector);
        this.image = document.querySelector(imageSelector);
        this.subtitle = document.querySelector(subtitleSelector);
        this.closeButton = this._popup.querySelector(closeButtonSelector);
    }

    open(card){
        super.open();
        this.image.setAttribute("src", card.getAttribute("src"));
        this.subtitle.textContent = card.parentElement.querySelector(".elements__title").textContent;
    }
}