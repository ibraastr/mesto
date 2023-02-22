
const profile = document.querySelector('.profile');
const profileBox = profile.querySelector('.profile__box');
const profileInfo = profile.querySelector('.profile__info');
const editButton = profile.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');

function openPopup() {
  let nameInput = document.querySelector('.popup__input_type_name');
  let jobInput = document.querySelector('.popup__input_type_job');
  let popupOpened = document.querySelector('.popup');

  nameInput.value = profile.querySelector('.profile__name').textContent;
  jobInput.value = profile.querySelector('.profile__job').textContent;

  popupOpened.classList.add('popup_opened');
}

function closePopup() {
  let nameInput = document.querySelector('.popup__input_type_name');
  let jobInput = document.querySelector('.popup__input_type_job');
  let popupOpened = document.querySelector('.popup');
  popupOpened.classList.remove('popup_opened');

  nameInput.value = '';
  jobInput.value = '';
}

function addInfo(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__input_type_name');
  let jobInput = document.querySelector('.popup__input_type_job');

  profile.querySelector('.profile__name').textContent = nameInput.value;
  profile.querySelector('.profile__job').textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', addInfo);
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
