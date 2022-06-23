import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {modalPictures, modalLocation, listContainer, modalDeleteCard, avatarButton,
    modalProfile, aboutProjectLink, addButton, validationConfig, modalAvatar} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import './index.css';
import {Api} from "../components/Api.js";
import {PopupWithConfirmation} from "../components/PopupWithConfirmation.js";

const popupPictures = new PopupWithImage(modalPictures);
popupPictures.setEventListeners();

const popupDelete = new PopupWithConfirmation(modalDeleteCard);
popupDelete.setEventListeners();

const userInfo = new UserInfo({
    profileName: '.profile__name',
    profileProfession: '.profile__profession',
    profileAvatar: '.profile__avatar'
})

//создание новой карточки
const createCard = (data) => {
    const card = new Card({
        data: data,
        profileId: userInfo.getProfileId(),
        handleCardClick: (name, link) => {
            popupPictures.open({name, link});
        },
        handleAddLike: () => {
            api.addLike(card.getId())
                .then((data) => {
                    card.handleCardLike(data);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                })
        },
        handleDeleteLike: () => {
            api.deleteLike(card.getId())
                .then((data) => {
                    card.handleCardLike(data);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                })
        },
        handleCardDelete: () => {
            popupDelete.open();
            popupDelete.setSubmitDelete(() => {
                api.deleteCard(card.getId())
                    .then(() => {
                        card.handleRemoveBtn();
                        popupDelete.close();
                    })
                    .catch((err) => {
                        console.log(`Ошибка: ${err}`);
                    });
            });
        }
    }, '.template');

    const cardElement = card.generateCard();

    return cardElement;
}

const cardList = new Section({
        renderer: (data) => {cardList.addCard(createCard(data));
        }},
    listContainer);

//создание попапа карточки
const formLocation = new PopupWithForm({
    popupSelector: modalLocation,
    handleFormSubmit: (data) => {
        formLocation.renderLoading(true);
        api.addNewCard(data)
            .then((data) => {

            cardList.addItem(createCard(data));
            formLocation.close();
        })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                formLocation.renderLoading(false);
            })
    },
});

formLocation.setEventListeners();

//создание попапа профеля
const formProfile = new PopupWithForm({
    popupSelector: modalProfile,
    handleFormSubmit: (data) => {
        formProfile.renderLoading(true);
        api.changeProfileInfo(data)
            .then((data) => {
                const profile = {
                    profileName: data.name,
                    profileProfession: data.about,
                    profileAvatar: data.avatar,
                    profileId: data._id
                }
                userInfo.setUserInfo(profile);
                formProfile.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                formProfile.renderLoading(false);
            })
    },
});

formProfile.setEventListeners();

//создание попапа изменения аватара
const formProfileAvatar = new PopupWithForm({
    popupSelector: modalAvatar,
    handleFormSubmit: (data) => {
        formProfileAvatar.renderLoading(true);
        api.changeProfileAvatar(data)
            .then((data) => {
                const avatar = {
                    profileName: data.name,
                    profileProfession: data.about,
                    profileAvatar: data.avatar,
                    profileId: data._id
                }
                userInfo.setUserInfo(avatar);
                formProfileAvatar.close();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
            .finally(() => {
                formProfile.renderLoading(false);
            })
    },
});

formProfileAvatar.setEventListeners();

//слушатель открытия попапа профеля и занесения информации в инпут
aboutProjectLink.addEventListener('click', () => {
    formProfileValidator.resetValidation();
    const infoUser = userInfo.getUserInfo();
    formProfile.setInputValues(infoUser);
    formProfile.open();
});

//слушатель кнопки открытия попапа, добавления новой карточки
addButton.addEventListener('click', () => {
    formLocationValidator.resetValidation();
    formLocation.open();
});

//слушатель кнопки изменения аватара
avatarButton.addEventListener('click', () => {
    formAvatarValidator.resetValidation();
    formProfileAvatar.renderLoading(false);
    formProfileAvatar.open();
});

const formProfileValidator = new FormValidator (validationConfig, modalProfile);
formProfileValidator.enableValidation();

const formLocationValidator = new FormValidator (validationConfig, modalLocation);
formLocationValidator.enableValidation();

const formAvatarValidator = new FormValidator (validationConfig, modalAvatar);
formAvatarValidator.enableValidation();

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
    headers: {
        authorization: 'ffa77eee-e2e0-4984-80c5-a3aae1c9cc92',
        'Content-Type': 'application/json'
    }
});

Promise.all([api.getProfileInfo (), api.getInitialCards ()])
    .then(([data, cards]) => {
        const profile = {
            profileName: data.name,
            profileProfession:  data.about,
            profileAvatar: data.avatar,
            profileId: data._id
        }
        userInfo.setUserInfo(profile);
        cardList.renderItems(cards);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })

