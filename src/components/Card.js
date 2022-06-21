class Card {
    constructor({data, handleCardClick, handleAddLike, handleDeleteLike,
                    profileId, handleCardDelete}, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._owner = data.owner._id;
        this._likes = data.likes;
        this._profileId = profileId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleAddLike = handleAddLike;
        this._handleDeleteLike = handleDeleteLike;
        this._handleCardDelete = handleCardDelete;
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
        this._likeButton = this._element.querySelector('.element__like');
        this._likeIndicator = this._element.querySelector('.element__likes');
        this._removeButton = this._element.querySelector('.element__remove');
        this._setEventListeners();
        this._checkUserLks();
        this._checkDelete();

        this._image.src = this._link;
        this._element.querySelector('.element__location').textContent = this._name;
        this._image.alt = this._name;
        this._likeIndicator.textContent =  this._likes.length;

        return this._element;
    }

    //удаление карточки
    handleRemoveBtn = () => {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners = () => {
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });

        this._removeButton.addEventListener('click', () => {
            this._handleCardDelete();
        });

        this._likeButton.addEventListener('click', () => {
            this._checkLike();
        });
     }

     getId = () => {
        return this._id;
     }

     //слушатель лайка
    handleCardLike = (data) => {
        this._likes = data.likes;
        this._likeButton.classList.toggle('element__like_active');
        this._likeIndicator.textContent =  this._likes.length;
    }

    //проверить лайк
    _checkLike = () => {
        if (this._likeButton.classList.contains('element__like_active')) {
            this._handleDeleteLike(this._id);
        } else {
            this._handleAddLike(this._id);
        }
    }

    //проверка лайков пользователей
    _checkUserLks = () => {
        if (this._likes.some((user) => {
            return this._profileId === user._id;
        })) {
            this._likeButton.classList.add('element__like_active');
        }
    }

    //удалить "карзину" с карточки др.пользователей
    _checkDelete = () => {
        if (this._owner !== this._profileId) {
            this._removeButton.remove();
        }
    }
}

export {Card};

