export default class Card {
    constructor(titleValue, linkValue, likesValue, templateSelector, handleCardClick){
        this._titleValue = titleValue;
        this._linkValue = linkValue;
        this._likesValue = likesValue;
        this._template = templateSelector;
        this._handleCardClick = handleCardClick;
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
            this._putLikeCounts();
          return crdElement;
      }
    
      _putLikeCounts() {
        const likeCount = this._element
          .querySelector('.elements__like-count');
        likeCount.textContent = this._likesValue.length;
      }

     _setEventListeners() {
      this._element
        .querySelector(".elements__like")
        .addEventListener("click", function (evt) {
          evt.target.classList.toggle("elements__like_active");
        });
      this._element
        .querySelector(".elements__trash")
        .addEventListener("click", function (evt) {
          evt.target.closest(".elements__element").remove()
        });
    };

      generateCard() {
        this._element = this._getTemplate();
        this._handleCardClick();
        this._setEventListeners();
        this._element.querySelector(".elements__title").textContent = this._titleValue;
        return this._element;
      }
}