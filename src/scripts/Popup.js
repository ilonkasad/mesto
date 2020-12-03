export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    toggle() {
        this._popup.classList.toggle("popup_active"); 
        if ( this._popup.classList.contains("popup_active")) {
            document.addEventListener("keydown", this._handleEscClose.bind(this),{once: true});
        }
    }

    _handleEscClose(evt){
        const { key } = evt;
        if (key === "Escape") {
            this.toggle(); 
         }
    }

    setEventListeners(closeButton){
        closeButton.addEventListener("click", () => this.toggle());
    }

}