class Section {
    constructor ({renderer}, cardSelector) {

        this._renderer = renderer;
        this._container = cardSelector;
    }

    addItem = (data) => {
        this._container.prepend(data);
    }

    //отрисовка карточек
    renderItems = (items) => {
        items.forEach((item) => {
            this._renderer(item);
        });
    }

    addCard = (data) => {
        this._container.append(data);
    }
}

export {Section};