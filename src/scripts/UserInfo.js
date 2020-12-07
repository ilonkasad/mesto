import { profileTitle, profileSubTitle } from './constants.js'; 
export default  class UserInfo {
    constructor(popupName, popupProfession) {
        this._profileTitle = document.querySelector(popupName).textContent;
        this._profileSubTitle = document.querySelector(popupProfession).textContent;
    }

    getUserInfo() {
        this._profileTitle = profileTitle.textContent;
        this._profileSubTitle = profileSubTitle.textContent;
    }

    setUserInfo(name, profession) {
        this._profileTitle = name;
        this._profileSubTitle = profession;
        profileTitle.textContent = this._profileTitle;
        profileSubTitle.textContent = this._profileSubTitle;  
    }
}