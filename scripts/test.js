const formElement = document.querySelector('.popup__content');
const formInput = formElement.querySelector('.popup__element');
const formError = formElement.querySelector(`#${formInput.id}-error`);

const showError = (input, errorMessage) => {
    input.classList.add('popup__element_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup__element_error_active');
};

const hideError = (input) => {
    input.classList.remove('popup__element_type_error');
};

const checkInputValidity = () => {
    if (!formInput.validity.valid) {
        showError(formInput, formInput.validationMessage);
    } else {
        hideError(formInput);
    }
};

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

formInput.addEventListener('input', function () {
    checkInputValidity();
});