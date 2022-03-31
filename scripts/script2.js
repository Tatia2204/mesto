const aboutProjectLink = document.querySelector('.profile__info-edit')
const modalWindow = document.querySelector('.popup');
const modalClose = modalWindow.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__name');
const profileNameLink = document.querySelector('.profile__name');
const professionInput = document.querySelector('.popup__profession');
const profileProfessionLink = document.querySelector('.profile__profession');
const myForm = document.querySelector('.popup__content');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_opened-close');
    nameInput.value = profileNameLink.textContent;
    professionInput.value = profileProfessionLink.textContent;
}

aboutProjectLink.addEventListener('click', toggleModalWindow);

modalClose.addEventListener('click', toggleModalWindow);

function onSubmit(e) {
    e.preventDefault();
    profileNameLink.textContent = nameInput.value;
    profileProfessionLink.textContent = professionInput.value;
    toggleModalWindow();
}

myForm.addEventListener('submit', onSubmit);

