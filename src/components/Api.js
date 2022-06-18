class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options. headers;
    }

    // getInitialCards() {
    //     return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards', {
    //         headers: {
    //             authorization: 'ffa77eee-e2e0-4984-80c5-a3aae1c9cc92'
    //         }
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json();
    //             }
    //             return Promise.reject(`Ошибка: ${res.status}`);
    //         });
    // }

    //проверка ответа
    _checkRequest(res) {
        {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    //запрос инфы о профеле
    getProfileInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkRequest);
    }

    //изменение инфы профеля
    changeProfileInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.profileName,
                about: data.profileProfession
            })
        })
            .then(this._checkRequest);
    }

    //изменение аватара профеля
    changeProfileAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.profileAvatar
            })
        })
            .then(this._checkRequest);
    }

    }



// fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards', {
//     headers: {
//         authorization: 'ffa77eee-e2e0-4984-80c5-a3aae1c9cc92'
//     }
// })
//     .then(res => res.json())
//     .then((result) => {
//         console.log(result);
//     }

export {Api};