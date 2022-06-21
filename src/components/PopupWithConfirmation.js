import {Popup} from "./Popup.js";

class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__content');
    }

    setSubmitDelete (remove) {
        this._handleDeleteSubmit = remove;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleDeleteSubmit();
        });
    }
}

export {PopupWithConfirmation};