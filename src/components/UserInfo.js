class UserInfo {
    constructor({profileName, profileProfession, profileAvatar}) {
        this._profileName = document.querySelector(profileName);
        this._profileProfession = document.querySelector(profileProfession);
        this._profileAvatar = document.querySelector(profileAvatar);
    }

    getUserInfo() {
        const userInfo = {
            profileName: this._profileName.textContent,
            profileProfession: this._profileProfession.textContent,
            profileAvatar: this._profileAvatar.src
        }
        return userInfo;
    }

    setUserInfo({profileName, profileProfession, profileAvatar, profileId}) {
        this._profileName.textContent = profileName;
        this._profileProfession.textContent = profileProfession;
        this._profileAvatar.src = profileAvatar;
        this._profileId = profileId;
    }

    getProfileId = () => {
        return this._profileId;
    }
}

export {UserInfo};