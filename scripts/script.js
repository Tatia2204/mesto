const aboutProjectLink = document.querySelector('.profile__info-edit');
const modalProfile = document.querySelector('.popup_profile');
const modalProfileClose = modalProfile.querySelector('.popup__close_profile');
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

const modalPictures = document.querySelector('.popup_mask-group');

const locationName = document.querySelector('.popup__location-name');
const locationImage = document.querySelector('.popup__mask-image');

const viewImageClose = document.querySelector('.popup__close_image');

function render() {
    const cards = initialCards.map(createСard);
    listContainer.append(...cards);
}

function createСard(element) {
    const createСardTemplate = template.content.cloneNode(true);
    const name = createСardTemplate.querySelector('.element__location');
    const link = createСardTemplate.querySelector('.element__mask-group');
    const removeButton = createСardTemplate.querySelector('.element__remove');
    const like = createСardTemplate.querySelector('.element__like');

    name.textContent = element.name;
    link.src = element.link;
    link.alt = element.name;

    removeButton.addEventListener('click', removeButtonElement);
    like.addEventListener('click', addLikeElement);
    link.addEventListener('click', openAddMaskGroup);

    function openAddMaskGroup() {
        openPopup(modalPictures);

        locationName.textContent = name.textContent;
        locationImage.src = link.src;
        locationImage.alt = link.alt;
    }

    return createСardTemplate;
}

viewImageClose.addEventListener('click', () => closePopup(modalPictures));

function addLikeElement(e) {
    e.target.classList.toggle('element__like_active');
}

function removeButtonElement(e) {
    const element = e.target.closest('.element');
    element.remove();
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscape);
    buttonSave.setAttribute('disabled','disabled');
    buttonSave.setAttribute('disabled', true);
    buttonSave.classList.add('popup__save_type_disabled');
}
const buttonSave = document.querySelector('.popup__save');
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscape);
    buttonSave.classList.add('popup__save_type_disabled');
    buttonSave.setAttribute('disabled','disabled');

    buttonSave.removeAttribute('disabled');
}

addButton.addEventListener('click', () => openPopup(modalLocation));

function closeAddLocation() {
    closePopup(modalLocation);
}

addCardClose.addEventListener('click', closeAddLocation);

function handleAddCardFormSubmit(e) {
    e.preventDefault();
    const fieldValue = createСard({name: headingCardValue.value, link: linkCardValue.value});
    listContainer.prepend(fieldValue);

    closeAddLocation();
    addCardLocation.reset();
}

addCardLocation.addEventListener('submit', handleAddCardFormSubmit);

render();

function openModalProfile() {
    openPopup(modalProfile);
    nameProfileInput.value = profileNameLink.textContent;
    professionProfileInput.value = profileProfessionLink.textContent;
}
aboutProjectLink.addEventListener('click', openModalProfile);

modalProfileClose.addEventListener('click', () => closePopup(modalProfile));

function closeOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closePopup(modalProfile);
        closePopup(modalLocation);
        closePopup(modalPictures);
    }
}

modalProfile.addEventListener('click', closeOverlayClick);
modalLocation.addEventListener('click', closeOverlayClick);
modalPictures.addEventListener('click', closeOverlayClick);

function closeEscape(event) {
    const numberEscape = 27;
    if (event.keyCode === numberEscape) {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileNameLink.textContent = nameProfileInput.value;
    profileProfessionLink.textContent = professionProfileInput.value;
    closePopup(modalProfile);
}

formProfileEdit.addEventListener('submit', handleProfileFormSubmit);




