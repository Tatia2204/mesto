import {Popup} from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._inputLink = this._popup.querySelector('.popup__mask-image');
        this._inputNameLocation = this._popup.querySelector('.popup__location-name');
    }

    open(data) {
        this._inputLink.src = data.link;
        this._inputNameLocation.textContent = data.name;
        this._inputLink.alt = data.name;

        super.open();
    }
}

export {PopupWithImage};