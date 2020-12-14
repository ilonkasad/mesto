import  Popup  from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, callbackSubmit){
        super(popupSelector);
        this._handleSubmitCallback = callbackSubmit;
    }
    
    setSubmitAction(submitAction) {
        this._handleSubmitCallback = submitAction;
      }
    
    setEventListeners(closeButton) {
        super.setEventListeners(closeButton);
        this._popup.addEventListener("submit", (evt)=> {
            evt.preventDefault();
            this._handleSubmitCallback();
        }); 
    }
}