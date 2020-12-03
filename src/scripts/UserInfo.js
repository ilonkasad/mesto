import { popupName, popupProfession, profileTitle, profileSubTitle} from './constants.js';

export default  class UserInfo {
    constructor(nameSelector, infoSelector) {
        this._name = document.querySelector(nameSelector).textContent;
        this._info = document.querySelector(infoSelector).textContent;
    }

    getUserInfo() {
        popupName.value = this._name;
        popupProfession.value = this._info;
    }

    setUserInfo() {
        profileTitle.textContent = popupName.value;
        profileSubTitle.textContent = popupProfession.value;
    }
}