const aboutProjectLink = document.querySelector('.profile__info-edit')
const modalWindow = document.querySelector('.popup');
const modalClose = modalWindow.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__element_name');
const profileNameLink = document.querySelector('.profile__name');
const professionInput = document.querySelector('.popup__element_profession');
const profileProfessionLink = document.querySelector('.profile__profession');
const myForm = document.querySelector('.popup__content');

function openModalWindow() {
    modalWindow.classList.add('popup_opened');
    nameInput.value = profileNameLink.textContent;
    professionInput.value = profileProfessionLink.textContent;
}
aboutProjectLink.addEventListener('click', openModalWindow);

function closeModalWindow() {
    modalWindow.classList.remove('popup_opened');
}

modalClose.addEventListener('click', closeModalWindow);

function onSubmit(e) {
    e.preventDefault();
    profileNameLink.textContent = nameInput.value;
    profileProfessionLink.textContent = professionInput.value;
    closeModalWindow();
}

myForm.addEventListener('submit', onSubmit);

