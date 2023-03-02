
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const popupOpened = document.querySelector('.popup');

let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupOpened.classList.add('popup_opened');
}

function closePopup() {
  popupOpened.classList.remove('popup_opened');
}

function addInfo(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', addInfo);
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
