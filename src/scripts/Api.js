export default class Api {
    constructor(options, btnOptions) {
      this._infoUrl = options.infoUrl;
      this._cardsUrl = options.cardsUrl;
      this._avaUrl = options.avaUrl;
      this._headers = options.headers;
      this._btnUserInfo = btnOptions.btnUserInfo;
      this._btnNewCard = btnOptions.btnNewCard;
      this._btnUpdAva = btnOptions.btnUpdAva;
      this._btnLoadingTxt = btnOptions.btnLoadingTxt;
      this._btnSaveTxt = btnOptions.btnSaveTxt;
      this._btnCreateTxt = btnOptions.btnCreateTxt;
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
        this.dataIsLoading(true, this._btnUserInfo, this._btnSaveTxt);
        return fetch(this._infoUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(
                usrInfo
              )
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          })
        .finally(()=> {this.dataIsLoading(false,this._btnUserInfo, this._btnSaveTxt);}
        );     
    }

    addNewCard(cardInfo) {
        this.dataIsLoading(true, this._btnNewCard, this._btnCreateTxt);
        return fetch(this._cardsUrl, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(
                cardInfo
              )
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
           // return Promise.reject(`Ошибка: ${res.status}`);
         });      
    }

    removeCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-18/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         });   
    }

    likeCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-18/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         });   
    }

    dislikeCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-18/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
         });   
    }

    updateAvatar(avaLink) {
        this.dataIsLoading(true, this._btnUpdAva, this._btnSaveTxt);
        return fetch(this._avaUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(
                avaLink
              )
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          })
        .finally(()=> {this.dataIsLoading(false, this._btnUpdAva, this._btnSaveTxt);}
        );         
    }

    getAllNeededData() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    }
  
    dataIsLoading(isLoading, button, textDefault) {
        if (isLoading) {
            button.textContent = this._btnLoadingTxt;
        }
        else {
            button.textContent = textDefault;;
        }
      }
  }
  
  