
import  Popup  from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, callbackSubmit, popupTitleSelector, popupLinkSelector) {
        super(popupSelector);
        this._callSubmit = callbackSubmit;
        this._popupTitle = popupTitleSelector;
        this._popupLink = popupLinkSelector;
        this._inputs = this._popup.querySelectorAll('.popup__field');
    }

    setEventListeners(closeButton) {
        super.setEventListeners(closeButton);
        this._popup.addEventListener('submit', this._callbackSubmit.bind(this));
    }

    close() {
        super.close();
        this._popup.querySelector(this._popupTitle).value ='';
        if(this._popupLink != null){
          this._popup.querySelector(this._popupLink).value = ''
        };
    }

    _getInputValues() {
        this.inputValue = {};
        this._inputs.forEach(elementInput => {
          this.inputValue[elementInput.name] = elementInput.value;
        });

        return this.inputValue;
      }
      
    _callbackSubmit(evt) {
        evt.preventDefault();
        this._callSubmit(this._getInputValues());
      }  

}