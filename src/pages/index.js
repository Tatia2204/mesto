import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {initialCards, modalPictures, modalLocation, listContainer,
    modalProfile, aboutProjectLink, addButton, validationConfig} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import './index.css';
import {Api} from "../components/Api.js";

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
    profileProfession: '.profile__profession',
    profileAvatar: '.profile__avatar'
})

//создание попапа профеля
const formProfile = new PopupWithForm({
    popupSelector: modalProfile,
    handleFormSubmit: (data) => {
        api.changeProfileInfo(data)
            .then((data) => {
                console.log(data);
                userInfo.setUserInfo({
                    profileName: data.profileName,
                    profileProfession: data.profileProfession
                });
                formProfile.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
    },
});

formProfile.setEventListeners();

//создание попапа изменения аватара
const formProfileAvatar = new PopupWithForm({
    popupSelector: modalProfile,
    handleFormSubmit: (data) => {
        formProfile.loading(true);
        api.changeProfileInfo(data)
            .then((data) => {
                console.log(data);
                userInfo.setUserInfo({
                    profileName: data.profileName,
                    profileProfession: data.profileProfession,
                    profileAvatar: data.profileAvatar
                });
                formProfile.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                formProfile.loading(false);
            })
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

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
    headers: {
        authorization: 'ffa77eee-e2e0-4984-80c5-a3aae1c9cc92',
        'Content-Type': 'application/json'
    }
});

api.getProfileInfo ()
    .then((data) => {
        const profile = {
            profileName: data.name,
            profileProfession:  data.about,
            profileAvatar: data.avatar
        }
        userInfo.setUserInfo(profile)
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })

// api.getInitialCards()
//     .then((data) => {
//         //создание новой карточки
//         const createCard = (data) => {
//             const card = new Card({
//                 data: data,
//                 handleCardClick: (name, link) => {
//                     popupPictures.open({name, link});
//                 }
//             }, '.template');
//             const cardElement = card.generateCard();
//
//             return cardElement;
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });
//
// api.getProfile()
//     .then((data) => {
//
//
//     })
//     .catch((err) => {
//         console.log(err);
//     });