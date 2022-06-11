import {modalPictures, modalProfile, modalLocation} from './utils.js';

class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (event) => {
        this._numberEscape = 27;

        if (event.keyCode === this._numberEscape) {
            this.close();
        }
    }

    _handleOverlayClose = (event) => {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._imageClose = document.querySelector('.popup__close_image');
        this._imageClose.addEventListener('click', () => {
            this.close(modalPictures);
        });
        this._profileClose = document.querySelector('.popup__close_profile');
        this._profileClose.addEventListener('click', () => {
            this.close(modalProfile);
        });
        this._locationClose = document.querySelector('.popup__close_location');
        this._locationClose.addEventListener('click', () => {
            this.close(modalLocation);
        });
        modalProfile.addEventListener('click', this._handleOverlayClose);
        modalLocation.addEventListener('click', this._handleOverlayClose);
        modalPictures.addEventListener('click', this._handleOverlayClose);
    }
}

export {Popup};