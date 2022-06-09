class UserInfo {
    constructor({profileName, profileProfession}) {
        this._profileName = document.querySelector(profileName);
        this._profileProfession = document.querySelector(profileProfession);
    }

    getUserInfo() {
        const userInfo = {
            profileName: this._profileName.textContent,
            profileProfession: this._profileProfession.textContent
        }
        return userInfo;
    }

    setUserInfo({profileName, profileProfession}) {
        this._profileName.textContent = profileName;
        this._profileProfession.textContent = profileProfession;
    }
}

export {UserInfo};