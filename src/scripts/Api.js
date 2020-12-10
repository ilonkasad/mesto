export default class Api {
    constructor(options) {
      this._infoUrl = options.infoUrl;
      this._cardsUrl = options.cardsUrl;
      this._headers = options.headers;
    }

    getUserInfo() {
        return fetch(this._infoUrl, {
            method: 'GET',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })
    }
  
    getInitialCards() {
        return fetch(this._cardsUrl, {
            method: 'GET',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         })
    }

    updateUserInfo(usrInfo) {
        return fetch(this._infoUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(
                usrInfo
              )
        });     
    }

    addNewCard(cardInfo) {
        return fetch(this._cardsUrl, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(
                cardInfo
              )
        });   
    }

    getAllNeededData() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    }
  
    // другие методы работы с API
  }
  
  