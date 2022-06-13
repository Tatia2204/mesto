class Card {
    constructor({data, handleCardClick}, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;

    }

    _getTemplate = () => {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    generateCard = () => {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.element__mask-group');
        this._setEventListeners();

        this._image.src = this._link;
        this._element.querySelector('.element__location').textContent = this._name;
        this._image.alt = this._name;

        return this._element;
    }

    _handleRemoveBtn = () => {
        this._element.remove();
        this._element = null;
    }

    _toggleLike = () => {
        this._likePicture.classList.toggle('element__like_active');
    }

    _setEventListeners = () => {
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });

        this._removePicture = this._element.querySelector('.element__remove');
        this._removePicture.addEventListener('click', () => {
            this._handleRemoveBtn();
        });

        this._likePicture = this._element.querySelector('.element__like');
        this._likePicture.addEventListener('click', () => {
            this._toggleLike();
        });
     }
}

export {Card};

