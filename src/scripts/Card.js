import { defaultOwnerId } from './constants.js';
export default class Card {
    constructor({data,handleCardClick,handleDeleteClick,handleLikeClick},templateSelector)
    {
        this._titleValue = data.name;
        this._linkValue = data.link;
        this._likesValue = data.likes;
        this._id = data.id;
        this._ownerId = data.ownerId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._template = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._template)
          .content
          .cloneNode(true);

        return cardElement;
      }
    createCardElement() {
          const crdElement = this._element
            .querySelector('.elements__image');
            crdElement.setAttribute("src", this._linkValue);
            crdElement.setAttribute("alt", this._titleValue);
            this.likeCountIcon = this._element.querySelector('.elements__like-count'); 
            this.likeIcon = this._element.querySelector(".elements__like");
            this.putLikeCounts(this._likesValue.length);
            if (this.checkCardHasMyLike()){
              this.putLikeColor(true);
            }
            else {
              this.putLikeColor(false);
            }
            
          return crdElement;
      }
  
     _setEventListeners() {
      this._element
        .querySelector(".elements__like")
        .addEventListener("click", (evt) => {
          this._handleLikeClick(evt);
        });
      this.createCardElement()
        .addEventListener("click", (evt) => this._handleCardClick(evt));  
      
      if (this._ownerId === defaultOwnerId) {
        this._element
        .querySelector(".elements__trash")
        .addEventListener("click", (evt) => {
          this.partForRemove = evt.target.closest(".elements__element");
          this._handleDeleteClick(evt);
        });
      }  
      else {
        this._element
        .querySelector(".elements__trash").classList.add("elements__trash_hide");
      } 
    };

      generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".elements__title").textContent = this._titleValue;
        return this._element;
      }

      //--about likes
      putLikeCounts(count) {
          this.likeCountIcon.textContent = count;
      }
      putLikeColor(isColor){
        if (isColor) {
          this.likeIcon.classList.add("elements__like_active")
        }
        else{
          this.likeIcon.classList.remove("elements__like_active")
        } 
      }

      checkCardHasMyLike() {
        const even = (element) => element._id === defaultOwnerId;
        return this._likesValue.some(even);
      }
      

}