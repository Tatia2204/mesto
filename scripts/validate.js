function enableValidation(config) {
    const form = document.querySelector(config.formSelector);
    const inputs = form.querySelectorAll(config.inputSelector);

    inputs.forEach((element) => {
        element.addEventListener('input', (event) => handleFormInput(event, form, config));
    })

    form.addEventListener('submit', (event) => handleFormSubmit(event, form));
    // form.addEventListener('input', (event) => handleFormInput(event));
    toggleButton(form, config);
}

function toggleButton(form, config) {
    const button = document.querySelector(config.buttonSelector);
    button.disabled = !form.checkValidity();

    button.classList.toggle('popup__save_type_disabled', !form.checkValidity());
}

function handleFormSubmit(event, form) {
    event.preventDefault();

    if (form.checkValidity()) {
        alert('Форма валидна');
    } else {
        alert('Форма не валидна');
    }
}

function handleFormInput(event, form, config) {
    const input = event.target;
    const errorNode = document.querySelector('#' + input.id + '-error');

    if (input.validity.valid) {
        errorNode.textContent = ' ';
    } else {
        errorNode.textContent = input.validationMessage;
    }
    toggleButton(form, config);
}

enableValidation({
    formSelector: '.popup__content_profile',
    inputSelector: '.popup__element_profile',
    buttonSelector: '.popup__save_profile',
});

enableValidation({
    formSelector: '.popup__content_location',
    inputSelector: '.popup__element',
    buttonSelector: '.popup__save_location',
});