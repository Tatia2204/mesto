import { openPopup, closePopup,  modalPictures, locationImage, viewImageClose, locationName,
    closeOverlayClick, addLikeElement, like } from './utils.js';

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

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__mask-group').src = `${this._link}`;
        this._element.querySelector('.element__location').textContent = this._name;
        this._element.querySelector('.element__mask-group').alt = this._name;
        this._element.querySelector('.element__remove').addEventListener('click', () => {
            this._removeButtonPicture();
        });
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._addLikePicture();
        });

        return this._element;
    }

    _removeButtonPicture() {
        this._element.remove();
    }

    _addLikePicture () {
        addLikeElement(like);
    }

    _handlePreviewPicture() {
        locationImage.src = this._link;
        locationName.textContent = this._name;
        locationImage.alt = this._name;
        openPopup(modalPictures);
    }

    _handleClosePicture() {
        locationImage.src = '';
        locationName.textContent = '';
        locationImage.alt = '';
        closePopup(modalPictures);
        closeOverlayClick(modalPictures);
    }

    _setEventListeners() {
        this._element.addEventListener('click', () => {
            this._handlePreviewPicture();
        });

        viewImageClose.addEventListener('click', () => {
            this._handleClosePicture();
        });

        modalPictures.addEventListener('click', () => {
            this._handleClosePicture();
        });
    }
}



initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();

    document.querySelector('.elements').append(cardElement);
});

