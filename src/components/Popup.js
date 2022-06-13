class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._popupClose = this._popup.querySelector('.popup__close');
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
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
        this._popupClose.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('click', this._handleOverlayClose);
    }
}

export {Popup};