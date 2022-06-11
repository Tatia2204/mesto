import {Popup} from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(data) {
        const {popupSelector, handleFormSubmit} = data;
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupSelector.querySelector('.popup__content');
    }

    _getInputValues() {
        this._popupElement = this._popupSelector.querySelectorAll('.popup__element');
        console.log(this._popupElement);
        this._fieldValue = {};
        this._popupElement.forEach(input => {
            this._fieldValue[input.name] = input.value;
        })
        console.log(this._fieldValue);
        return this._fieldValue;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}

export {PopupWithForm};