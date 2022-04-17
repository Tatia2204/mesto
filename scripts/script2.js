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

const aboutProjectLink = document.querySelector('.profile__info-edit')
const modalWindow = document.querySelector('.popup_profile');
const modalClose = modalWindow.querySelector('.popup__close_profile');
const nameInput = document.querySelector('.popup__element_add_name');
const profileNameLink = document.querySelector('.profile__name');
const professionInput = document.querySelector('.popup__element_add_profession');
const profileProfessionLink = document.querySelector('.profile__profession');
const myForm = document.querySelector('.popup__content');

const listContainer = document.querySelector('.elements');
const template = document.querySelector('.template');

const addButton = document.querySelector('.profile__info-add');
const modalLocation = document.querySelector('.popup_location');
const addClose = document.querySelector('.popup__close_location');
const elementLocationLink = document.querySelector('.element__location');
const elementLink = document.querySelector('.popup__element_add_link');
const maskGroupInput = document.querySelector('.element__mask-group');
const myFormLocation = document.querySelector('.popup__content_location');
const createButton = document.querySelector('.popup__save');
const headingValue = document.querySelector('.popup__element_add_heading');
const linkValue = document.querySelector('.popup__element_add_link');

const modalMaskGroup = document.querySelector('.popup_mask-group');

function render() {
    const html = initialCards.map(getElement);
    listContainer.append(...html);
}

function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const name = getElementTemplate.querySelector('.element__location');
    const link = getElementTemplate.querySelector('.element__mask-group');
    const removeButton = getElementTemplate.querySelector('.element__remove');
    const like = getElementTemplate.querySelector('.element__like');

    name.textContent = item.name;
    link.src = item.link;

    removeButton.addEventListener('click', removeButtonElement);
    like.addEventListener('click', addLikeElement);
    link.addEventListener('click', openAddMaskGroup);
    function openAddMaskGroup() {
        modalMaskGroup.classList.add('popup_opened');
        modalLocation.value = name.textContent;
        modalMaskGroup.src = link.src;
    }

    return getElementTemplate;
}

function addLikeElement(e) {
    const element = e.target.closest('.element__like');
    element.classList.toggle('element__like_active');
}

function removeButtonElement(e) {
    const element = e.target.closest('.element');
    element.remove();
}

function openAddMaskGroup() {
    modalMaskGroup.classList.add('popup_opened');
    modalLocation.value = elementLocationLink.textContent;
    modalMaskGroup.src = maskGroupInput.src;
}

function openAddLocation(e) {
    modalLocation.classList.add('popup_opened');
   }

addButton.addEventListener('click', openAddLocation);

function closeAddLocation() {
    modalLocation.classList.remove('popup_opened');
}

addClose.addEventListener('click', closeAddLocation);

// link.addEventListener('click', openAddMaskGroup);


function whenSubmit(e) {
    e.preventDefault();
    const el = getElement({name: headingValue.value, link: linkValue.value});
    listContainer.prepend(el);

    closeAddLocation();
}

myFormLocation.addEventListener('submit', whenSubmit);

render();

function openModalWindow() {
    modalWindow.classList.add('popup_opened');
    nameInput.value = profileNameLink.textContent;
    professionInput.value = profileProfessionLink.textContent;
}
aboutProjectLink.addEventListener('click', openModalWindow);

function closeModalWindow() {
    modalWindow.classList.remove('popup_opened');
}

modalClose.addEventListener('click', closeModalWindow);

function onSubmit(e) {
    e.preventDefault();
    profileNameLink.textContent = nameInput.value;
    profileProfessionLink.textContent = professionInput.value;
    closeModalWindow();
}

myForm.addEventListener('submit', onSubmit);



