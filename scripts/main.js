

const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.popup-open');


let formElement = document.querySelector('.popup__input');
let inputName = document.querySelector('.popup__item-name');
let inputInfo = document.querySelector('.popup__item-info');
let profileName = document.querySelector('.profile__title');
let profileInfo = document.querySelector('.profile__text');
inputName.value = profileName.textContent;
inputInfo.value = profileInfo.textContent;

function close (popup){
   popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', function() {
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
    popup.classList.add('popup_opened')
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileInfo.textContent = inputInfo.value;
    close (popup);
}
formElement.addEventListener('submit', formSubmitHandler);


const closePopup = document.querySelector('.popup__close');
closePopup.addEventListener('click', function() {
   close (popup);
});


