const initialCards = [
    {
        name: 'Озеро Абрау',
        link: 'https://images.unsplash.com/photo-1643877379965-e9593e72b6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
        name: 'Республика Карелия',
        link: 'https://images.unsplash.com/photo-1615529610458-1801dfce0a6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        name: 'Бахчисарай',
        link: 'https://images.unsplash.com/photo-1598707206160-0a6b20211774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
        name: 'Остров Русский',
        link: 'https://images.unsplash.com/photo-1626457702729-828ffb8676ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        name: 'Севастополь',
        link: 'https://images.unsplash.com/photo-1591528394888-0436647a4ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
        name: 'Шерегеш',
        link: 'https://images.unsplash.com/photo-1605516092650-b5a22b75f966?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
];

const modalPictures = document.querySelector('.popup_mask-group');
const locationImage = document.querySelector('.popup__mask-image');
const locationName = document.querySelector('.popup__location-name');

const aboutProjectLink = document.querySelector('.profile__info-edit');
const profileNameLink = document.querySelector('.profile__name');
const profileProfessionLink = document.querySelector('.profile__profession');
const addButton = document.querySelector('.profile__info-add');

const modalProfile = document.querySelector('.popup_profile');
const formProfileButton = document.querySelector('.popup__save_profile');
const formProfile = modalProfile.querySelector('[name="formProfile"]');
const nameProfileInput = formProfile.querySelector('[name="profileName"]');
const professionProfileInput = formProfile.querySelector('[name="profileProfession"]');

const formProfileEdit = document.querySelector('.popup__content');

const listContainer = document.querySelector('.elements');

const modalLocation = document.querySelector('.popup_location');
const addCardLocation = document.querySelector('.popup__content_location');
const headingCardValue = document.querySelector('.popup__element_add_heading');
const linkCardValue = document.querySelector('.popup__element_add_link');

export {initialCards, modalPictures, locationImage, locationName, aboutProjectLink,
    modalProfile, profileNameLink, professionProfileInput, profileProfessionLink,
    formProfileEdit, listContainer, addButton, modalLocation, addCardLocation, headingCardValue,
    linkCardValue, formProfileButton, nameProfileInput, formProfile};