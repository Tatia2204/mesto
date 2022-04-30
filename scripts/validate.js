function enableValidation(config) {
    const form = document.querySelector(config.formSelector);
    const inputs = form.querySelectorAll(config.inputSelector);

    inputs.forEach((element) => {
        element.addEventListener('input', (event) => handleFormInput(event, form, config));
    })

    form.addEventListener('submit', (event) => handleFormSubmit(event, form));

    toggleButton(form, config);
}

function toggleButton(form, config) {
    const button = document.querySelector(config.buttonSelector);
    button.disabled = !form.checkValidity();

    button.classList.toggle(config.inactiveButtonClass, !form.checkValidity());
}

function handleFormSubmit(event, form) {
    event.preventDefault();
}

function handleFormInput(event, form, config) {
    const input = event.target;
    const errorNode = document.querySelector('#' + input.id + '-error');

    if (input.validity.valid) {
        errorNode.textContent = ' ';
        hideInputError(input);
    } else {
        errorNode.textContent = input.validationMessage;
        showInputError(input);
    }
    toggleButton(form, config);
}


const showInputError = (element) => {
    element.classList.add('popup__element_type_error');
};

const hideInputError = (element) => {
    element.classList.remove('popup__element_type_error');
};

enableValidation({
    formSelector: '.popup__content_profile',
    inputSelector: '.popup__element_profile',
    buttonSelector: '.popup__save_profile',
    inactiveButtonClass: 'popup__save_type_disabled',
});

enableValidation({
    formSelector: '.popup__content_location',
    inputSelector: '.popup__element_location',
    buttonSelector: '.popup__save_location',
    inactiveButtonClass: 'popup__save_type_disabled',
});