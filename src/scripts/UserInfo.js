
export default  class UserInfo {
    constructor(profileTitleSelector, profileSubTitleSelector, popupNameSelector, popupProfessionSelector) {
        this._name = document.querySelector(profileTitleSelector).textContent;
        this._info = document.querySelector(profileSubTitleSelector).textContent;
        this._popupName = popupNameSelector;
        this._popupProfession = popupProfessionSelector;
        this._profileTitle = profileTitleSelector;
        this._profileSubTitle = profileSubTitleSelector
    }

    getUserInfo() {
        document.querySelector(this._popupName).value = this._name;
        document.querySelector(this._popupProfession).value = this._info;
    }

    setUserInfo() {
        this._name = document.querySelector(this._popupName).value;
        this._info = document.querySelector(this._popupProfession).value;
        document.querySelector(this._profileTitle).textContent = this._name;
        document.querySelector(this._profileSubTitle).textContent =  this._info;
       
    }
}