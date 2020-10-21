const content = document.querySelector('.content');
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

const editModal = document.querySelector('.popup__container_type_edit');
const addModal = document.querySelector('.popup__container_type_add');
const viewModal = document.querySelector('.popup__container_type_view');

const popupName = editModal.querySelector('.popup__field_type_name');
const popupProfession = editModal.querySelector('.popup__field_type_profession');
const popupTitle = addModal.querySelector('.popup__field_type_name');
const popupLink = addModal.querySelector('.popup__field_type_profession');


const closeButtonEdit = editModal.querySelector('.popup__btn-close');
const closeButtonAdd = addModal.querySelector('.popup__btn-close');
const closeButtonView = viewModal.querySelector('.popup__btn-close');

const addButton = document.querySelector('.profile__add-button');
const cardContainer = document.querySelector('.elements');

const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
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
        addCard(cardContainer, createCard(item.name, item.link));
    }); 
}

function createCard(titleValue, linkValue ) {
    const cardTemplate = document.querySelector('#element-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const imgElement = cardElement.querySelector('.elements__image');
    
    cardElement.querySelector('.elements__title').textContent = titleValue;
    imgElement.setAttribute('src', linkValue);
    imgElement.addEventListener('click', viewCard);
    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
     });
    cardElement.querySelector('.elements__trash').addEventListener('click', function (evt) {
        evt.target.closest('div').classList.add('elements__element_deleted');
     }); 
     return cardElement;
}

function addCard(container, cardElement) {
    container.append(cardElement);
}

function toggleModal(modal) {
    modal.closest('div').classList.toggle('popup_opened');
    modal.classList.toggle('popup_active');
}

function viewCard(evt) {
    toggleModal(viewModal);
    viewModal.querySelector('.popup__image').setAttribute('src', evt.target.getAttribute('src'));
    viewModal.querySelector('.popup__subtitle').textContent = evt.target.parentElement.querySelector('.elements__title').textContent;
}

function editSubmitHandler (evt) {
    evt.preventDefault(); 
    profileTitle.textContent = popupName.value;
    profileSubTitle.textContent = popupProfession.value;
    closeButtonEdit.click();
}

function addSubmitHandler (evt) {
    evt.preventDefault(); 
    addCard(cardContainer, createCard(popupTitle.value, popupLink.value));
    popupTitle.value='';
    popupLink.value='';
    addButton.click();
}

editButton.addEventListener('click', () => toggleModal(editModal));
addButton.addEventListener('click', () => toggleModal(addModal));

editModal.addEventListener('submit', editSubmitHandler); 
addModal.addEventListener('submit', addSubmitHandler);

closeButtonEdit.addEventListener('click', () => toggleModal(editModal)); 
closeButtonAdd.addEventListener('click', () => toggleModal(addModal));
closeButtonView.addEventListener('click', () => toggleModal(viewModal));



