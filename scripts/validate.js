const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function () {

            disabledButtonCard(formElement, config);
        });
        setEventListeners(formElement, config);
    });
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector('#' + inputElement.id + '-error');
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector('#' + inputElement.id + '-error');
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
};

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonSave = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, buttonSave, config);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonSave, config);
        });
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonSave, config) => {
    if (hasInvalidInput(inputList)) {
        buttonSave.classList.add(config.inactiveButtonClass);
        buttonSave.setAttribute('disabled', true);
    } else {
        buttonSave.classList.remove(config.inactiveButtonClass);
        buttonSave.removeAttribute('disabled');
    }
};

function disabledButtonCard(formElement, config) {
    const buttonSave = formElement.querySelector(config.submitButtonSelector);
    buttonSave.classList.add(config.inactiveButtonClass);
    buttonSave.setAttribute('disabled','disabled');
}

enableValidation({
    formSelector: '.popup__content',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_type_disabled',
    inputErrorClass: 'popup__element_type_error'
});