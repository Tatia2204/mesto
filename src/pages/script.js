import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {initialCards, modalPictures, modalLocation, listContainer, nameProfileInput,
    professionProfileInput, modalProfile, aboutProjectLink, addButton} from '../components/utils.js';
import {Section} from '../components/Section.js';
import {Popup} from "../components/Popup.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import './index.css';

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

const closePictures = new Popup(modalPictures);
closePictures.setEventListeners();

const formLocation = new PopupWithForm({
    popupSelector: modalLocation,
    handleFormSubmit: (data) => {
        cardList.addItem(createCard(data));
        formLocation.close();
    },
});

formLocation.setEventListeners();

addButton.addEventListener('click', () => {
    formLocation.open();
});

const closeLocation = new Popup(modalLocation);
closeLocation.setEventListeners();

function addInfoProfile({profileName, profileProfession}) {
    nameProfileInput.value = profileName;
    professionProfileInput.value = profileProfession;
}

const userInfo = new UserInfo({
    profileName: '.profile__name',
    profileProfession: '.profile__profession'
})

const formProfile = new PopupWithForm({
    popupSelector: modalProfile,
    handleFormSubmit: (data) => {
        userInfo.setUserInfo({
            profileName: data.profileName,
            profileProfession: data.profileProfession
        });
        formProfile.close();
    },
});

formProfile.setEventListeners();

aboutProjectLink.addEventListener('click', () => {
    const infoUser = userInfo.getUserInfo();
    addInfoProfile({
        profileName: infoUser.profileName,
        profileProfession: infoUser.profileProfession
    });
    formProfile.open();
});

const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_type_disabled',
    inputErrorClass: 'popup__element_type_error'
};

const formProfileValidator = new FormValidator (validationConfig, modalProfile);
formProfileValidator.enableValidation();

const formLocationValidator = new FormValidator (validationConfig, modalLocation);
formLocationValidator.enableValidation();

