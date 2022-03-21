
const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__btn-edit');


let formElement = document.querySelector('.popup__input-form');
let inputName = document.querySelector('.popup__input_name');
let inputInfo = document.querySelector('.popup__input_info');
let profileName = document.querySelector('.profile__title');
let profileInfo = document.querySelector('.profile__text');

//почему вы не хотите принять такой код, ведь он работает//
openPopup.addEventListener('click', function() {
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
    popup.classList.add('popup_opened')
});
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileInfo.textContent = inputInfo.value;
    popup.classList.remove('popup_opened');
}
formElement.addEventListener('submit', formSubmitHandler);


const closePopup = document.querySelector('.popup__close');
closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});


