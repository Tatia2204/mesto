class FormValidator {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._formSelector = config.formSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
    }

    _showInputError (formElement, inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector('#' + inputElement.id + '-error');
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
    };

    _hideInputError (formElement, inputElement) {
        const errorElement = this._formElement.querySelector('#' + inputElement.id + '-error');
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity (formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    };

    _setEventListeners = (formElement) => {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonSave = this._formElement.querySelector(this._submitButtonSelector);

        this._toggleButtonState(this._inputList, this._buttonSave);

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement);
                this._toggleButtonState(this._inputList);
            });
        });
    }

    _hasInvalidInput = (inputList) => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState = (inputList, buttonSave) => {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonSave.classList.add(this._inactiveButtonClass);
            this._buttonSave.setAttribute('disabled', 'disabled');
        } else {
            this._buttonSave.classList.remove(this._inactiveButtonClass);
            this._buttonSave.removeAttribute('disabled');
        }
    };

    _disabledButtonCard = (formElement) => {
        this._buttonSave = this._formElement.querySelector(this._submitButtonSelector);
        this._buttonSave.classList.add(this._inactiveButtonClass);
        this._buttonSave.setAttribute('disabled','disabled');
    }

    _addSubmitListener = () => {

        this._formList = Array.from(document.querySelectorAll(this._formSelector));
        this._formList.forEach((formElement) => {
            formElement.addEventListener('submit', () => {

                this._disabledButtonCard(this._formElement);
            });
            this._setEventListeners(this._formElement);
        });
    }

    enableValidation() {
        this._addSubmitListener();
        this._setEventListeners();
    }
}

export {FormValidator};