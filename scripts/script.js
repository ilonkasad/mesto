const content = document.querySelector('.content');
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupOverlayEdit = document.querySelector('.popup_overlay-edit');
const popupOverlayAdd = document.querySelector('.popup_overlay-add');
const popupOverlayView = document.querySelector('.popup_overlay-view');
const popupContent = document.querySelector('.popup__content');

const editModal = document.querySelector('.popup__container_type_edit');
const addModal = document.querySelector('.popup__container_type_add');
const viewModal = document.querySelector('.popup__container_type_view');
const imgModal = document.querySelector('.popup_view');

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
    container.prepend(cardElement);
}

function toggleModal(modal) {
    modal.closest('div').classList.toggle('popup_opened');
    modal.classList.toggle('popup_active');  
}

function editCardOpen(modal) {
    toggleModal(modal);
    popupName.value = profileTitle.textContent;
    popupProfession.value = profileSubTitle.textContent;
    enableValidation(objEdit);
    
}
function addCardOpen(modal) {
    toggleModal(modal);
    enableValidation(objAdd);

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
    closeButtonAdd.click();
}

function closeByEsc(evt) {
    const {key} = evt; 
    if (key === "Escape") {
        toggleModal(findActiveModal());
    }
}

function closeByPopup(evt, modal) {
    if((evt.target=== modal.closest(".popup"))||(evt.target=== modal.closest(".popup__container_type_view"))){
        toggleModal(findActiveModal());
    }
}

function findActiveModal() {
    return document.querySelector('.popup_active');
}

editButton.addEventListener('click', () => editCardOpen(editModal));
addButton.addEventListener('click', () => addCardOpen(addModal));

editModal.addEventListener('submit', editSubmitHandler); 
addModal.addEventListener('submit', addSubmitHandler);

closeButtonEdit.addEventListener('click', () => toggleModal(editModal)); 
closeButtonAdd.addEventListener('click', () => toggleModal(addModal));
closeButtonView.addEventListener('click', () => toggleModal(viewModal));

popupOverlayEdit.addEventListener('mousedown', evt => closeByPopup(evt, editModal));
popupOverlayAdd.addEventListener('mousedown', evt => closeByPopup(evt, addModal));
popupOverlayView.addEventListener('mousedown', evt => closeByPopup(evt, imgModal));

document.addEventListener('keydown', evt => closeByEsc(evt));

