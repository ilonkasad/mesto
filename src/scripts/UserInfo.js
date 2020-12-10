  export default  class UserInfo {
    constructor(nameSelector, professionSelector) {
        this._nameSelector = nameSelector;
        this._professionSelector = professionSelector;
    }

    getUserInfo(data) {
         return {
              name: data.name,
              about: data.about 
         }
         this._name = document.querySelector(this._nameSelector).textContent;
         this._profession = document.querySelector(this._professionSelector).textContent;
    }

    setUserInfo(name, profession) {
         document.querySelector(this._nameSelector).textContent = name;
         document.querySelector(this._professionSelector).textContent = profession;
    }
}