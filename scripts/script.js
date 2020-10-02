let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__btn-close');
let popupName = document.querySelector('.popup__container__field_type_name');
let popupProfession = document.querySelector('.popup__container__field_type_profession');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__container');

function openEditData() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened');
    popupName.value = profileTitle.textContent;
    popupProfession.value = profileSubTitle.textContent;
}

function closeEditData() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = popupName.value;
    profileSubTitle.textContent = popupProfession.value;
    closeEditData();
}

editButton.addEventListener('click', openEditData);
closeButton.addEventListener('click', closeEditData);
formElement.addEventListener('submit', formSubmitHandler); 



