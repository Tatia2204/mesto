import {Popup} from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(data) {
        const {popupSelector, handleFormSubmit} = data;
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__content');
        this._inputList = this._popup.querySelectorAll('.popup__element');
        this._saveButten = this._popup.querySelector('.popup__save');
    }

    //сбор данных всех полей
    _getInputValues() {
        this._fieldValue = {};
        this._inputList.forEach(input => {
            this._fieldValue[input.name] = input.value;
        })

        return this._fieldValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formValues = this._getInputValues();
            this.handleFormSubmit(formValues);
        });
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    renderLoading(isDownload){
        if (isDownload) {
            this._saveButten.textContent = "Сохранение...";
        } else {
            this._saveButten.textContent = "Сохранить";
        }
    }
}

export {PopupWithForm};