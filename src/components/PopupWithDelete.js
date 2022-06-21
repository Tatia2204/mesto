import {Popup} from "./Popup.js";

class PopupWithDelete extends Popup {
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

export {PopupWithDelete};