
const popup = document.querySelector('.popup');
const openPopups = document.querySelector('.profile__btn-edit');
const closePopups = document.querySelector('.popup__close');
const popupEdit = document.querySelector ('.popup_button_edit')
let formElement = document.querySelector('.popup__input-form');
let inputName = document.querySelector('.popup__input_type_name');
let inputInfo = document.querySelector('.popup__input_type_info');
let profileName = document.querySelector('.profile__title');
let profileInfo = document.querySelector('.profile__text');


function openPopup(popup) {
    popup.classList.add('popup_opened');
  }
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }
openPopups.addEventListener('click', function() {
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
   openPopup(popupEdit);
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileInfo.textContent = inputInfo.value;
    closePopup(popupEdit);
}
formElement.addEventListener('submit', formSubmitHandler);



closePopups.addEventListener('click', function() {
    closePopup(popupEdit);
});


