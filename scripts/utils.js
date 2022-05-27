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

const numberEscape = 27;

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscape);
}

function closeEscape(event) {
    if (event.keyCode === numberEscape) {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

export {initialCards, openPopup, modalPictures, locationImage, locationName, closePopup};