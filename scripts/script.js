const aboutProjectLink = document.querySelector('.profile__info-edit');
const modalWindow = document.querySelector('.popup_profile');
const modalProfileClose = modalWindow.querySelector('.popup__close_profile');
const nameProfileInput = document.querySelector('.popup__element_add_name');
const profileNameLink = document.querySelector('.profile__name');
const professionProfileInput = document.querySelector('.popup__element_add_profession');
const profileProfessionLink = document.querySelector('.profile__profession');
const formProfileEdit = document.querySelector('.popup__content');

const listContainer = document.querySelector('.elements');
const template = document.querySelector('.template');

const addButton = document.querySelector('.profile__info-add');
const modalLocation = document.querySelector('.popup_location');
const addCardClose = document.querySelector('.popup__close_location');
const addCardLocation = document.querySelector('.popup__content_location');
const headingCardValue = document.querySelector('.popup__element_add_heading');
const linkCardValue = document.querySelector('.popup__element_add_link');

const modalMaskGroup = document.querySelector('.popup_mask-group');

const locationName = document.querySelector('.popup__location-name');
const locationImage = document.querySelector('.popup__mask-image');

const viewImageClose = document.querySelector('.popup__close_image');

function render() {
    const cards = initialCards.map(getElement);
    listContainer.append(...cards);
}

function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const name = getElementTemplate.querySelector('.element__location');
    const link = getElementTemplate.querySelector('.element__mask-group');
    const removeButton = getElementTemplate.querySelector('.element__remove');
    const like = getElementTemplate.querySelector('.element__like');

    name.textContent = item.name;
    link.src = item.link;
    link.alt = item.name;

    removeButton.addEventListener('click', removeButtonElement);
    like.addEventListener('click', addLikeElement);
    link.addEventListener('click', openAddMaskGroup);


    function openAddMaskGroup() {
        openPopup(modalMaskGroup);
        locationName.textContent = name.textContent;
        locationImage.src = link.src;
        locationImage.alt = link.alt;
    }

    return getElementTemplate;
}

function closeAddMaskGroup() {
    closePopup(modalMaskGroup);
}

viewImageClose.addEventListener('click', closeAddMaskGroup);

function addLikeElement(e) {
    e.target.classList.toggle('element__like_active');
}

function removeButtonElement(e) {
    const element = e.target.closest('.element');
    element.remove();
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openAddLocation() {
    openPopup(modalLocation);
}

addButton.addEventListener('click', openAddLocation);

function closeAddLocation() {
    closePopup(modalLocation);
}

addCardClose.addEventListener('click', closeAddLocation);

function handleAddCardFormSubmit(e) {
    e.preventDefault();
    const el = getElement({name: headingCardValue.value, link: linkCardValue.value});
    listContainer.prepend(el);

    closeAddLocation();
    addCardLocation.reset();
}

addCardLocation.addEventListener('submit', handleAddCardFormSubmit);

render();

function openModalWindow() {
    openPopup(modalWindow);
    nameProfileInput.value = profileNameLink.textContent;
    professionProfileInput.value = profileProfessionLink.textContent;
}
aboutProjectLink.addEventListener('click', openModalWindow);

function closeModalWindow() {
    closePopup(modalWindow);
}

modalProfileClose.addEventListener('click', closeModalWindow);

function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileNameLink.textContent = nameProfileInput.value;
    profileProfessionLink.textContent = professionProfileInput.value;
    closeModalWindow();
}

formProfileEdit.addEventListener('submit', handleProfileFormSubmit);



