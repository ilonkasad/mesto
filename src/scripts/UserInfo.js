
export default  class UserInfo {
    constructor(popupSelector, profileTitleSelector, profileSubTitleSelector, popupNameSelector, popupProfessionSelector) {
        this._popup = document.querySelector(popupSelector);
        this._name = document.querySelector(profileTitleSelector).textContent;
        this._info = document.querySelector(profileSubTitleSelector).textContent;
        this._popupName = popupNameSelector;
        this._popupProfession = popupProfessionSelector;
        this._profileTitle = profileTitleSelector;
        this._profileSubTitle = profileSubTitleSelector
    }

    getUserInfo() {
        this._popup.querySelector(this._popupName).value = this._name;
        this._popup.querySelector(this._popupProfession).value = this._info;
    }

    setUserInfo() {
        this._name = this._popup.querySelector(this._popupName).value;
        this._info = this._popup.querySelector(this._popupProfession).value;
        document.querySelector(this._profileTitle).textContent = this._name;
        document.querySelector(this._profileSubTitle).textContent =  this._info;
       
    }
}