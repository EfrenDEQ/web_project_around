const openEditButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeEditButton = popup.querySelector(".popup__close-button");

function popupOpen() {
  NameInput.value = ProfileName.textContent;
  AboutInput.value = ProfileAbout.textContent;
  popup.classList.toggle("popup__unhidden");
}

openEditButton.addEventListener("click", popupOpen);
closeEditButton.addEventListener("click", popupOpen);

const FormElement = document.querySelector(".popup__container");
const FormSubmit = FormElement.querySelector(".popup__submit-button");

const NameInput = FormElement.querySelector(".popup__input-name");
const AboutInput = FormElement.querySelector(".popup__input-about");
const ProfileName = document.querySelector(".profile__name");
const ProfileAbout = document.querySelector(".profile__about");

function handleFormSubmit(evt) {
  evt.preventDefault();
  ProfileName.textContent = NameInput.value;
  ProfileAbout.textContent = AboutInput.value;
  popup.classList.toggle("popup__unhidden");
}

FormSubmit.addEventListener("click", handleFormSubmit);
