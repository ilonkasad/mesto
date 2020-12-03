export default class Card {
    constructor(titleValue, linkValue, templateSelector, handleCardClick){
        this._titleValue = titleValue;
        this._linkValue = linkValue;
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
    createImageElement() {
          const imgElement = this._element
            .querySelector('.elements__image');
          imgElement.setAttribute("src", this._linkValue);
          imgElement.setAttribute("alt", this._titleValue);
          return imgElement;
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