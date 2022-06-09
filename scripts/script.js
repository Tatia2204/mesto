import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';
import {
    initialCards, modalPictures, modalLocation,
    listContainer, nameProfileInput, professionProfileInput, modalProfile, aboutProjectLink, addButton
} from './utils.js';
import {Section} from './Section.js';
import {Popup} from "./Popup.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {PopupWithForm} from "./PopupWithForm.js";
import {UserInfo} from "./UserInfo.js";

const createCard = (data) => {
    const handleCardClick = (name, link) => {
        const popup = new PopupWithImage(name, link, modalPictures);

        popup.open();
    };
    const cardData = {data, handleCardClick};
    const card = new Card(cardData, '.template');
    const cardElement = card.generateCard();

    return cardElement;
}

const cardList = new Section({
        data: initialCards,
        renderer: (data) => {cardList.addItem(createCard(data));
    }},
    listContainer);
cardList.renderItems();

const closeLocation = new Popup(modalLocation);
closeLocation.setEventListeners();

// function handleAddCardFormSubmit(e) {
//     e.preventDefault();
//     const fieldValue = createCard({name: headingCardValue.value, link: linkCardValue.value});
//     listContainer.prepend(fieldValue);
//
//     closeLocation.close();
//     addCardLocation.reset();
// }
//
// addCardLocation.addEventListener('submit', handleAddCardFormSubmit);

function addInfoProfile({profileName, profileProfession}) {
    nameProfileInput.value = profileName;
    professionProfileInput.value = profileProfession;
}

const userInfo = new UserInfo({
    profileName: '.profile__name',
    profileProfession: '.profile__profession'
})
//
// const openProfile = new Popup(modalProfile);
// aboutProjectLink.addEventListener('click', () => openProfile.open());

// const closeProfile = new Popup(modalProfile);
// closeProfile.setEventListeners();

const formProfile = new PopupWithForm({
    popupSelector: modalProfile,
    handleFormSubmit: (data) => {
        userInfo.setUserInfo({
            profileName: data.profileName,
            profileProfession: data.profileProfession
        });
        // formProfile.close();
    },
});

formProfile.setEventListeners();

aboutProjectLink.addEventListener('click', () => {
    const infoUser = userInfo.getUserInfo();
    addInfoProfile({
        profileName: infoUser.profileName,
        profileProfession: infoUser.profileProfession
    });
    formProfileValidator.enableValidation();
    formProfile.open();
    formProfile._getInputValues();
});

// function handleProfileFormSubmit(e) {
//     e.preventDefault();
//     profileNameLink.textContent = nameProfileInput.value;
//     profileProfessionLink.textContent = professionProfileInput.value;
//     closeProfile.close();
// }
//
// formProfileEdit.addEventListener('submit', handleProfileFormSubmit);

const closePictures = new Popup(modalPictures);
closePictures.setEventListeners();

const openLocation = new Popup(modalLocation);
addButton.addEventListener('click', () => openLocation.open());

const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_type_disabled',
    inputErrorClass: 'popup__element_type_error'
};

const formProfileValidator = new FormValidator (validationConfig, modalProfile);


const formLocationValidator = new FormValidator (validationConfig, modalLocation);
formLocationValidator.enableValidation();

