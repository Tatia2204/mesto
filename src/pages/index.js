import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {initialCards, modalPictures, modalLocation, listContainer,
    modalProfile, aboutProjectLink, addButton, validationConfig} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import './index.css';

const popupPictures = new PopupWithImage(modalPictures);
popupPictures.setEventListeners();

//создание новой карточки
const createCard = (data) => {
    const card = new Card({
        data: data,
        handleCardClick: (name, link) => {
            popupPictures.open({name, link});
        }
    }, '.template');
    const cardElement = card.generateCard();

    return cardElement;
}

const cardList = new Section({
        data: initialCards,
        renderer: (data) => {cardList.addItem(createCard(data));
        }},
    listContainer);
cardList.renderItems();

//создание попапа карточки
const formLocation = new PopupWithForm({
    popupSelector: modalLocation,
    handleFormSubmit: (data) => {
        cardList.addItem(createCard(data));
        formLocation.close();
    },
});

formLocation.setEventListeners();

const userInfo = new UserInfo({
    profileName: '.profile__name',
    profileProfession: '.profile__profession'
})

//создание попапа профеля
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

//слушатель открытия попапа профеля и занесения информации в инпут
aboutProjectLink.addEventListener('click', () => {
    const infoUser = userInfo.getUserInfo();
    formProfile.setInputValues(infoUser);
    formProfile.open();
});

//слушатель кнопки открытия попапа, добавления новой карточки
addButton.addEventListener('click', () => {
    formLocation.open();
});

const formProfileValidator = new FormValidator (validationConfig, modalProfile);
formProfileValidator.enableValidation();

const formLocationValidator = new FormValidator (validationConfig, modalLocation);
formLocationValidator.enableValidation();

