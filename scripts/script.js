import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';
import {initialCards, modalPictures, openPopup, closePopup} from './utils.js';

const aboutProjectLink = document.querySelector('.profile__info-edit');
const modalProfile = document.querySelector('.popup_profile');
const modalProfileClose = modalProfile.querySelector('.popup__close_profile');
const nameProfileInput = document.querySelector('.popup__element_add_name');
const profileNameLink = document.querySelector('.profile__name');
const professionProfileInput = document.querySelector('.popup__element_add_profession');
const profileProfessionLink = document.querySelector('.profile__profession');
const formProfileEdit = document.querySelector('.popup__content');

const listContainer = document.querySelector('.elements');

const addButton = document.querySelector('.profile__info-add');
const modalLocation = document.querySelector('.popup_location');
const addCardClose = document.querySelector('.popup__close_location');
const addCardLocation = document.querySelector('.popup__content_location');
const headingCardValue = document.querySelector('.popup__element_add_heading');
const linkCardValue = document.querySelector('.popup__element_add_link');

const viewImageClose = document.querySelector('.popup__close_image'); //

const createCard = (data) => {
    const card = new Card(data, '.template');
    return card.generateCard();
}

const renderCard = (data) => {
    const card = createCard(data);

};

initialCards.forEach((data) => {
    renderCard(data, listContainer);
});

function handleAddCardFormSubmit(e) {
    e.preventDefault();
    const fieldValue = createCard({name: headingCardValue.value, link: linkCardValue.value});
    listContainer.prepend(fieldValue);

    closePopup(modalLocation);
    addCardLocation.reset();
}

addCardLocation.addEventListener('submit', handleAddCardFormSubmit);

function openModalProfile() {
    openPopup(modalProfile);
    nameProfileInput.value = profileNameLink.textContent;
    professionProfileInput.value = profileProfessionLink.textContent;
}
aboutProjectLink.addEventListener('click', openModalProfile);

modalProfileClose.addEventListener('click', () => closePopup(modalProfile));

function closeOverlayClick(event) {
    if (event.target === event.currentTarget) {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

modalProfile.addEventListener('click', closeOverlayClick);
modalLocation.addEventListener('click', closeOverlayClick);
modalPictures.addEventListener('click', closeOverlayClick);

function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileNameLink.textContent = nameProfileInput.value;
    profileProfessionLink.textContent = professionProfileInput.value;
    closePopup(modalProfile);
}

formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

viewImageClose.addEventListener('click', () => closePopup(modalPictures));
addButton.addEventListener('click', () => openPopup(modalLocation));
addCardClose.addEventListener('click', () => closePopup(modalLocation));

const validationConfig = {
    formSelector: '.popup__content',
    // formSelectorProfile: '.popup__content_profile',
    // formSelectorLocation: '.popup__content_location',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_type_disabled',
    inputErrorClass: 'popup__element_type_error'
};

const formProfileValidator = new FormValidator (validationConfig, modalProfile);
formProfileValidator.enableValidation();

const formLocationValidator = new FormValidator (validationConfig, modalLocation);
formLocationValidator.enableValidation();

initialCards.forEach((data) => {
    listContainer.append(createCard(data));
});
