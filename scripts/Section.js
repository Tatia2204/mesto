class Section {
    constructor ({data, renderer}, cardSelector) {
        this._data = data;
        this._renderer = renderer;
        this._cardSelector = cardSelector;
    }

    addItem = (data) => {
        this._cardSelector.append(data);
    }

    renderItems = () => {
        this._data.forEach((data) => {
            this._renderer(data);
        });
    }
}

export {Section};