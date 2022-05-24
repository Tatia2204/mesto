// import {closeEscape} from './index.js';

const modalPictures = document.querySelector('.popup_mask-group');
const locationImage = document.querySelector('.popup__mask-image');
const viewImageClose = document.querySelector('.popup__close_image');
const locationName = document.querySelector('.popup__location-name');

const numberEscape = 27;

const like = document.querySelector('.element__like');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscape);
}

function closeEscape(event) {
    if (event.keyCode === numberEscape) {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

function closeOverlayClick(event) {
    if (event.target === event.currentTarget) {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

// function removeButtonElement(e) {
//     const element = e.target.closest('.element');
//     element.remove();
// }

function addLikeElement(e) {
    e.target.classList.toggle('element__like_active');
}

export {openPopup, closePopup, modalPictures, locationImage, viewImageClose, locationName,
    closeOverlayClick, addLikeElement, like};