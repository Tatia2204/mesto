import {openPopup, closePopup,  modalPictures, locationImage,
    viewImageClose, locationName, closeOverlayClick} from './utils.js';

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    generateCard = () => {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__mask-group').src = `${this._link}`;
        this._element.querySelector('.element__location').textContent = this._name;
        this._element.querySelector('.element__mask-group').alt = this._name;

        this._removePicture = this._element.querySelector('.element__remove');
        this._removePicture.addEventListener('click', () => {
            this._removeButtonPicture();
        });
        this._likePicture = this._element.querySelector('.element__like');
        this._likePicture.addEventListener('click', () => {
            this._addLikePicture();
        });
        return this._element;
    }

    _removeButtonPicture = () => {
        this._element.remove();
    }

    _addLikePicture = () => {
        this._likePicture.classList.toggle('element__like_active');
    }

    _handlePreviewPicture = () => {
        locationImage.src = this._link;
        locationName.textContent = this._name;
        locationImage.alt = this._name;
        openPopup(modalPictures);
    }

    _handleClosePicture = () => {
        locationImage.src = '';
        locationName.textContent = '';
        locationImage.alt = '';
        closePopup(modalPictures);
    }

    _setEventListeners = () => {
        this._image = this._element.querySelector('.element__mask-group');
        this._image.addEventListener('click', () => {
            this._handlePreviewPicture();
        });

        viewImageClose.addEventListener('click', () => {
            this._handleClosePicture();
        });

        modalPictures.addEventListener('click', closeOverlayClick);
    }
}

export {Card};

