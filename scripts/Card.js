import { viewCard } from './utils.js';

export class Card {
    constructor(titleValue, linkValue, templateSelector){
        this._titleValue = titleValue;
        this._linkValue = linkValue;
        this._template = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._template)
          .content
          .cloneNode(true);

        return cardElement;
      }
    _createImageElement() {
          const imgElement = this._element
            .querySelector('.elements__image');
          imgElement.setAttribute("src", this._linkValue);
          imgElement.setAttribute("alt", this._titleValue);
          return imgElement;
      }

     _setEventListeners() {
      this._imgElement.addEventListener("click", viewCard);
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
        this._imgElement = this._createImageElement();
        this._setEventListeners();
        this._element.querySelector(".elements__title").textContent = this._titleValue;
        return this._element;
      }
}