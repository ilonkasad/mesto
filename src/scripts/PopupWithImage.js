import  Popup  from './Popup.js';
import {closeButtonView} from './constants.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, imageSelector, subtitleSelector) {
        super(popupSelector);
        this.image = document.querySelector(imageSelector);
        this.subtitle = document.querySelector(subtitleSelector);
    }

    open(evt){
        this._toggle();
        if(this._popup.classList.contains("popup_active")){
            this._inputValues(evt);
        } 
    }
    _inputValues(evt){
        this.image.setAttribute("src", evt.target.getAttribute("src"));
        this.subtitle.textContent = evt.target.parentElement.querySelector(".elements__title").textContent;
    }

    _toggle() {
        super.toggle();
        if(this._popup.classList.contains("popup_active")){
            closeButtonView.addEventListener("click", this._toggle.bind(this),{once: true});
        }
    }
}