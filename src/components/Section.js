class Section {
    constructor ({data, renderer}, cardSelector) {
        this._data = data;
        this._renderer = renderer;
        this._container = cardSelector;
    }

    addItem = (data) => {
        this._container.prepend(data);
    }

    renderItems = () => {
        this._data.forEach((data) => {
            this._renderer(data);
        });
    }
}

export {Section};