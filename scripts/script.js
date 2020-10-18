const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const closeButton = document.querySelector('.popup__btn-close');
const addButton = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__container');
const inputBlock = document.querySelector('.popup__container_type_input');
const viewBlock = document.querySelector('.popup__container_type_view');
const cardContainer = document.querySelector('.elements');
let popupName = document.querySelector('.popup__field_type_name');
let popupProfession = document.querySelector('.popup__field_type_profession');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

function loadCards() {
    initialCards.forEach((item) => {
        addElement(item.name, item.link);
    }); 
}

function addElement (titleValue, linkValue) {
    const cardTemplate = document.querySelector('#element-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    
    cardElement.querySelector('.elements__title').textContent = titleValue;
    cardElement.querySelector('.elements__image').setAttribute('src', linkValue);
    cardElement.querySelector('.elements__image').addEventListener('click', viewCard);
    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
     });
    cardElement.querySelector('.elements__trash').addEventListener('click', function (evt) {
        evt.target.closest('div').classList.add('elements__element_deleted');
     });  
    
    cardContainer.append(cardElement);
}

function prepareCommonBeforeFormOpen() {
    popup.classList.remove('popup_closed');
    popup.classList.add('popup_opened');
    popupContent.classList.remove('popup__content_hidden');
}

function prepareBeforeInputFormOpen() {
    popupContent.classList.remove('popup__content_view');
    viewBlock.classList.add('popup__content_hidden');
    inputBlock.classList.remove('popup__content_hidden');
}
function openEditData() {
    prepareCommonBeforeFormOpen();
    prepareBeforeInputFormOpen();
    popupName.value = profileTitle.textContent;
    popupName.setAttribute('placeholder','');
    popupProfession.value = profileSubTitle.textContent;
    popupProfession.setAttribute('placeholder','');
    popup.querySelector('.popup__title').textContent = 'Редактировать профиль';
    popup.querySelector('.popup__btn-save').textContent = 'Сохранить';
}

function openAddCard() {
    prepareCommonBeforeFormOpen();
    prepareBeforeInputFormOpen();
    popupName.value='';
    popupName.setAttribute('placeholder','Название');
    popupProfession.value = '';
    popupProfession.setAttribute('placeholder','Ссылка на картинку');
    popup.querySelector('.popup__title').textContent = 'Новое место';
    popup.querySelector('.popup__btn-save').textContent = 'Создать';
}

function viewCard(evt) {
    prepareCommonBeforeFormOpen();
    popupContent.classList.add('popup__content_view');
    viewBlock.classList.remove('popup__content_hidden');
    inputBlock.classList.add('popup__content_hidden');
    viewBlock.classList.add('popup_opened');
    viewBlock.querySelector('.popup__image').setAttribute('src', evt.target.getAttribute('src'));
    viewBlock.querySelector('.popup__subtitle').textContent = evt.target.parentElement.querySelector('.elements__title').textContent;
}

function closeEditData() {
    popup.classList.add('popup_closed');
    popup.classList.remove('popup_opened');
    viewBlock.classList.remove('popup_opened');
    inputBlock.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    console.log(evt);
    console.log(evt.target);
    if (evt.target.querySelector('.popup__btn-save').textContent==='Сохранить'){
        profileTitle.textContent = popupName.value;
        profileSubTitle.textContent = popupProfession.value;
    }
    else {
        addElement(popupName.value, popupProfession.value);
    } 
    closeEditData();
}

editButton.addEventListener('click', openEditData);
closeButton.addEventListener('click', closeEditData);
formElement.addEventListener('submit', formSubmitHandler); 
addButton.addEventListener('click', openAddCard);


